import Medusa from "@medusajs/medusa-js"

// Defaults to standard port for Medusa server
//TODO: Update this URL with your Medusa backend URL for production vs dev
let MEDUSA_BACKEND_URL = "https://medusa.birdswhistlestopshop.com"

if (process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL) {
  MEDUSA_BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
}

export const medusaClient = new Medusa({
  baseUrl: MEDUSA_BACKEND_URL,
  maxRetries: 3,
})
