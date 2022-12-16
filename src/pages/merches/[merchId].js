import Head from 'next/head'
import { FaShoppingCart } from 'react-icons/fa';

import Layout from '@components/Layout';
import Container from '@components/Container';
import Link from 'next/link';


import styles from '@styles/Product.module.css'

import merches from '../../../merches.json';

//SPA Animation
import {AnimatePresence, motion} from "framer-motion";


export default function Merch({ merch }) {
  return (
    <Layout>
      <Head>
        <title>{ merch.title } - Nanaimo Coffee Roaster</title>
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
            <img src={merch.image} alt={`Preview of ${merch.title}`} />
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

            <h1>{ merch.title }</h1>

            <p>{ merch.description }</p>

            <p className='price-tag'>${ merch.price }</p>

            <p>
              <button className="snipcart-add-item prb-btn"
                data-item-id={merch.id}
                data-item-image={merch.image}
                data-item-name={merch.title}
                data-item-url={`/merches/${merch.id}`}
                data-item-price={merch.price}
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
  const { merchId } = params;
  const merch = merches.find(({ id }) => id === merchId);
  return {
    props: {
      merch
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: merches.map(({ id }) => {
      return {
        params: {
          merchId: id
        }
      }
    }),
    fallback: false
  };
}

// import Head from 'next/head'
// import { FaShoppingCart } from 'react-icons/fa';

// import Layout from '@components/Layout';
// import Container from '@components/Container';
// import Link from 'next/link';


// import styles from '@styles/Product.module.css'

// import merches from '../../../merches.json';

// export default function Merch({ merch }) {
//   return (
//     <Layout>
//       <Head>
//         <title>{ merch.title } - Nanaimo Coffee Roaster</title>
//       </Head>
//       <Container>
//         <div className='r-b-l-nav-wrapper'>
//           <div className='side-navs-wrapper'>
//               <div className='left-wrapper'>
//                 <Link href= '/about'>OUR STORY</Link>
//               </div>
//               <div className='right-wrapper'>
//                 <Link href='/products'>PRODUCTS</Link>
//               </div>
//           </div>
//         </div>
//         <div className={styles.product}>
          
//           <div className={styles.productImage}>
//             <img src={merch.image} alt={`Preview of ${merch.title}`} />
//           </div>

//           <div className={styles.merchDetails}>

//             <h1>{ merch.title }</h1>

//             <p>{ merch.description }</p>

//             <p>${ merch.price }</p>

//             <p>
//               <button className="snipcart-add-item prb-btn"
//                 data-item-id={merch.id}
//                 data-item-image={merch.image}
//                 data-item-name={merch.title}
//                 data-item-url={`/merch/${merch.id}`}
//                 data-item-price={merch.price}
//               >
//                 Add to Cart
//               </button>
//             </p>

//           </div>

//         </div>
//       </Container>
//     </Layout>
//   )
// }

// export async function getStaticProps({ params }) {
//   const { merchId } = params;
//   const merch = merches.find(({ id }) => id === merchId);
//   return {
//     props: {
//       merch
//     }
//   }
// }

// export async function getStaticPaths() {
//   return {
//     paths: merches.map(({ id }) => {
//       return {
//         params: {
//           merchId: id
//         }
//       }
//     }),
//     fallback: false
//   };
// }
