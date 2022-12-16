import Head from 'next/head';
import Link from 'next/link';

import Layout from '@components/Layout';
import Container from '@components/Container';

import styles from '@styles/Home.module.css';

import products from '../../products.json';
import merches from '../../merches.json';


export default function Merches() {
  return (
    <Layout>
      <Head>
        <title>Merches</title>
      </Head>
      <Container className={styles.homeContainer}>
        <div className={styles.grid}>
          {merches.map(merch => {
            return (
              <div key={merch.id} className={styles.card}>
                <Link legacyBehavior href={`/merches/${merch.id}`}>
                  <a>
                    <img src={merch.image} alt={`Preview of ${merch.title}`} />
                    <h3>{ merch.title }</h3>
                    <p className={styles.cardDescription}>{ merch.description }</p>
                    <p>${ merch.price }</p>
                  </a>
                </Link>
                <p>
                  <button className="snipcart-add-item"
                    data-item-id={merch.id}
                    data-item-image={merch.image}
                    data-item-name={merch.title}
                    data-item-price={merch.price}
                  >
                    Add to Cart
                  </button>
                </p>
              </div>
            );
          })}
          {merches.map(merch => {
            return (
              <div key={merch.id} className={styles.card}>
                <Link legacyBehavior href={`/merch/${merch.id}`}>
                  <a>
                    <img src={merch.image} alt={`Preview of ${merch.title}`} />
                    <h3>{ merch.title }</h3>
                    <p className={styles.cardDescription}>{ merch.description }</p>
                    <p>${ merch.price }</p>
                  </a>
                </Link>
                  <button className="snipcart-add-item"
                    data-item-id={merch.id}
                    data-item-image={merch.image}
                    data-item-name={merch.title}
                    data-item-price={merch.price}
                  >
                    Add to Cart
                  </button>
              </div>
            );
          })}
        </div>
      </Container>
      
    </Layout>
    
  )
}
