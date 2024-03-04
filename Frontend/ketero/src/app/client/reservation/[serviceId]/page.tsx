
"use client"
import { useState } from 'react';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { getService } from '../../../../services/ServiceServices';
import { useQuery, useMutation } from 'react-query';
import { useParams } from 'next/navigation';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Service } from '@/models/Service';
import { Grid } from 'react-loader-spinner';
import { createReservation } from '../../../../services/ReservationService';
import { toast } from 'sonner';
import { Reservation } from '@/models/Reservation';
import { motion } from 'framer-motion';

const ReservationSchema = z.object({
  date: z.string(),
  time: z.string(),
});

type ReservationData = z.infer<typeof ReservationSchema>;

const ReservationForm = () => {
  const [formData, setFormData] = useState<Partial<ReservationData>>({});
  const [errors, setErrors] = useState<z.ZodIssue[] | null>(null);
  const [dateAndTime, setDateAndTime] = useState<any>();

  const [businessId, setBusinessId] = useState('');
  const [clientId, setClientId] = useState('');

  const params = useParams();
  const serviceId: string = params.serviceId as string;

  const { data, isLoading, isError } = useQuery('service', () => getService(serviceId));
  const createReservationMutation = useMutation((reservation: Reservation) => createReservation(reservation), {
    onSuccess: () => {
      toast('Reservation created successfully');
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = ReservationSchema.safeParse(formData);
    if (result.success) {
      const combined = new Date(`${formData.date}T${formData.time}`);
      setDateAndTime(combined);

      setBusinessId(data.businessId);

      const sessionData: any = JSON.parse(sessionStorage.getItem('user')!);
      setClientId(sessionData._id);
      const client = sessionData._id;


      if (!client || !data.businessId || !combined || !serviceId) {
        toast('Missing Data');
        return;
      }
      createReservationMutation.mutateAsync({
        clientId:client,
        businessId: data.businessId,
        dateAndTime:combined.toISOString(),
        serviceId,
      });

      setFormData({});
      setErrors(null);
    } else {
      setErrors(result.error.errors);
    }
  };

  return (
    <motion.div
    initial = {{ opacity: 0, x:-50}}
    animate = {{ opacity: 1, x: 0}}
    transition= {{ duration: 0.5, delay:0.1}}
    >
    <form onSubmit={handleSubmit} className="max-w-md flex flex-col p-10  mx-auto" >
      {isLoading && (
        <div className="flex items-center justify-center">
          <Grid visible={true} height="80" width="80" color="#700F14" ariaLabel="grid-loading" radius="12.5" wrapperStyle={{}} wrapperClass="grid-wrapper" />
        </div>
      )}
      {isError && <div> Error Fetching </div>}
      {data && 
                  <motion.div
                      initial = {{ opacity: 0}}
                      animate = {{ opacity: 1}}
                      transition= {{ duration: 0.5, delay:0.1}}>
                      <ServiceShadCard service={data} />
                  </motion.div>
                  }

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date || ''}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-3 py-2 mt-1 mb-3"
      />
      {errors && errors.find((error) => error.path[0] === 'date') && <div className="text-red-500">Date is required</div>}

      <label htmlFor="time">Time:</label>
      <input
        type="time"
        id="time"
        name="time"
        value={formData.time || ''}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-3 py-2 mt-1 mb-3"
      />
      {errors && errors.find((error) => error.path[0] === 'time') && <div className="text-red-500">Time is required</div>}
      <Button type="submit">{createReservationMutation.isLoading ? 'Reserving...' : 'Submit Reservation'}</Button>
    </form>
    </motion.div>
  );
};

const ServiceShadCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <Card className="h-fit">
      <CardHeader>
        <div className="inset-0 bg-cover h-40 bg-center" style={{ backgroundImage: `url(${service.imageUrl})` }}></div>
        <CardTitle>{service.name}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
        <CardDescription>{service.price}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ReservationForm;
