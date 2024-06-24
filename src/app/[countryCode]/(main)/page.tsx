import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"
import Owner from "../../../../owner-config.json"

export const metadata: Metadata = {
  title: `${Owner.storeName}`,
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
  openGraph: {
    title: `${Owner.storeName}`,
    description:
      "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
    url: "https://www.birdswhistlestopshop.com",
    siteName: `${Owner.storeName}`,
    images: [
      {
        url: "https://pub-94cb652396cc4a84a6f28685d9a4ac9b.r2.dev/pool-toys.webp",
        width: 500,
        height: 500,
        alt: "Pool toys",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: `${Owner.twitterHandle}`,
    title: `${Owner.storeName}`,
    description:
      "Russel Springs, KY Discount Shop - Home Goods, Lawn & Garden, Toys, Candy, & Gifts",
    images: [
      {
        url: "https://pub-94cb652396cc4a84a6f28685d9a4ac9b.r2.dev/pool-toys.webp",
        alt: "Birds Whistle Stop & Shop",
      },
    ],
  },
}

const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 3)

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}
