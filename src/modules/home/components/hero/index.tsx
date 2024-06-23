import { Button, Heading } from "@medusajs/ui"
import Link from "next/link"
import Image from "next/image"
import Owner from "../../../../../owner-config.json"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <Image
        src="https://pub-94cb652396cc4a84a6f28685d9a4ac9b.r2.dev/pool-toys.webp"
        className="object-cover w-full h-full"
        quality={100}
        width={500}
        height={500}
        alt="Pool toys"
      />
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
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
      </div>
    </div>
  )
}

export default Hero
