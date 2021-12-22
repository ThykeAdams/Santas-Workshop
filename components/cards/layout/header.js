import { FaHammer } from "react-icons/fa"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
  const [productDropdown, setProductDropdown] = useState(false)
  return (
    <>
      <div className="w-full relative bg-header h-16 text-white flex px-5">
        <Link href="/">
          <div className="w-4/12 flex items-center">
            <FaHammer className="w-12" />
            <p className="text-xl font-bold">The Workshop</p>
          </div>
        </Link>
        <div className="w-8/12 flex items-center justify-end">
          <a onClick={() => setProductDropdown(!productDropdown)} className="hover:border-b-4 border-gray-50 transition-all duration-500 mx-3">Products</a>
          <Link href="/cart">
            <a className="hover:border-b-4 border-gray-50 transition-all duration-500  mx-3">Cart</a>
          </Link>
          <Link href="/login">
            <a className="hover:border-b-4 border-gray-50 transition-all duration-500  mx-3">Login</a>
          </Link>
        </div>
      </div>
      {productDropdown ? (
        <div className="z-50 absolute top-20 right-20 bg-gray-900 text-white p-3 rounded-2xl">
          <Link href="/shop/lights">
            <div className="hover:bg-gray-800 transition-all duration-150 w-full my-2 p-2">
              Christmas Lights
            </div>
          </Link>
          <Link href="/shop/decorations">
            <div className="hover:bg-gray-800 transition-all duration-150 w-full my-2 p-2">
              Decorations
            </div>
          </Link>
          <Link href="/shop/clothing">
            <div className="hover:bg-gray-800 transition-all duration-150 w-full my-2 p-2">
              Clothing
            </div>
          </Link>
          <Link href="/shop/candy">
            <div className="hover:bg-gray-800 transition-all duration-150 w-full my-2 p-2">
              Candy
            </div>
          </Link>
        </div>
      ) : null}
    </>
  )
}