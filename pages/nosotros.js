import Layout from "@/components/layout";
import Image from "next/image";
import styles from '@/styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      descripction="Venta de guitarras, blog de música"
    >
    <main className="contenedor">
      <h1 className="heading">Nosotros</h1>

      <div className={styles.contenido}>
        <Image src="/img/nosotros.jpg" alt="imagen sobre nosotros" width={1000} height={800} priority={false} />

        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto possimus sunt obcaecati molestias eos excepturi, illo asperiores eius atque similique magnam odio modi. At dolores, excepturi itaque alias et repudiandae, Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquid repellat ut veritatis repellendus odit, consequatur quibusdam earum. Velit perspiciatis voluptates corporis eaque magni commodi consequuntur aspernatur ab quas adipisci!.
          </p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate corporis perspiciatis pariatur. Ut sint eveniet odit, est eligendi unde velit facilis beatae excepturi delectus ullam minima veniam molestiae, deleniti libero?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quis quisquam blanditiis libero doloribus? Eos veniam earum, veritatis asperiores repellendus mollitia. Maxime libero tempore provident eligendi, molestiae nobis similique neque.
          </p>
        </div>
      </div>
    </main>
    </Layout>
  )
}
