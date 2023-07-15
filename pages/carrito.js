import Layout from "@/components/layout"
import styles from '@/styles/carrito.module.css'
import Image from "next/image"
import { useEffect, useState } from "react"

function Carrito({carrito, actualizarCantidad, eliminarProducto}) {

  const [total, setTotal] = useState(0)

  useEffect(() => {
    const calculoTotal = carrito.reduce( (total, producto) => total + (producto.cantidad * producto.precio), 0 )
    setTotal(calculoTotal)
  }, [carrito])

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

            {carrito?.length === 0 ? 'Carrito Vacio' : (
                carrito?.map( producto => (
                  <div key={producto.id} className={styles.producto}>
                    <div>
                      <Image src={producto.imagen} alt={`Imagen del producto ${producto.nombre}`} width={600} height={400} />
                    </div>

                    <div>
                      <p className={styles.nombre}>{producto.nombre}</p>
                      <p className={styles.cantidad}>Cantidad:</p>
                      <select 
                        value={producto.cantidad}
                        className={styles.select}
                        onChange={ e => actualizarCantidad({
                          id: producto.id,
                          cantidad: +e.target.value
                        })}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      <p className={styles.precio}>$ <span>{producto.precio}</span></p>
                      <p className={styles.subtotal}>Subtotal: $ <span>{producto.precio * producto.cantidad}</span></p>
                    </div>

                    <button 
                      className={styles['btn_eliminar']}
                      type='button'
                      onClick={() => eliminarProducto(producto.id)}
                    >X</button>
                  </div>
                )

                )
              )}

          </div>

          <aside className={styles.resumen}>
            <h3>Resumen del Pedido</h3>
            <p>Total a pagar: ${total}</p>
          </aside>
        </div>
      </main>
      
    </Layout>
  )
}

export default Carrito
