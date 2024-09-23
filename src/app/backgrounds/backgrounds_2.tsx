'use client'
import { useState, useEffect, useRef } from 'react'
import styles from '../page.module.scss'
import clsx from "clsx"
import Decorations2 from '../decorations/decorations_2'

interface Props {
  img_url: string
}

export default function Background({img_url}:Props) {
  const [isLoad, setOnLoad] = useState(false);
  const [position, setPosition] = useState({height: 0, width: 0});
  const image = useRef<HTMLImageElement>(null);

  const handleLoad = () => {
    if (image.current && image.current.complete) {
      setOnLoad(true);
      setPosition({
        height: image.current.scrollHeight,
        width: image.current.scrollWidth
      });
    }
  }

  useEffect(() => {
    if (!image.current) {
        // we do not initialize the observer unless the ref has
        // been assigned
        return;
      }
  
      // we also instantiate the resizeObserver and we pass
      // the event handler to the constructor
      const image_current = image.current;
      const resizeObserver = new ResizeObserver(() => {
        if(image_current.scrollWidth !== position.width) {
          setPosition((prevState) => {
            return({
              ...prevState,
              width: image_current.scrollWidth
            });
          });
        }
  
        if(image_current.scrollHeight !== position.height) {
          setPosition((prevState) => {
            return({
              ...prevState,
              height: image_current.scrollHeight
            });
          });
        }
      });
      resizeObserver.observe(image.current);
      if (!isLoad){
        handleLoad();
      }
      return function cleanup() {
        resizeObserver.disconnect();
      }
    },[isLoad, image.current]);

  return (
    <div style={{position:'relative'}}>
        <img
          ref={image}
          id="background2"
          src={img_url}
          alt="Background Image 2"
          width={500}
          height={500}
          className={clsx(styles.background2)}
          onLoad={handleLoad}
        />
        {isLoad ? <Decorations2
          height={position.height}
          width={position.width}
        /> : null}
    </div>
  );
}
