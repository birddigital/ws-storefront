import { Metadata } from "next"
import "styles/globals.css"
import { MedusaProvider } from "medusa-react"
import { QueryClient } from "@tanstack/react-query"
import React from "react"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

const queryClient = new QueryClient()

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <MedusaProvider
          queryClientProviderProps={{ client: queryClient }}
          baseUrl={process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:9000"}
        >
          <main className="relative">{props.children}</main>
        </MedusaProvider>
      </body>
    </html>
  )
}
