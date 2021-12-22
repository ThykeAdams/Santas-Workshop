import Head from 'next/head'
import Header from '../components/cards/layout/header'
import PreviewCards from '../components/cards/PreviewCard'
import items from "../items"
import Router from "next/router"
import { useState, useEffect } from 'react'
import Footer from '../components/cards/layout/footer'

export default function Home() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  function login() {
    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    }).then(r => r.json()).then(r => {
      if (r.code === 1002) Router.push("/")
    })
  }
  return (
    <>
      <div className="flex flex-col min-h-screen max-w-screen overflow-hidden">
        <Head>
          <title>Santas Workshop</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main>
          <div className='w-screen bg-blue-500 h-screen flex flex-col items-center justify-center authbg'>
            <div className='flex flex-col justify-center bg-gray-200 p-5 rounded-xl'>
              <img className='w-36' src="/santa.png" />
              <div className="flex flex-col bg-gray-300 p-4 space-x-4 rounded-lg mb-3">
                Username
                <input onChange={(i) => setUsername(i.target.value)} className="bg-gray-400 outline-none rounded-lg px-2" type="text" placeholder="Provider" />
              </div>
              <div className="flex flex-col bg-gray-300 p-4 space-x-4 rounded-lg mb-3">
                Password
                <input onChange={(i) => setPassword(i.target.value)} className="bg-gray-400 outline-none rounded-lg px-2" type="text" placeholder="Provider" />
              </div>
              <div onClick={() => login()} className="bg-blue-500 hover:bg-blue-400 p-3 rounded-lg text-center text-white text-2xl font-semibold">
                Log In
              </div>
              <a href='/register'>Dont have an account?</a>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
