import { useEffect, useState } from "react"
import { FaCheck } from "react-icons/fa"

export default function PreviewCards({ item }) {
  const [clicked, setClicked] = useState(false)
  useEffect(() => {
    if (!clicked) return
    setTimeout(() => setClicked(false), 3000)
  }, [clicked])
  function sendThing() {
    fetch("/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item: item,
      }),
    })
    setClicked(true)
  }
  return (
    <div className="container relative shadow-2xl mx-auto my-3 rounded-xl bg-gray-200 hover:scale-105 transition-all duration-500 flex flex-col lg:flex-row md:flex-row">
      <img className="w-full md:w-60 lg:w-60 rounded-lg lg:rounded-r-none " src={item?.url} />
      <div className="p-6">
        <h1 className="drop-shadow-2xl font-semibold">{item?.name || "Unnamed"}</h1>
        <h1 className="text-2xl font-bold">${item?.price || "20"}</h1>
        <div className="pt-3 mb-10">
          <p className="text-gray-600 font-semibold">Description:</p>
          <p>{item?.description || "No description"}</p>
        </div>
      </div>
      <div className="relative md:absolute lg:absolute flex justify-center bottom-2 right-5">
        <button onClick={() => sendThing()} className={` p-3 rounded-lg text-lg font-bold ${clicked ? "bg-green-500 hover:bg-green-400" : "bg-blue-500 hover:bg-blue-400"}`}>{clicked ? <FaCheck /> : "Buy it now!"}</button>
      </div>
    </div>
  )
}