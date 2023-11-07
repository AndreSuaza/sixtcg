
export const Modal = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="fixed z-20 left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
        <div className="h-full w-full max-w-4xl md:mx-20 overflow-y-auto bg-white relative">
            {children}
        </div>
    </div>
  )
}
