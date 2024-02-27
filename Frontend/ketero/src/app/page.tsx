import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  useEffect(()=>{
    router.push("/signup")
  }, [])
  return (
    <h1>Ketero</h1>
  )
}
