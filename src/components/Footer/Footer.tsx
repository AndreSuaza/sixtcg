import Image from "next/image"
import Link from "next/link"
import { Routes } from '@/models'

export const Footer = () => {
  return (
    <footer className='sticky'>
          <div className='bg-primary pb-8 pt-4 px-20 grid md:grid-cols-3 grid-cols-1 bottom-0'>
            <div className='items-center mt-6'>
              <Image
                src="/logo.png"
                width={500}
                height={77}
                alt="Souls in Xtincion"  
                title="Souls in Xtincion logo"
              />
            </div>
            
            <div className='flex justify-center mt-6'>
              <div className='mr-20'>
                <h2 className='text-xl uppercase'>Menu</h2>
                <ul className='my-2'>
                {Routes.map((route) => (
                  <li className="mt-1">
                    <Link
                      href={route.path}
                    >
                      {route.name}
                    </Link>
                  </li>
                  ))}
                </ul>
              </div>
              <div className=''>
                <h2 className='text-xl uppercase'>Redes</h2>
                <ul>

                  <li className='mt-1'><Link href={'https://twitter.com/soulsinxti0'} target="_blank" title="Twitter Souls in Xtincion">Twitter</Link></li>
                  <li className='mt-1'><Link href={'https://www.facebook.com/soulsinxtinction'} target="_blank" title="Facebook Souls in Xtincion">Facebook</Link></li>
                  <li className='mt-1'><Link href={'https://www.tiktok.com/@soulsinxtinction'} target="_blank" title="Tik Tok Souls in Xtincion">Tik Tok</Link></li>
                  <li className='mt-1'><Link href={'https://www.instagram.com/soulsinxtinction'} target="_blank" title="Instagram Souls in Xtincion">Instagram</Link></li>
                  <li className='mt-1'><Link href={'https://www.youtube.com/@SoulsInXtinction'} target="_blank" title="Youtube Souls in Xtincion">Youtube</Link></li>
                </ul>
              </div>
            </div>

            <div className='text-justify mt-7 lg:text-lg text-xs'>
              <p>La reproducción de imágenes, textos y datos de este sitio web está prohibida sin autorización. Es importante tener en cuenta que las imágenes aquí mostradas pueden no reflejar fielmente el producto final, dado que este aún se encuentra en fase de desarrollo.</p>
            </div>
          </div>
          {/* <div className='h-10 bg-zinc-800 md:text-right text-center px-20'>
            <p className='py-2 px-4'>© Copyright</p>
          </div> */}
        </footer>
  )
}
