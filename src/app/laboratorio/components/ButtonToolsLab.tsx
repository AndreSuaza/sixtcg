import React from 'react'

interface Props {
    children: React.ReactNode,
    acction: () => void,
    title: string
}

export const ButtonToolsLab = ({children, acction, title}: Props) => {
  return (
    <button 
        className="bg-primary bg-primary-h lg:h-10 md:h-10 h-6 lg:w-10 md:w-10 w-6"
        onClick={acction}
        title={title}
    >
        {children}
    </button>
  )
}
