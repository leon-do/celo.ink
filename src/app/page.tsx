"use client";

import { useState } from "react";

export default function Home() {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState(0);
  const [comment, setComment] = useState("");

  const handleQR = () => {
    const url = `celo://wallet/pay?address=${address}&comment=${comment}${amount ? `&amount=${amount}` : ""}`;
    console.log(url);
  };

  return (
    <main className="bg-amber-50 flex h-screen body-font font-ezra">
      <div className="m-auto">
        <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Celo.ink</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">Use Celo.ink to customize invoices for Valora mobile app. Generate beautiful QR codes for your customers to pay with Celo Dollars (cUSD).</p>
            <div className="relative">
              <label htmlFor="name" className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">
                Address or .celo domain
              </label>
              <input onChange={(e) => setAddress(e.target.value)} type="text" className="block w-full rounded-md focus:outline-none py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 text-center" placeholder="leondo.celo" />
            </div>
            <div className="relative">
              <label htmlFor="name" className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">
                cUSD (optional)
              </label>
              <input onChange={(e) => setAmount(Number(e.target.value))} type="number" className="block w-full rounded-md focus:outline-none py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 text-center" placeholder="1.99" />
            </div>
            <div className="relative">
              <label htmlFor="name" className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">
                Comment (optional)
              </label>
              <input onChange={(e) => setComment(e.target.value)} type="text" className="block w-full rounded-md focus:outline-none py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 text-center" placeholder="Item #123" />
            </div>
            <div>
              <div className="text-center">
                <button onClick={handleQR} className="flex justify-center rounded-lg bg-amber-200 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300">
                  Generate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
