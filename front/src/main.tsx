import { StrictMode } from "react"

import { Routes } from "@generouted/react-router"
import { createRoot } from "react-dom/client"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

import { setupMsw } from "@/mocks/setupMsw"

setupMsw()

// biome-ignore lint/style/noNonNullAssertion: 自動生成のため
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Routes />
  </StrictMode>,
)
