import Link from "next/link"
import Image from "next/image"
import { formatearFecha } from "@/utils/helpers"
import styles from '@/styles/blog.module.css'

export default function Post({post}) {

  const {contenido, titulo, imagen, url, publishedAt} = post
  return (
    <article className={styles.post}>
      <Image className="imagen" src={imagen.data.attributes.formats.small.url} alt={`Imagen del post ${titulo}`} width={600} height={400} />
      <div className={styles.contenido} >
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{contenido}</p>
        <Link className={styles.enlace} href={`/blog/${url}`}>Leer Post</Link>
      </div>
    </article>
  )
}
