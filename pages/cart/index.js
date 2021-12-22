import Head from 'next/head'
import { useEffect, useState } from 'react'
import { FaCross, FaTimes } from 'react-icons/fa'
import Footer from '../../components/cards/layout/footer'
import Header from '../../components/cards/layout/header'
import PreviewCards from '../../components/cards/PreviewCard'

export default function Home() {
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch("/api/cart").then(res => res.json()).then(c => {
      setCart(c)
    })
  }, [])
  function removeItem(itemName) {
    fetch(`/api/cart/${encodeURIComponent(itemName)}`, {
      method: "DELETE"
    }).then(res => res.json()).then(setCart)
  }
  let total = 0
  for (let c of cart) {
    total = total + +c.item.price
  }
  return (
    <>
      <div className="flex flex-col min-h-screen max-w-screen overflow-hidden">
        <Head>
          <title>Santas Workshop | Cart</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main>
          <div className='w-screen bg-blue-500 h-96 flex flex-col items-center justify-center header relative'>
            <img className='w-36' src="/santa.png" />
            <h1 className='text-white text-5xl font-bold drop-shadow-2xl'>Santas Workshop</h1>
            <h1 className='text-white font-bold text-xl'>Give us your money Bitch</h1>


          </div>
        </main>
        <secion className="pt-10 w-screen">
          <h1 className='text-center text-3xl font-extrabold'>View your amazing selection!</h1>
          <div className='flex justify-center pt-10'>
            <div className="w-screen md:w-8/12 lg:w-8/12 bg-gray-200 rounded-2xl p-10">
              <p>Your cart:</p>
              {cart.length > 0 ? (
                <>
                  {cart?.map(cart => (
                    <div className='my-3 p-2 md:p-0 lg:p-0 w-full flex flex-col md:flex-row lg:flex-row bg-gray-300 rounded-2xl'>
                      <div className="w-full md:w-2/12 lg:w-2/12">
                        <img className='w-full md:w-24 lg:w-24 md:h-24 lg:h-24 rounded-2xl md:rounded-r-none lg:rounded-r-none' src={cart?.item?.url} />
                      </div>
                      <div className="w-7/12 lg:flex lg:flex-col pt-2">
                        <div className='text-center md:text-left lg:text-left'>
                          <p className='text-2xl font-extrabold'>{cart?.item?.name}</p>
                          <p>{cart?.item?.description}</p>
                        </div>
                      </div>
                      <div className='w-full md:w-3/12 lg:w-3/12 flex justify-center'>
                        <div className="w-6/12 flex justify-center text-5xl font-extrabold items-center">
                          ${cart?.item?.price}
                        </div>
                        <div className="w-6/12 flex justify-end text-5xl font-extrabold items-center">
                          <div onClick={() => removeItem(cart?.item.uuid)} className='bg-red-600 rounded-lg text-white'>
                            <FaTimes />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : <p className='text-center text-5xl font-extrabold'>No items</p>}
              <div className='text-right text-2xl font-extrabold'>
                Total: ${total.toFixed(2)}
                <button className="p-3 rounded-lg text-lg font-bold bg-blue-500 hover:bg-blue-400 mx-4">Checkout</button>
              </div>
            </div>
          </div>
        </secion>
      </div>
      <Footer />
    </>
  )
}
