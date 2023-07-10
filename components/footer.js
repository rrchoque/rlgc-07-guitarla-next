import Link from "next/link";
import style from '@/styles/footer.module.css'
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={style.footer}>
        <div className={`contenedor ${style.contenido}`}>
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

            <p className={style.copyright}>Todos los derechos reservados { new Date().getFullYear() } </p>
        </div>
    </footer>
  )
}
