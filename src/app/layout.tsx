import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Azure Depths Diving Center - Explore the Underwater World",
  description: "Experience world-class diving adventures with Azure Depths. PADI 5-Star certified center offering courses, guided dives, and marine experiences in the Maldives.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary-dark text-white">
        {children}
      </body>
    </html>
  );
}
