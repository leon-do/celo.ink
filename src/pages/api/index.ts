import type { NextApiRequest, NextApiResponse } from "next";
import { Masa } from "@masa-finance/masa-sdk";
import { ethers } from "ethers";

type Response = {
  address: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Response | { error: string }>): Promise<void> {
  const { soulName } = req.query; // leondo.celo
  if (!soulName) return res.status(400).send({ error: "soulName is required" });
  const provider = new ethers.providers.JsonRpcProvider("https://forno.celo.org");
  const wallet = new ethers.Wallet(ethers.Wallet.createRandom().privateKey, provider);
  const masa = new Masa({ wallet, networkName: "celo" });
  const address = await masa.soulName.resolve(soulName as string);
  address ? res.send({ address }) : res.status(400).send({ error: `${soulName} does not exist!` });
}
