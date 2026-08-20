import "./globals.css";
import Providers from "../components/Providers";

export const metadata = {
  title: "3D Bharat | Investor Intelligence",
  description: "Frontend-only fintech dashboard with simulated data services."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
