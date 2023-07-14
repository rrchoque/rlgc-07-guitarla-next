import Layout from "@/components/layout"
import styles from '@/styles/carrito.module.css'

function Carrito() {

  return (
    <Layout
      title="Carrito de Compras"
      descripction="GuitarLA - Venta de guitarras, blog de música, carrito de compras, tienda"
    >
      <main className="contenedor">
        <h1 className="heading">Carrito de Compras</h1>

        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Artículos</h2>
          </div>

          <aside className={styles.resumen}>
            <h3>Resumen del Pedido</h3>
            <p>Total a pagar: $</p>
          </aside>
        </div>
      </main>
      
    </Layout>
  )
}

export default Carrito
