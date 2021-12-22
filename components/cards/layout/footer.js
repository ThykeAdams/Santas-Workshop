import { FaHammer } from "react-icons/fa"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Footer() {
  return (
    <>
      <div className="w-screen h-96 bg-gray-100 flex flex-col md:flex-row lg:flex-row">
        <div className="w-full md:w-6/12 lg:w-6/12 flex flex-col items-center justify-center text-center pt-10 md:pt-0 lg:pt-0 px-10">
          <p className="">Brought to you by</p>
          <h1 className="text-gray-400 font-extrabold text-5xl">Santas Workshop</h1>
        </div>
        <div className="w-full md:w-6/12 lg:w-6/12 flex flex-col items-center justify-center text-center pt-10 md:pt-0 lg:pt-0 px-10">
          <p className="text-2xl">This is not a real website, this was for a React competition</p>
        </div>

      </div>
    </>
  )
}