import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { AppProvider } from "./context/app.context"

const rootElement = document.getElementById("root")!
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
)
