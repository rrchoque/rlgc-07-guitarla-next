import Layout from "@/components/layout";
import Image from "next/image";
import styles from '@/styles/guitarras.module.css'

export default function Producto({guitarra}) {

  const {id, nombre, descripcion, precio, imagen} = guitarra

  return (
    <Layout
      title={`Guitarra ${nombre}`}
      description= {`Guitarras, venta de guitarras, guitarra no encontrada`}
    >
      <div className={styles.guitarra}>
        <Image src={imagen.data.attributes.url} alt={`Imagen guitarra ${nombre}`} width={600} height={400} />
        <div className={styles.contenido} >
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
  const { data } = await respuesta.json()
  const paths = data.map(guitarra => ({
    params: {
      url: guitarra.attributes.url
    }
  }))

  return {
    fallback: false,
    paths
  }
}

export async function getStaticProps({params: {url}}) {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
  const { data } = await respuesta.json()
  
  return {
    props: {
      guitarra: {
        id: data[0].id,
        ...data[0].attributes
      }
    }
  }
}

// export async function getServerSideProps({query: {url}}) {

//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
//   const { data } = await respuesta.json()

//   console.log(data[0])
  
//   return {
//     props: {
//       guitarra: {
//         id: data[0].id,
//         ...data[0].attributes
//       }
//     }
//   }
// }