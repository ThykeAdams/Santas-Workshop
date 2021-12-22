import Head from "next/head"
import Header from "../../components/cards/layout/header"
import { useRouter } from "next/router"
import PreviewCards from "../../components/cards/PreviewCard"

import items from "../../items"
import Footer from "../../components/cards/layout/footer"
export default function ShopItems() {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <div className="flex flex-col min-h-screen max-w-screen overflow-hidden">
        <Head>
          <title>Santas Workshop | Shop</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main>
          <div className='w-screen bg-blue-500 h-96 flex flex-col items-center justify-center header relative'>
            <img className='w-36' src="/santa.png" />
            <h1 className='text-white text-5xl font-bold drop-shadow-2xl'>Santas Workshop</h1>
            <h1 className='text-white font-bold text-xl'>{items?.names[id]} for Everyone!</h1>


          </div>
        </main>
        <secion className="pt-10">
          <h1 className='text-center text-3xl font-extrabold px-10'>View our Amazing display of {items?.names[id]}!</h1>
          <div className='flex flex-col justify-center object-center w-screen'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 m-10'>
              {items.shopItems.filter(i => i?.type === id).map((item) => (
                <PreviewCards item={item} />
              ))}
            </div>
          </div>
        </secion>
      </div>
      <Footer />
    </>
  )
}