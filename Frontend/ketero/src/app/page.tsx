"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

interface Selection {
  title: string;
  description: string;
  path: string;
}

export default function Home(){

  const selections: Selection[] = [
      {
          title: "Join Ketero",
          description: "Get the power to reserve from quality businesses.",
          path: "/signup"
      }

  ];
  
  return (
    <div className="flex justify-center items-center h-screen">
      {selections.map((selection, index) => (
        <Link key={index} href={selection.path}>
          <motion.div
            transition={{ duration: 0.5, delay: 0.1 }}
            initial={{
              x: -400,
              y: -9,
              scale: 1,
              rotate: 48,
            }}
            animate={{
              x: 0,
              y: 0,
              scale: 1,
              rotate: 0,
            }}
          >
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="cursor-pointer"
          >
            <Card>
              <CardHeader>
                <CardTitle>{selection.title}</CardTitle>
                <CardDescription>{selection.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button>Register</Button>
              </CardContent>
            </Card>
          </motion.div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
