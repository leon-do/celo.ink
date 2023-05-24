import { NextResponse } from "next/server";
import { Masa } from "@masa-finance/masa-sdk";
import { ethers } from "ethers";

// https://nextjs.org/docs/app/building-your-application/routing/router-handlers
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const soulName = searchParams.get("soulName");
  if (!soulName) return NextResponse.json({ error: "soulName is required" });
  const provider = new ethers.providers.JsonRpcProvider("https://forno.celo.org");
  const wallet = new ethers.Wallet(ethers.Wallet.createRandom().privateKey, provider);
  const masa = new Masa({ wallet, networkName: "celo" });
  const address = await masa.soulName.resolve(soulName as string);
  if (address) return NextResponse.json({ address });
  return NextResponse.json({ error: `${soulName} does not exist!` });
}
