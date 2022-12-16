import Head from 'next/head';
import Link from 'next/link';

import Layout from '@components/Layout';
import Container from '@components/Container';

import styles from '@styles/Home.module.css';

import products from '../../products.json';
import merches from '../../merches.json';

import Image from 'next/image';

//SPA Animation
import {AnimatePresence, motion} from "framer-motion";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Nanaimo Coffee</title>
      </Head>

      <Container className={styles.homeContainer}>
        <div className='first-look-bg'>
          <div>
          <motion.div
              initial={{ 
                rotate: -180, 
                opacity: 0,
               }}
              animate={{
                rotate: 0, 
                opacity:1
              }}
              transition={{
                type: 'tween',
                duration: 2.2
              }}
            >
              <Image
              src="/images/nanaimo-coffee_logo_WHT.png"
              width={130}
              height={130}
              />
          </motion.div>
            <motion.h1
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
              Start Your Day with<br/>Canadian Organic Coffee.
            </motion.h1>
            <motion.h2
              initial={{ 
                opacity: 0
                }}
              animate={{
                opacity:1
              }}
              transition={{
                type: 'tween',
                duration: 1.9
              }}
            >
              WITH LOVE FROM<br/><span>Nanaimo</span>
            </motion.h2>
            <div className='subtitle-wrapper'>
                <motion.span
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
                    duration: .7
                  }}
                >
                <Image
                  src="/images/Flag_of_Nanaimo_Canada.png"
                  width={50}
                  height={50}
              />
                </motion.span>
                <motion.span
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
                    duration: 1.1
                  }}
                >                
                <Image
                  src="/images/Flag_of_Canada.png"
                  width={50}
                  height={50}
                />
                </motion.span>
            </div>
          </div>
          <div className='shade-wrapper'></div>
            <ul class="slideshow">
              <li><span></span></li>
              <li><span></span></li>
              <li><span></span></li>
              <li><span></span></li>
              <li><span></span></li>
            </ul>
        </div>
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
        <div className='viewpoint-wrapper down-indi-miniwrap'>
          <h5>🎅 Happy Holiday! 🎉 Over the holiday period, we need 2-3 working days for your order to arrive.</h5>
        </div>
        <div className='viewpoint-wrapper'></div>
        <div className='middle-wrapper'>
          <div></div>
          <div>
            <h3>Nanaimo's Best Coffee Roaster.</h3>
            <p>Nanaimo Coffee Roaster, we’re creating great coffee experiences for customers for the past two decades in Nanaimo, British Columbia, Canada. To create supreme cup of coffee is our mission. We have a range of delicious coffee beans and filters selections that you can buy at store or online. Want some drink at the cafe? We have three cafes in BC - visit and have a cup of coffee for chillin.
            </p>
            <Link href= '/about'>SEE OUR STORY</Link>
          </div>
        </div>
        <div className='products_pickups-wrapper'>
          <div className='pickups-introduction-wrapper'>
            <h4>SHOP COFFEE</h4>
            <p>Want some coffee beans or filters? Let's find your best choise from our store. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
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
                    {/* <button className="snipcart-add-item"
                      data-item-id={product.id}
                      data-item-image={product.image}
                      data-item-name={product.title}
                      data-item-price={product.price}
                    >
                      Add to Cart
                    </button> */}
                </div>
              );
            })}
          <Link href={`/products`}>
            <button>
              <i class="fa-solid fa-circle-chevron-right"></i>
            </button>
          </Link>
          <div className='resp_items_title'>
              <h4>SHOP COFFEE</h4>
              <p>Want some coffee beans or filters? Let's find your best choise from our store. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              <Link href={`/products`}>See All Products</Link>
            </div>
          </div>
        </div>
        <div className='products_pickups-wrapper merch-bottom-border'>
          <div className='pickups-introduction-wrapper'>
            <h4>MERCHANDISE</h4>
            <p>Check some Nanaimo Coffee Roaster's merch. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
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
                    {/* <button className="snipcart-add-item"
                      data-item-id={merch.id}
                      data-item-image={merch.image}
                      data-item-name={merch.title}
                      data-item-price={merch.price}
                    >
                      Add to Cart
                    </button> */}
                </div>
              );
            })}
          <Link href={`/products`}>
            <button><i class="fa-solid fa-circle-chevron-right"></i></button>
          </Link>
          <div className='resp_items_title'>
          <h4>MERCHANDISE</h4>
            <p>Check some Nanaimo Coffee Roaster's merch. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
              <Link href={`/products`}>See All Products</Link>
          </div>
            {/* {merches.map(merch => {
            return (
              <div key={merch.id} className={styles.card}>
                <Link legacyBehavior href={`/products/${merch.id}`}>
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
          })} */}
          </div>
        </div>
    
        <div className='viewpoint-wrapper'></div>
        <div className='location-head'>            
          <h3>LOCATIONS</h3>
        </div>
        <div className='location-wrapper'>
          <Tabs>
            <TabList>
              <Tab>NCR Cedar Rd</Tab>
              <Tab>NCR Hammond Bay</Tab>
              <Tab>NCR Kerrisdale</Tab>
            </TabList>
            <TabPanel>
            <div className='location-insdide-wrapper'>              
              <div className='cafephoto-wrapper-a'>
              </div>
                <div className='cafedescription-wrapper'>
                  <div>
                    <div>
                      <h3>
                        NCR Cedar Rd<br/>
                      </h3>
                      <p>XXX-18XX Cedar Rd, Nanaimo, British Columbia V9X 1H9 Canada</p>
                      <ul className="working-hours-wrapper">
                        <li class="hours">
                          <p>
                            Mon–Fri
                          </p>
                          <span>
                            6.30am–4.00pm
                          </span>
                        </li>            
                        <li>
                          <p>
                            Sat–Sun
                          </p>
                          <span>
                            8:00am–5.00pm
                          </span>
                        </li>
                      </ul>
                    </div>
                </div>
              </div>
            </div>
            </TabPanel>
            <TabPanel>
            <div className='location-insdide-wrapper'>              
              <div className='cafephoto-wrapper-b'>
              </div>
              <div className='cafedescription-wrapper'>
                  <div>
                    <div>
                      <h3>
                      NCR Hammond Bay<br/>
                      </h3>
                      <p>99XX Hammond Bay Rd Unit A, Nanaimo, British Columbia V9T 5Y1 Canada</p>
                      <ul className="working-hours-wrapper">
                        <li class="hours">
                          <p>
                            Mon–Fri
                          </p>
                          <span>
                            6.45am–4.30pm
                          </span>
                        </li>            
                        <li>
                          <p>
                            Sat–Sun
                          </p>
                          <span>
                            7:30am–4.00pm
                          </span>
                        </li>
                      </ul>
                    </div>
                </div>
              </div>
            </div>
            </TabPanel>
            <TabPanel>
            <div className='location-insdide-wrapper'>              
              <div className='cafephoto-wrapper-c'>
              </div>
              <div className='cafedescription-wrapper'>
                  <div>
                    <div>
                      <h3>
                        NCR Kerrisdale<br/>
                      </h3>
                      <p>XXX12 Windermere St, Vancouver, British Columbia V5K 4J6 Canada</p>
                      <ul className="working-hours-wrapper">
                        <li class="hours">
                          <p>
                            Mon–Fri
                          </p>
                          <span>
                            7.00am–8.00pm
                          </span>
                        </li>            
                        <li>
                          <p>
                            Sat–Sun
                          </p>
                          <span>
                            8:30am–7.00pm
                          </span>
                        </li>
                      </ul>
                    </div>
                </div>
              </div>
            </div>
            </TabPanel>
          </Tabs>
        </div>
        <div className='viewpoint-wrapper'></div>

        

      </Container>
    </Layout>
    
  )
  
  
}

