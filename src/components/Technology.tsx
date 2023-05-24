import Image from "next/image";

export default function Technology() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            <Image width={75} height={75} className="h-12 self-start" src="https://images.ctfassets.net/wr0no19kwov9/5yVbTScDuXaZE0JL0w1kL0/f626c00085927069b473e684148c36f3/Union_1_.svg" alt="" />
            <figure className="mt-3 flex flex-auto flex-col justify-between">
              <blockquote className="text-sm leading-8 text-gray-900">
                <p>“Celo is the carbon-negative, mobile-first, EVM-compatible blockchain ecosystem leading a thriving new digital economy for all. Celo's mission is to build a regenerative digital economy that creates conditions of prosperity for all.”</p>
              </blockquote>
            </figure>
          </div>
          <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
            <Image width={75} height={75} className="h-12 self-start" src="https://www.masa.finance/assets/logo.svg" alt="" />
            <figure className="mt-4 flex flex-auto flex-col justify-between">
              <blockquote className="text-sm leading-8 text-gray-900">
                <p>“Masa is the world's first Soulbound Token (SBT) Identity Protocol. Masa uses SBTs to represent users' attributes in web3 and in the real world, along with a protocol-level abstraction that enables the full management of SBTs and the data attributed to them”</p>
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            <Image width={75} height={75} className="h-12 self-start" src="https://github-production-user-asset-6210df.s3.amazonaws.com/19412160/240446012-f941ea9e-5f1d-4f6c-a44f-3ec3383d3ba6.svg" alt="" />
            <figure className="mt-4 flex flex-auto flex-col justify-between">
              <blockquote className="text-sm leading-8 text-gray-900">
                <p>“Valora is a global payments app that allows sending, swapping, collecting and purchasing digital goods on the Celo blockchain.”</p>
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
