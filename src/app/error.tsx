'use client' // Error boundaries must be Client Components
 
import Link from 'next/link'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className="min-h-screen bg-[url('/404.webp')] bg-contain bg-no-repeat bg-center pt-40">
        <div className="m-auto text-center">
            <h1 className="text-8xl mb-10">404: ¡Alma Perdida!</h1>
            <h3 className="text-4xl mb-2">Parece que el alma que buscas se ha extinguido...</h3>

            <p className="text-2xl mb-10">La página que intentas encontrar no existe o ha sido eliminada. No te preocupes, las almas poderosas siempre encuentran su camino de regreso.</p>

            <Link href="/"><button className="btn mb-10">Regresa a Casa</button></Link>
        </div>
    </div>
  )
}