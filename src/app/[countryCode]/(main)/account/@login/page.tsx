import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"
import Owner from "../../../../../../owner-config.json"
export const metadata: Metadata = {
  title: "Sign in",
  description: `Sign in to your ${Owner.storeName} Store account.`,
}

export default function Login() {
  return <LoginTemplate />
}
