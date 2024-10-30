"use client"

import { useEffect, useState } from "react"

import { client } from "@/lib/rpc"

export default function Home() {
  const [message, setMessage] = useState<string>("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await client.api.hello.$get()
        const { message } = await res.json()
        setMessage(message)
      } catch (e) {
        console.log(e)
      }
    }

    void fetchData()
  }, [])

  if (!message) return <p>Loading...</p>

  return <p>{message}</p>
}
