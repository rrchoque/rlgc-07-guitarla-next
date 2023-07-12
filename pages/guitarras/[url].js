import Layout from "@/components/layout";

export default function Producto(datos) {

  console.log('::: guitarra :::', datos)

  return (
    <Layout>
        [url]
    </Layout>
  )
}

export async function getServerSideProps({query: {url}}) {

  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
  const { data } = await respuesta.json()

  console.log(data[0])
  
  return {
    props: {
      guitarra: {
        id: data[0].id,
        ...data[0].attributes
      }
    }
  }
}