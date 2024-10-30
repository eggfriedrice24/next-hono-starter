"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [message, setMessage] = useState<string>("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/hello")
        const { message } = (await res.json()) as { message: string }
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
