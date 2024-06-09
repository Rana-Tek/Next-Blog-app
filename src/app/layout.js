import { Inter } from "next/font/google";

import {Layout} from '../components';
import 'tailwindcss/tailwind.css';
import "../styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    
    <html>  
    
    
    
  
   
   

  
    <Layout>  
  
          
          
         
   
      <body className={inter.className}>{children}</body>
      </Layout>
      </html>

 

  );
}