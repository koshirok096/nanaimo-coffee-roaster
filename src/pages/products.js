import Head from 'next/head';
import Link from 'next/link';

import Layout from '@components/Layout';
import Container from '@components/Container';

import styles from '@styles/Home.module.css';

import products from '../../products.json';
import merches from '../../merches.json';

//SPA Animation
import {AnimatePresence, motion} from "framer-motion";

export default function Products() {
  return (
    <Layout>
      <Head>
        <title>Products</title>
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
        {/* <div className='products-first-look-wrapper'>
          <motion.div
          initial={{ 
            opacity: 0
            }}
          animate={{
            opacity:1
          }}
          transition={{
            type: 'tween',
            duration: .8
          }}
          >
          </motion.div>
          <motion.div
          initial={{ 
            opacity: 0
            }}
          animate={{
            opacity:1
          }}
          transition={{
            type: 'tween',
            duration: .8
          }}
          >
            <h3>Online Delivery Service</h3>
            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a pharetra augue.
            </p>
            </motion.div>
        </div> */}
        {/* <div className='products-bigcopy-wrapper'>
            <h1><span>MAKE THE BEST COFFEE EXPERIENCE FOR EVERYONE.</span><br/>THAT'S OUR MISSION.</h1>
            <p>Committed to doing right for people. That’s our goal – it never changes, we just keep working on ways to achieve it better. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.</p>
        </div> */}
        <div className='mini-tweak-head-wrapeer'>
          <motion.h3
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
              duration: 1
            }}
          >
            Want Some Coffee to Chill at Your Home?<br/>Use Our Online Service. We Deliver to You.
          </motion.h3>
          <motion.p
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
              duration: 1.5
            }}
              >
            We have a range of delicious coffee beans and filter selections, and also some coffee equipment and goods.<br/>Not sure which one is the best for you? No problem, come to our cafe to grab a cup of coffee to test before you order!
          </motion.p>
          <motion.div
            className='prb-hook-img-wrapper'
            initial={{ 
              opacity: 0
              }}
            animate={{
              opacity:1
            }}
            transition={{
              type: 'tween',
              duration: 1.2
            }}
          >
          </motion.div>
        </div>
        <div>
          <div className='products_shop-wrapper'>
            <div className='shop-introduction-wrapper'>
              <h4>SELECTION OF COFFEE</h4>
              <p>Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
            </div>
            <div className='prb-item-wrapper'>
              {products.map(product => {
                return (
                  <div key={product.id} className="card">
                    <Link legacyBehavior href={`/products/${product.id}`}>
                      <a>
                        <img src={product.image} alt={`Preview of ${product.title}`} />
                        <h3>{ product.title }</h3>
                        <p>${ product.price }</p>
                      </a>
                    </Link>
                      <button className="snipcart-add-item"
                        data-item-id={product.id}
                        data-item-image={product.image}
                        data-item-name={product.title}
                        data-item-price={product.price}
                      >
                        Add to Cart
                      </button>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className='products_shop-wrapper'>
            <div className='shop-introduction-wrapper'>
              <h4>MERCHANDISE</h4>
              <p>Vestibulum id ligula porta felis euismod semper.Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
            </div>
            <div className='prb-item-wrapper'>
              {merches.map(merch => {
                return (
                  <div key={merch.id} className="card">
                    <Link legacyBehavior href={`/merches/${merch.id}`}>
                      <a>
                        <img src={merch.image} alt={`Preview of ${merch.title}`} />
                        <h3>{ merch.title }</h3>
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
          </div>
        </div>
      </Container>
      
    </Layout>
    
  )
}
