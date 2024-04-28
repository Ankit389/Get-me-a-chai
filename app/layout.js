import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me a chai - website  fund your project  chai  ",
  description: "This website is a crowdfunding plaiform for creates lovers ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
       <SessionWrapper>
        
         <Navbar/>
         <div className="min-h-[87vh] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] " >
          
        {children}
        </div>
        <Footer/>
        </SessionWrapper>
 
        </body>
    </html>
  );
}
