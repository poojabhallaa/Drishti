
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/Themeprovider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Project Drishti - AI Video Anomaly Detection",
  description: "Real-time video processing and anomaly detection system powered by AI",
  keywords: "security, video analysis, AI, anomaly detection, surveillance",
   
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossOrigin=""
          async
        />
      </head>
      <body className={inter.className}>
         <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
         {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

