import { Button, Heading } from "@medusajs/ui"
import Link from "next/link"
import Image from "next/image"
import Owner from "../../../../../owner-config.json"

const Hero = () => {
  return (
    <div className="md:h-[35vh] lg:h-[50vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="grid md:grid-cols-2 grid-cols-1 relative md:space-y-0 space-y-2">
        <div className="col-span-1 md:py-5 sm:pl-0 md:pl-10 lg:pl-20 md:pr-2 relative flex justify-center items-center">
          <div className="relative md:w-full md:h-full flex items-center justify-center">
            <Image
              src="https://pub-94cb652396cc4a84a6f28685d9a4ac9b.r2.dev/pool-toys.webp"
              className="object-cover w-full h-full rounded-xl"
              quality={100}
              width={500}
              height={500}
              alt="Pool toys"
            />
            <Link
              href="/store"
              className="absolute bottom-5 bg-blue-700 bg-opacity-75 text-white text-xl font-bold px-4 py-2 rounded"
            >
              <div className="">Shop Pool Toys</div>
            </Link>
          </div>
        </div>
        <div className="col-span-1 md:py-5 sm:pr-0 md:pr-10 lg:pr-20 md:pl-2 relative flex justify-center items-center">
          <div className="relative md:w-full h-full flex items-center justify-center">
            <Image
              src="https://pub-94cb652396cc4a84a6f28685d9a4ac9b.r2.dev/shampoo-category.webp"
              className="object-cover w-full h-full rounded-xl"
              quality={100}
              width={500}
              height={500}
              alt="Shampoo Category"
            />
            <Link
              href="/store"
              className="absolute bottom-5 bg-blue-700 bg-opacity-75 text-white text-xl font-bold px-4 py-2 rounded"
            >
              <div className="">Shop Shampoo</div>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            {Owner.storeName}
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            Russel Springs, KY
          </Heading>
        </span>
        <Link href="/store">
          <Button variant="secondary">Shop</Button>
        </Link>
      </div> */}
    </div>
  )
}

export default Hero
