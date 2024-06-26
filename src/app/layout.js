import { Inter } from "next/font/google";
import { ApolloProvider } from "@apollo/client";
import apolloClient from '@/lib/apolloClient';
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
  
    
    <ApolloProvider client={ apolloClient }>
    <body className={inter.className}>{children}
    <Layout/>
    </body>
    </ApolloProvider>;
    </html>

 

  );
}
