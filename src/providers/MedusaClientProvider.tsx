"use client"

import React from "react"
import { MedusaProvider } from "medusa-react"
import { QueryClient } from "@tanstack/react-query"

const queryClient = new QueryClient()

const MedusaClientProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <MedusaProvider
      queryClientProviderProps={{ client: queryClient }}
      baseUrl={process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:9000"}
    >
      {children}
    </MedusaProvider>
  )
}

export default MedusaClientProvider
