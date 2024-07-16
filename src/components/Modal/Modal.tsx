interface Props {
  children: React.ReactNode,
  css?: string;
}

export const Modal = ({children, css = "h-full w-full max-w-4xl bg-white"}: Props) => {

  return (
    <div className="fixed z-20 left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
        <div className={`${css} md:mx-20 overflow-y-auto relative`}>
            {children}
        </div>
    </div>
  )
}
