import type {AppProps} from 'next/app'
import {useState, useEffect} from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import '../styles/globals.css'



const MyApp = ({Component, pageProps}: AppProps) => {
    const [isSSR, setIsSSR] = useState(true);                 //Is Server Side Rendering

    useEffect(() => {                                       //Is Client-Side-Rendering  Code here is being executed inside react
        setIsSSR(false);
    }, [])

    if (isSSR) return null    // If we are server-side-rendering we don't want to show our components
    //This was done to have a smoother workflow

    return
  if (true)  //remove after
    <div>
        Navbar
        <div className='flex gap-6 md:gap-20'>
            <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
                Sidebar
            </div>
            <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
                <Component {...pageProps} />
            </div>
        </div>
    </div>
}

export default MyApp
