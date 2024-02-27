import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
          <Card>
            <CardHeader>
              <CardTitle>{selection.title}</CardTitle>
              <CardDescription>{selection.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button>Register</Button>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
