import Link from 'next/link'
import Image from 'next/image'
import style from '@/styles/header.module.css'
import Navegacion from './navegacion'

export default function Header() {
  return (
    <header className={style.header}>
    <div className={`contenedor ${style.barra}`}>
        <Link href="/">
            <Image className='logo' src="/img/logo.svg" width={300} height={40} alt="Imagen logo" />
        </Link>
        
        <Navegacion />
        
    </div>
    </header>   
  )
}
