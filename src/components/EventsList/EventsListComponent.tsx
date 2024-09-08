'use client'

import { findEvents } from "./service/findEvents";
import { EventSix } from "@/models";
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { useEffect } from "react";

export const EventsListComponent = () => {

    const formatDate = (date:Date) => {
        const dat = new Date(date);
        console.log(date, dat)
        return dat.toLocaleDateString('es-MX', { year:"numeric", month:"long", day:"numeric"}) ;
        }
      

    const soon = (date:Date) => {
        return new Date() < new Date(date);
        }


    const [events, setEvents] = useState<EventSix[]>([])

    useEffect(() => {  

        const setCardProperties = async () => {
            setEvents( await findEvents() );
        }
    
        setCardProperties()
        
        },[]);
    

  return (
    <>
    {events.map((event) => 
        
    
    <div key={event._id} className={`flex flex-grow mb-10 text-gray-900 bg-white lg:w-4/5 md:w-auto m-auto rounded text-2xl mt-20 ${!soon(event.date) && "opacity-80"}`}>
        
        <Link className="md:block hidden" href={event.url} target="_blank">
          <div className="w-[260px]">
            <Image 
                            width={260} 
                            height={364} 
                            src={event.image} 
                            alt={`${event.title} Souls In Xtinction`} 
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNMTvt4EgAFcwKFsn71ygAAAABJRU5ErkJggg=="
                            placeholder="blur" 
                            className="rounded-l "
                          
                        />
          
          </div>  
        </Link>     
        <div className="p-6 lg:border-r-2 border-indigo-500 my-2 lg:min-h-[300px] md:h-auto lg:min-w-[300px]">
          { soon(event.date) && <div className="font-semibold text-pink-500" >Proximanmente!</div>}
          <p className="font-bold">{formatDate(event.date)}</p>
          <Link href={event.url} target="_blank">
          <h2 className=" mb-10 text-4xl text-primary">{event.title}</h2>
          </Link>
          <p className="font-bold">{event.store.name}</p>
          <p>{event.store.address}, {event.store.city}</p>
          <div className="flex flex-row mt-6">
            {event.facebook !== "" && 
            <Link href={event.facebook} target="_blank">
              <Image width={50} height={50} src='/redes/facebookP.svg' alt="facebook" title="Siguenos en Facebook" className="opacity-100 hover:opacity-80 cursor-pointer mx-auto"/>
            </Link>}
            {event.instagram !== "" && 
            <Link href={event.instagram} target="_blank">
              <Image width={50} height={50} src='/redes/instagramP.svg' alt="instagram" title="Siguenos en instagram" className="opacity-100 hover:opacity-80 cursor-pointer mx-auto"/>
            </Link>
            }
          </div>
        </div>
        <Link href={event.url} target="_blank">
        <div className="p-6 bg-white rounded-r mr-6 lg:block hidden">
          <p className="mb-4 leading-10 pt-4">
          {event.description}
          </p>  
        </div>
        </Link>
      </div>
    )}
    </>
  )
}
