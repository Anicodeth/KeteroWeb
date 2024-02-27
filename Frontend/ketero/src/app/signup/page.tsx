"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

interface Selection {
  title: string;
  description: string;
  path: string;
}

export default function Selector() {

  const selections: Selection[] = [
    {
      title: "Register as a Client",
      description: "Get the power to reserve from quality businesses.",
      path: "/signup/client"
    },
    {
      title: "Register as a Business",
      description: "Get the power to host your services online.",
      path: "/signup/business"
    },
    {
      title: "Register as a Mezgeb",
      description: "Get the power to facilitate businesses.",
      path: "/signup/mezgeb"
    }
  ];

  return (
    <>
      <div className="flex items-center p-10">
        <h1 className="text-4xl font-bold font-sans">Welcome to Ketero</h1>
      </div>

      <div className="p-3 h-26">
        {selections.map((selection, index) => (
          <Link key={index} href={selection.path}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileTap={{ scale: 0.95 }}
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
          </Link>
        ))}
      </div>
    </>
  );
}
