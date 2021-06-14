import React from "react"
import { useEffect } from "react"
import { useState } from "react"

export default function Home() {
  const [data, setdata] = useState("")

  useEffect(async () => {
    const responce = await fetch(".netlify/functions/hello")
    const output = await responce.json()
    setdata(output)
  }, [])

  return (
    <div>
      <div>
        <h2>data is {data.message}</h2>
      </div>
      Hello world!Junaid
    </div>
  )
}
