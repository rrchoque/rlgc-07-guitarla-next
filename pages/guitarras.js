import Guitarra from "@/components/guitarra"
import Layout from "@/components/layout"
import styles from '@/styles/grid.module.css'

export default function Tienda({guitarras}) {

  return (
    <Layout
      title="Tienda de Guitarras"
      descripction="GuitarLA - Nuestra colección de guitarras"
    >
    <main className="contenedor">
      <h1 className="heading">Nuestra Colección</h1>

      <div className={styles.grid}>
        {guitarras.map(guitarra => (
          <Guitarra 
            key={guitarra.id}
            guitarra={guitarra.attributes}
          />
        ))}
      </div>
    </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const { data: guitarras } = await respuesta.json()

  return {
    props: {
      guitarras
    }
  }
}
