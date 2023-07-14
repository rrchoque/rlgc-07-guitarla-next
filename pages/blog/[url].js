import Layout from "@/components/layout";
import Image from "next/image";
import styles from '@/styles/blog.module.css'
import { formatearFecha } from "@/utils/helpers";

export default function Post({post}) {

  const {contenido, titulo, imagen, publishedAt} =  post

  return (
    <Layout
      title={`Entrada: ${titulo}`}
      description= {`Guitarras, venta de guitarras, guitarra ${titulo}` }
    >
      <article className={`${styles.post} ${styles['mt-3']}`}>
        <Image className="imagen" src={imagen.data.attributes.url} alt={`Imagen del post ${titulo}`} width={600} height={400} />
        <div className={styles.contenido} >
          <h3>{titulo}</h3>
          <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
          <p className={styles.texto}>{contenido}</p>
        </div>
      </article>
    </Layout>
  )
}

export async function getServerSideProps({query: {url}}) {

  const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
  const { data } = await respuesta.json()

  console.log(data[0])
  
  return {
    props: {
      post: {
        id: data[0].id,
        ...data[0].attributes
      }
    }
  }
}