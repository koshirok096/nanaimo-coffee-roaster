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

export default function About() {

  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>

      <Container className={styles.homeContainer}>
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
        <motion.div
        className='about-first-wrapper'
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
          <div className='about-left-wrapper'></div>
          <div className='about-right-wrapper'>
            <h1><span>MAKE THE BEST COFFEE EXPERIENCE FOR EVERYONE.</span><br/>THAT'S OUR MISSION.</h1>
            <p>Committed to doing right for people. That’s our goal – it never changes, we just keep working on ways to achieve it better. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.</p>
            <Image
              src="/images/nanaimo-coffee_logo_BLK.png"
              width={150}
              height={150}
              className="spin-icon"
            />
          </div>
        </motion.div>
        <div className='viewpoint-wrapper'></div>
        <div className='abmiddle-wrapper_1'>
          <div>
          <h3>Devliver to you with Love from <span>Nanaimo</span></h3>
            <p>Nanaimo is a beautiful city on the east coast of Vancouver Island, in British Columbia, Canada. We opened small cafe at Cedar Rd. for over the past two decades before and now we have two cafes in Nanaimo. Last year, we have opened new cafe at Kerrisdale in the Lower Mainland of Vancouver. There are reasons people continue to love us.
            </p>
          </div>
          <div>
          </div>
        </div>
        <div className='about-second-wrapper'>
          <div className='about-left-wrapper'></div>
          <div className='about-right-wrapper'>
            <h1>Better Than The Time Before.<br/><span>Passion </span>for Quality Coffee.</h1>
            <p>Better is a constant, we’re always improving for sure - we’re better than the time before. That's what we do. We provide Better coffee with quality. Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
            {/* <Image
              src="/images/nanaimo-coffee_logo_BLK.png"
              width={150}
              height={150}
              className="spin-icon"
            /> */}
          </div>
        </div>
        <div className='viewpoint-wrapper'></div>
        <div className='abmiddle-wrapper_2'>
          <div></div>
          <div>
            <h3>Words from the Master</h3>
            <p>Nanaimo Coffee Roaster, yes I'm founder and barista. Thank you for reading. You don't need to read, but I need space! This is mockup. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam id dolor id nibh ultricies vehicula ut id elit. Tristique Fusce Amet Cras Risus. Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue.
            </p>
            <p><span>Co-Founder | Barista - John Doe</span></p>
          </div>
        </div>
        <div className='viewpoint-wrapper'></div>
        <div className='viewpoint-wrapper'></div>
      </Container>
    </Layout> 
  )  
}

