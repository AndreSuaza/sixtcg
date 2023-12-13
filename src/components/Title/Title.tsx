interface Props {
  title: string;
  subtitle: string;
  image?: string;
}

export const Title = ({title, subtitle}: Props) => {
  return (
    <>
        <h1 className="text-8xl uppercase text-center pt-20 mb-2">{title}</h1>
        {!!subtitle && <p className="text-4xl text-center pb-10 text-white">{subtitle}</p>}
    </>
  )
}
