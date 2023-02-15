import React from 'react'


interface iBaseTitleProps{//configurando a tipagem
    children: React.ReactNode;
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    className?: string;//opcional
    fontWeigth: 400 | 700;
    fontSize: "large" | "medium" | "small" | "s-large";
}

const BaseTitle = ({children, className, tag} : iBaseTitleProps) => {//configurando por meio de props os componentes h1-h6
  return (
    <>
        {tag == "h1" && <h1 className={className}>{children}</h1>}
        {tag == "h2" && <h2 className={className}>{children}</h2>}
        {tag == "h3" && <h3 className={className}>{children}</h3>}
        {tag == "h4" && <h4 className={className}>{children}</h4>}
        {tag == "h5" && <h5 className={className}>{children}</h5>}
        {tag == "h6" && <h6 className={className}>{children}</h6>}
    </>
  )
}

export default BaseTitle