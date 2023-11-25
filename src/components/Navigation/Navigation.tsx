import { Route } from '@/models'
import './Navigation.css'
import Link from 'next/link';
import Image from 'next/image';

interface Props{
  pathNames: Route[];
}

export const Navigation = ({pathNames}:Props) => {
  return (
    <nav className="stiky top-0 z-10 w-full lg:px-24 px-6 shadow-md flex flex-wrap items-center py-2 border-b border-indigo-500">
    <div className="flex-1 flex justify-between items-center">
      <Link href="/" className="flex text-lg font-semibold">
        <Image
          src="/logo.png"
          width={300}
          height={40}
          alt="Sinister in Xtincion logo"   
        />
      </Link>
    </div>
    <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
      <svg
        className="fill-current text-white-900"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
    <input className="hidden" type="checkbox" id="menu-toggle" />
    <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
      <nav>
        <ul className="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0">

          {pathNames.map((pathName) => (
            <li className="py-2 lg:py-0 ">
            <Link
              className="mr-4 uppercase text-lg font-medium transition hover:text-violet-700 duration-300"
              href={pathName.path}
            >
              {pathName.name}
            </Link>
          </li>
          ))}
        </ul>
      </nav>
    </div>
  </nav>
  )
}
