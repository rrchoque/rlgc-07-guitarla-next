import Navegacion from "./navegacion";
import style from '@/styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={style.footer}>
        <div className={`contenedor ${style.contenido}`}>
            <Navegacion />

            <p className={style.copyright}>Todos los derechos reservados { new Date().getFullYear() } </p>
        </div>
    </footer>
  )
}
