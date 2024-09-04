'use client'

import { findStores } from "@/app/tiendas/services/tiendas.services";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Store } from '../../models/cards.model';

export const StoreMap = () => {

    const [stores, setStores] = useState<Store[]>([])

    const [mapUrl, setMapUrl] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.713922889345!2d-74.07251957226082!3d4.645030165324121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bcd484e7dad%3A0x4e531719a7d42f71!2sHidden%20TCG%20Store!5e0!3m2!1ses!2sco!4v1713324185096!5m2!1ses!2sco")

    const setMap = (url: string) => {
        setMapUrl(url);
    }

    useEffect(() => {  

        const setCardProperties = async () => {
            setStores( await findStores() );
        }
    
        setCardProperties()
       
      },[]);

    return (
    <>

    <div className="bg-slate-50 pt-3 pb-6 lg:px-4 md:px-4 px-2 border-r-2 border-indigo-500 min-h-screen">
        <h1 className="text-3xl text-center mb-6 mt-4 text-primary "><b>Tiendas oficiales</b></h1>

        {stores.map((store) => 
        <div 
            key={store._id} 
            className="bg-indigo-500 rounded px-4 py-2 cursor-pointer mb-6"
            onClick={() => setMap(store.iframe)}
            >
            <div className="grid grid-cols-5">
                <div className="col-span-4">
                <h2>{store.name}</h2>
                <p>{store.address}</p>
                <p>{store.city} - {store.country}</p>
                </div>
                <div className="justify-self-end">
                <Link href={`https://www.facebook.com/${store.facebook}`} target="_blank">
                    <Image width={40} height={40} src='/redes/facebook.svg' alt="facebook" title={`Facebook ${store.name}`} className="opacity-80 hover:opacity-100 cursor-pointer"/>
                </Link>
                <Link href={`https://www.instagram.com/${store.instagram}`} target="_blank">
                    <Image width={40} height={40} src='/redes/instagram.svg' alt="instagram" title={`Instagram ${store.name}`} className="opacity-80 hover:opacity-100 cursor-pointer"/>
                </Link>
                </div>
            </div>
        </div>)}
    </div>
    
    <div className="lg:col-span-3 md:col-span-3">
        <iframe className="w-full h-full border-0" src={mapUrl}></iframe>
    </div>
    </>
  )
}
