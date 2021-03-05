import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
  
    <div className={styles.container}>
      <Head>
           <title>James L. Avakian Portfolio</title>  
        <link rel="icon" href="http://www.jamesavakian.com" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          James L. Avakian Website
        </h3>

        <p className={styles.description}>
        <h3>Full Stack Software Developer{''}</h3>
          <code className={styles.code}></code>
        </p>

        <a
        href="http://www.opticalautomation.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/vercel.svg" alt="Optical Automation Logo" className={styles.logo} />
        </a>

        <div className={styles.grid}>
          <a href="http://www.opticalautomation.com" className={styles.card}>
            <h3>Optical Automation.com Website &rarr;</h3>
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo}  />
            <p>Company website and product news.</p>
         </a>

          <a href="http://www.jamesavakian.com" className={styles.card}>
            <h3>James L. Avakian.com Website &rarr;</h3>
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
            <p>I am a software developer with software projects shown by this website. </p>  
          </a>

          <a href="http://www.shopperlady.com"
            className={styles.card}
          >
            <h3>ShopperLady.com Website &rarr;</h3>
            <img src="/vercel.svg" alt="ShopperLady Logo" className={styles.logo} />
            <p>ShopperLady shopping list database.</p>
           </a>

          <a
            href="http://www.theproductlistnetwork.com"
            className={styles.card}
          >
            <h3>The ProductList Network.com &rarr;</h3>
            <img src="/vercel.svg" alt="The ProductList Network Logo" className={styles.logo} />
            <p>
              ShopperLady, Personal, Business, and Entertainment website network.
            </p>
            </a>

            <a
            href="http://www.HouseOfWebs.com"
            className={styles.card}
          >
            <h3>HouseOfWebs.com &rarr;</h3>
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
            <p>
              Portfolio of Optical Automation, LLC websites and networks.
            </p>
            </a>

            <a
            href="http://www.TechnologyAndTimes.com"
            className={styles.card}
          >
            <h3>TechnologyAndTimes.com &rarr;</h3>
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
            <p>
              Historical products that changed the way people live.
            </p>
            </a>
         </div>
      </main>
   
      <footer className={styles.footer}>

      <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by (c) 2021, Optical Automation, LLC, All rights reserved.{' '}
      <br></br>
      <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      </a>
       
      </footer>
      </div>

  )
}

