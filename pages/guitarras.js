import Layout from "@/components/layout"
import ListadoGuitarras from "@/components/listado-guitarras"

export default function Tienda({guitarras}) {

  console.log(guitarras)

  return (
    <Layout
      title="Tienda de Guitarras"
      descripction="GuitarLA - Nuestra colección de guitarras"
    >
    <main className="contenedor">
      <h1 className="heading">Nuestra Colección</h1>
      <ListadoGuitarras 

      />
    </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const { data: guitarras } = await respuesta.json()

  return {
    props: {
      guitarras
    }
  }
}
