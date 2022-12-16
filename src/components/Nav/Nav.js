import Link from "next/link";
import { useEffect, useState } from "react";

import { FaShoppingCart } from "react-icons/fa";

import Container from "../Container";

import styles from "./Nav.module.css";

import Image from "next/image";

//SPA Animation
import {
  AnimatePresence,
  motion,
  useScroll,
  useViewportScroll,
  useTransform,
} from "framer-motion";

const Nav = ({ children }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (window.Snipcart) {
      setTotal(Snipcart.store.getState().cart.total);
    }
  });
  // const { scrollYProgress } = useScroll();

  const { scrollYProgress } = useViewportScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [1, 360]);

  return (
    <nav className={styles.nav}>
      <Container className={styles.navContainer}>
        <div className={styles.title}>
          <Link legacyBehavior href="/">
            <a href="/">
              <motion.div className="text" style={{ rotate }}>
                <Image
                  src="/images/nanaimo-coffee_logo_BLK_Simple.png"
                  width={45}
                  height={45}
                />
              </motion.div>
            </a>
          </Link>
          {/* <Link legacyBehavior href="/">
            <motion.a
              initial={{ 
                rotate: -180, 
                opacity: 0,
                x:"-5vw"
               }}
              animate={{
                rotate: 0, 
                opacity:1,  
                x:0 
              }}
              transition={{
                type: 'tween',
                duration: 0.8
              }}
              style={{ rotate: scrollYProgress }}
            >
              <Image
              src="/images/nanaimo-coffee_logo_BLK_Simple.png"
              width={45}
              height={45}
              />
            </motion.a>
          </Link> */}
        </div>
        <Link href="/" className="nav-center-logo">
        <h2>
          <Image
            src="/images/mainlogo.png"
            width={150}
            height={45}
          />
          {/* <span>Nanaimo</span>
          <br/>
          <span>Coffee Roaster</span> */}
        </h2>
        </Link>
        <div className={styles.description}>
          <Link legacyBehavior href="/">
            <a
              className="snipcart-checkout snipcart-summary"
              href="#"
              style={{ textDecoration: "none" }}
            >
              <FaShoppingCart />
              <strong className="sr-only">Cart</strong>
              {/* error starts */}
              {/* <span className="snipcart-total-price">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(total)}
              </span> */}
              {/* error ends */}
            </a>
          </Link>
        </div>


      </Container>
    </nav>
  );
};

export default Nav;
