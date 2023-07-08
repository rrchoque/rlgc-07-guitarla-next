import Link from 'next/link'
import Image from 'next/image'
import style from '@/styles/header.module.css'

function Navegacion() {

    //const location = useLocation()

    return (
        <nav className={style.navegacion}>
            <Link
                href="/"
                
            >Inicio</Link>
            <Link
                href="/nosotros"
                
            >Nosotros</Link>
            <Link
                href="/guitarras"
                
            >Tienda</Link>
            <Link
                href="/blog"
                
            >Blog</Link>
            <Link
                href="/carrito"
                
            >
                <Image src="/img/carrito.png" alt="carrito de compras" width={30} height={30} />
            </Link>
        </nav>
    )
}

export default Navegacion