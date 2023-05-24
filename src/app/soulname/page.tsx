"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import QRCode from "qrcode";
import { ethers } from "ethers";

export default function Subdomain() {
  const { push } = useRouter();
  const soulName = useSearchParams().get("soulname");
  const [address, setAddress] = useState("0x0000000000000000000000000000000000000000");
  const [qr, setQR] = useState("data:image/png;base64,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");

  useEffect(() => {
    handleQR();
  });

  const handleQR = async () => {
    if (soulName === "" || !soulName) return push("/");
    let address = soulName;
    if (soulName.indexOf("0x") === -1) address = await fetch(`/api?soulName=${soulName}`).then((res) => res.json().then((res) => res.address));
    if (!ethers.utils.isAddress(address)) return push("/");
    setAddress(address);
    const url = `celo://wallet/pay?address=${address}`;
    const qr = await QRCode.toDataURL(url, { errorCorrectionLevel: "H", type: "image/png", width: 400, margin: 3, color: { dark: "#476520ff", light: "#FCFF5255" } });
    setQR(qr);
    console.log({ qr, url });
  };

  return (
    <main className="py-24 sm:py-32">
      <div className="m-auto">
        <div className="px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center text-gray-800 text-5xl font-mono">{soulName}</div>
          <div className="text-center text-gray-600 text-xl pt-6 font-mono">{address}</div>

          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center m-6">
              <Image alt="qr" width="400" height="400" src={qr} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}