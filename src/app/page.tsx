'use client'
import { useState, useRef, useEffect } from 'react'
import styles from './page.module.scss'
import clsx from "clsx"
import Background from './backgrounds/backgrounds'
import Background2 from './backgrounds/backgrounds_2'
import Background3 from './backgrounds/backgrounds_3'
import Background4 from './backgrounds/backgrounds_4'
import StickyBar from './decorations/sticky_bar'


export default function Home() {

  const [isLoad, setOnLoad] = useState(false);
  const [position, setPosition] = useState({height: 0, width: 0});
  const main = useRef<HTMLDivElement>(null);

  const handleLoad = () => {
    if (main.current) {
      setOnLoad(true);
      setPosition({
        height: main.current.scrollHeight,
        width: main.current.scrollWidth
      });
    }
  }

  useEffect(() => {
    if (!main.current) {
      // we do not initialize the observer unless the ref has
      // been assigned
      return;
    }

    // we also instantiate the resizeObserver and we pass
    // the event handler to the constructor
    const main_current = main.current;
    const resizeObserver = new ResizeObserver(() => {
      if(main_current.scrollWidth !== position.width) {
        setPosition((prevState) => {
          return({
            ...prevState,
            width: main_current.scrollWidth
          });
        });
      }

      if(main_current.scrollHeight !== position.height) {
        setPosition((prevState) => {
          return({
            ...prevState,
            height: main_current.scrollHeight
          });
        });
      }
    });
    resizeObserver.observe(main.current);
    if (!isLoad){
      handleLoad();
    }
    return function cleanup() {
      resizeObserver.disconnect();
    }
  },[isLoad, main.current]);

  return (
    <div ref={main}>
      <main className={clsx(styles.theme)} style={{
        cursor:`url(${process.env.prodUrl}/sakura_staff_2_cursor.png), auto`
      }}>
        <Background img_url={`${process.env.prodUrl}/web ditu 2.png`}/>
        <Background2 img_url={`${process.env.prodUrl}/background2_new.png`}/>
        <Background3 img_url={`${process.env.prodUrl}/background3_new.png`}/>
        <Background4 img_url={`${process.env.prodUrl}/web new 2.png`}/>
      </main>
      <StickyBar
          height={position.height}
          width={position.width}>
      </StickyBar>
    </div>
  );
}
