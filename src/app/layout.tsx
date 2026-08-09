import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exclusive Reward | $1000 Gift Card Offer",
  description: "Claim your $1000 Walmart Gift Card balance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      
        {children}
      
    
  );
}
