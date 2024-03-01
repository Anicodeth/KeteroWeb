"use client"

import { useState } from 'react';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { getService } from "../../../../services/ServiceServices";
import { useQuery } from "react-query";
import { useRouter } from "next/navigation";
import { useParams } from '../../../../../node_modules/next/navigation';


const ReservationSchema = z.object({
  date: z.date(),
  time: z.string(),
});

type ReservationData = z.infer<typeof ReservationSchema>;

const ReservationForm = () => {
  const [formData, setFormData] = useState<Partial<ReservationData>>({});
  const [errors, setErrors] = useState<z.ZodIssue[] | null>(null);
  const [dateAndTime, setDateAndTime ] = useState<any>();

   const params = useParams()
   const serviceId:string = params.serviceId as string;


  const {data, isLoading, isError} = useQuery( "service", ()=> getService(serviceId))

  
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
      const dateAndTime = new Date(`${formData.date}T${formData.time}`);
      setDateAndTime(dateAndTime);

      setFormData({});
      setErrors(null);
    } else {
      setErrors(result.error.errors);
    }
  };

  return (

    <form onSubmit={handleSubmit} className="max-w-md flex flex-col p-10  mx-auto">
      {isLoading && <div> Loading... </div>}
      {isError && <div> Error Fetching </div>}
      {data && <div> DATA </div>}

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date || ''}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-3 py-2 mt-1 mb-3"
      />
      {errors && errors.find(error => error.path[0] === 'date') && (
        <div className="text-red-500">Date is required</div>
      )}

      <label htmlFor="time">Time:</label>
      <input
        type="time"
        id="time"
        name="time"
        value={formData.time || ''}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-3 py-2 mt-1 mb-3"
      />
      {errors && errors.find(error => error.path[0] === 'time') && (
        <div className="text-red-500">Time is required</div>
      )}
        <Button>Submit Reservation</Button>
    </form>
  );
};

export default ReservationForm;
