import Link from 'next/link'
import Image from 'next/image'
import style from '@/styles/header.module.css'
import { useRouter } from 'next/router'

export default function Header() {

  const router = useRouter()

  return (
    <header className={style.header}>
    <div className={`contenedor ${style.barra}`}>
        <Link href="/">
            <Image className={style.logo} src="/img/logo.svg" width={300} height={40} alt="Imagen logo" />
        </Link>
        
        <nav className={style.navegacion}>
            <Link
                href="/"
                className={router.pathname === '/' ? style.active : '' }
            >Inicio</Link>
            <Link
                href="/nosotros"
                className={router.pathname === '/nosotros' ? style.active : '' }
            >Nosotros</Link>
            <Link
                href="/guitarras"
                className={router.pathname === '/tienda' ? style.active : '' }
            >Tienda</Link>
            <Link
                href="/blog"
                className={router.pathname === '/blog' ? style.active : '' }
            >Blog</Link>
            <Link
                href="/carrito"
                className={router.pathname === '/carrito' ? style.active : '' }
            >
                <Image src="/img/carrito.png" alt="carrito de compras" width={30} height={30} />
            </Link>
        </nav>
        
    </div>
    </header>   
  )
}
