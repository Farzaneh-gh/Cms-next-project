import "@/styles/globals.css";
import Navbar from "@/components/modules/Navbar/Navbar";
import Sidebar from "@/components/modules/Sidebar/Sidebar";


export default function App({ Component, pageProps }) { 

  
  return (
  <div>
    <Sidebar />
    <main className="main">
      <Navbar />
      <Component {...pageProps} />
    </main>
  </div>
  )

}
