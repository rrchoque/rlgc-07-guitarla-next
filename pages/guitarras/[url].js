import Layout from "@/components/layout";
import Image from "next/image";
import styles from '@/styles/guitarras.module.css'
import { useState } from "react";

export default function Producto({guitarra, agregarCarrito}) {

  const [cantidad, setCantidad] = useState(0)
  const {id, nombre, descripcion, precio, imagen} = guitarra

  const handleSubmit = e => {
    e.preventDefault();

    if (cantidad < 1) {
      alert('La cantidad minima es uno (1)')
      return
    }

    const guitarraSeleccionada = {
      id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }

    agregarCarrito(guitarraSeleccionada)
  }

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

          <form onSubmit={handleSubmit} className={styles.formulario}>
            <label htmlFor="cantidad">Cantidad</label>
            <select 
              name="cantidad" 
              id="cantidad"
              onChange={e => setCantidad(parseInt(e.target.value))}
            >
              <option value="0">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input 
              type="submit"
              value="Agregar al carrito"
            />
          </form>
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