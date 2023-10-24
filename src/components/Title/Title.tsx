interface Props {
  title: string;
  subtitle: string;
  image?: string;
}

export const Title = ({title, subtitle}: Props) => {
  return (
    <div className="mb-10">
        <h1 className="text-8xl uppercase text-center pt-20 mb-2 mt-10">{title}</h1>
        {!!subtitle && <h3 className="text-4xl text-center pb-10">{subtitle}</h3>}
    </div>
  )
}
