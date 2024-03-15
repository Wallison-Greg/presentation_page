import React from 'react'
import style from './style.module.scss'
import Image from 'next/image'
import Link from 'next/link'

import Logo from "../../../public/logo.png"

import { ActiveLinks } from '../ActiveLinks'

const Header = () => {
  return (
    <header className={style.headerContainer}>
        <div className={style.headerContent}>
            <Link href='/' legacyBehavior>
                <a>
                    <Image src={Logo} alt='logo'/>
                </a>
            </Link>
            <nav>
                <ActiveLinks activeClassName={style.active} href='/' legacyBehavior>
                    <a>Home</a>
                </ActiveLinks>

                <ActiveLinks activeClassName={style.active} href='/posts' legacyBehavior>
                    <a>Conteudos</a>
                </ActiveLinks>

                <ActiveLinks activeClassName={style.active} href='/sobre' legacyBehavior>
                    <a>Quem somos?</a>
                </ActiveLinks>
            </nav>
            <a className={style.btnReady} type='button' href="https://wallison.vercel.app/">Começar</a>
        </div>
    </header>
  )
}

export default Header