import Link from "next/link";

export default function NotFound() {
    return (
      <div className="min-h-screen bg-[url('/404.jpg')] bg-contain bg-no-repeat bg-center pt-40">
        <div className="m-auto text-center">
            <h1 className="text-8xl mb-10">404: ¡Alma Perdida!</h1>
            <h3 className="text-4xl mb-2">Parece que el alma que buscas se ha extinguido...</h3>

            <p className="text-2xl mb-10">La página que intentas encontrar no existe o ha sido eliminada. No te preocupes, las almas poderosas siempre encuentran su camino de regreso.</p>

            <Link href="/"><button className="btn mb-10">Regresa a Casa</button></Link>
        </div>
      </div>
    );
  }