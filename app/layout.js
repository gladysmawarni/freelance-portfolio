// app/layout.js
import { GOOGLE_FONTS_URL } from "@/styles/portfolio.styles";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={GOOGLE_FONTS_URL} rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#F1E8C7" }}>
        {children}
      </body>
    </html>
  );
}
