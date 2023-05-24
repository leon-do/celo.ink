import { useState } from "react";
import QRCode from "qrcode";
import { ethers } from "ethers";
import Image from "next/image";

export default function QR() {
  const [soulName, setsoulName] = useState("leondo.celo");
  const [amount, setAmount] = useState(1.99);
  const [comment, setComment] = useState("Item #42220");
  // prettier-ignore
  const [qr, setQR] = useState("data:image/png;base64,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");

  const handleQR = async () => {
    if (soulName === "") return console.error("empty soul name");
    let address = soulName;
    // if soulName is not an address, fetch it
    if (soulName.indexOf("0x") === -1) address = await fetch(`/api?soulName=${soulName}`).then((res) => res.json().then((res) => res.address));
    if (!ethers.utils.isAddress(address)) return console.error("invalid address");
    // celo://wallet/pay?address=0xc49a7E03d79d3eEFb09920263a42D33B88dA9250&comment=Item%20%2342220&amount=1.99
    console.log(soulName);
    const urlComment = soulName ? `&comment=${encodeURIComponent(comment + "\n\n" + soulName + "\nwww.celo.ink")}` : `&comment=${encodeURIComponent(comment + "\nwww.celo.ink")}`;
    const urlAmount = amount ? `&amount=${amount}` : "";
    const url = `celo://wallet/pay?address=${address}${urlComment}${urlAmount}`;
    const qr = await QRCode.toDataURL(url, { errorCorrectionLevel: "H", type: "image/png", width: 400, margin: 3, color: { dark: "#476520ff", light: "#FCFF5255" } });
    setQR(qr);
    console.log({ url, qr });
  };

  return (
    <div className="m-auto">
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        {/* title */}
        <div className="flex justify-center">
          <Image width="300" height="300" alt="Celo.ink" src="https://github-production-user-asset-6210df.s3.amazonaws.com/19412160/240450299-a4d6e342-b738-4cd1-aa46-d25f086198db.svg" className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" />
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <p className="mt-6 text-lg leading-8 text-gray-600">Use Celo.ink to customize invoices for Valora mobile app. Generate beautiful QR codes for your customers to pay with Celo dollars.</p>
          <div className="flex justify-center m-6">
            <Image alt="qr" src={qr} />
          </div>
          <div className="relative  m-6">
            <label htmlFor="name" className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">
              Address or .celo domain
            </label>
            <input onChange={(e) => setsoulName(e.target.value)} value={soulName} placeholder={soulName} type="text" className="block w-full rounded-md focus:outline-none py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 text-center" />
          </div>
          <div className="relative m-6">
            <label htmlFor="name" className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">
              cUSD (optional)
            </label>
            <input onChange={(e) => setAmount(Number(e.target.value))} value={amount} type="number" className="block w-full rounded-md focus:outline-none py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 text-center" />
          </div>
          <div className="relative m-6">
            <label htmlFor="name" className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">
              Comment (optional)
            </label>
            <input onChange={(e) => setComment(e.target.value)} value={comment} type="text" className="block w-full rounded-md focus:outline-none py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 text-center" />
          </div>
          <div>
            <div className="flex justify-center m-6">
              <button onClick={handleQR} className="flex justify-center rounded-full bg-amber-200 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300">
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
