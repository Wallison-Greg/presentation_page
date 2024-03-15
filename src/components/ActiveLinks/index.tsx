import React, {ReactElement, cloneElement} from 'react'
import Link, {LinkProps} from 'next/link'
import { useRouter } from 'next/router'

interface ActiveLinksProps extends LinkProps {
    children: ReactElement;
    activeClassName: string
}

const ActiveLinks = ({children, activeClassName, ...rest}: ActiveLinksProps) => {

    const {asPath} = useRouter() //ira pegar a url do link utilizado

    const className = asPath === rest.href ? activeClassName : '';
    //basicamente aqui ele ta comparando se a url da pagina e a mesma url do link selecionado
    //caso seja ele ira ativa a classe "active" deixando o link ativado 

  return (
    //basicamente estamos passando para dentro do link o seu conteudo e a condição para saber se ele esta ativo
    <Link {...rest}>
        {cloneElement(children, {
            className
        })}
    </Link>
  )
}

export {ActiveLinks}