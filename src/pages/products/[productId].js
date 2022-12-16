import Head from 'next/head'
import { FaShoppingCart } from 'react-icons/fa';

import Layout from '@components/Layout';
import Container from '@components/Container';
import Link from 'next/link';


import styles from '@styles/Product.module.css'

import products from '../../../products.json';

//SPA Animation
import {AnimatePresence, motion} from "framer-motion";


export default function Product({ product }) {
  return (
    <Layout>
      <Head>
        <title>{ product.title } - Nanaimo Coffee Roaster</title>
      </Head>
      <Container>
        <div className='r-b-l-nav-wrapper'>
          <div className='side-navs-wrapper'>
              <div className='left-wrapper'>
                <Link href= '/about'>OUR STORY</Link>
              </div>
              <div className='right-wrapper'>
                <Link href='/products'>PRODUCTS</Link>
              </div>
          </div>
        </div>
        <div className='product-item-wrapper'>    
          <motion.div
           className={styles.productImage}
           initial={{ 
            opacity: 0,
            translateY: "3vh"
            }}
            animate={{
              opacity:1,
              translateY: 0
            }}
            transition={{
              type: 'tween',
              duration: .3
            }}           >
            <img src={product.image} alt={`Preview of ${product.title}`} />
          </motion.div>

          <motion.div
           className="product-text-wrap"
           initial={{ 
            opacity: 0,
            translateY: "5vh"
            }}
            animate={{
              opacity:1,
              translateY: 0
            }}
            transition={{
              type: 'tween',
              duration: .7
            }}
          >

            <h1>{ product.title }</h1>

            <p>{ product.description }</p>

            <p className='price-tag'>${ product.price }</p>

            <p>
              <button className="snipcart-add-item prb-btn"
                data-item-id={product.id}
                data-item-image={product.image}
                data-item-name={product.title}
                data-item-url={`/products/${product.id}`}
                data-item-price={product.price}
              >
                Add to Cart
              </button>
            </p>
          </motion.div>

        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const { productId } = params;
  const product = products.find(({ id }) => id === productId);
  return {
    props: {
      product
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: products.map(({ id }) => {
      return {
        params: {
          productId: id
        }
      }
    }),
    fallback: false
  };
}