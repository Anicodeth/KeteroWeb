import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Link from 'next/link';
import { Button } from "@/components/ui/button";

interface Selection{
  title: string;
  description: string;
  path: string;
}

export default function selector(){

  const selections:Selection[] = [
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
          path: "/signup/mezgebu"
      }

  ]
  return (
<>
      <div className="flex items-center p-10 ">
          <h1 className = "text-4xl font-bold font-sans">Welcome to Ketero</h1>
      </div>

      <div className = "p-3 h-26">
          {
              selections.map((selection, index)=>(

                  <Link key = {index} href= {selection.path}>
                       <Card >
                          <CardHeader>
                              <CardTitle>{selection.title}</CardTitle>
                              <CardDescription>{selection.description}</CardDescription>
                          </CardHeader>

                          <CardContent>
                              <Button>
                                  Register
                              </Button>
                          </CardContent>
                      </Card>
                  </Link>
 
              ))
          }
           </div>
           
           </>
    
  )
}
