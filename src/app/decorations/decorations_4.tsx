import { Fragment } from 'react'
import styles from '../page.module.scss'
import clsx from "clsx"
import Image from 'next/image'

interface Props {
    height: number;
    width: number;
  }

const Decorations4 = ({height, width}:Props) => {
    return <Fragment>
        <img
          id="car"
          src={`${process.env.prodUrl}/car_s_s.png`}
          alt="Car"
          width={500}
          height={500}
          className={clsx(styles.decoration, styles.car)}
          style={{
            top: `${height*0.88}px`,
            left: `${width*0.15}px`,
            width: `${width*0.60}px`,
          }}
        />
        <img
          id="smoke1"
          src={`${process.env.prodUrl}/air.gif`}
          alt="Smoke"
          width={500}
          height={500}
          className={clsx(styles.decoration, styles.car)}
          style={{
            top: `${height*0.885}px`,
            left: `${width*0.60}px`,
            width: `${width*0.28}px`,
          }}
        />
        

        <img
          id="flower"
          src={`${process.env.prodUrl}/background4_calendar_flower.png`}
          alt="Flower"
          width={500}
          height={500}
          className={clsx(styles.decoration, styles.flower)}
          style={{
            top: `${height*0.113}px`,
            left: `${width*0.12}px`,
            width: `${width*0.24}px`,
          }}
        />
        <Image
          src={`${process.env.prodUrl}/korok balloon.png`}
          quality={20}
          alt="Korok Balloon"
          width={500}
          height={500}
          className={clsx(styles.decoration, styles.car)}
          style={{
            top: `${height*0.37}px`,
            left: `${width*0}px`,
            width: `${width*0.1}px`,
          }}
        />
        <img
          src={`${process.env.prodUrl}/pikachu.gif`}
          alt="Pikachu"
          width={500}
          height={500}
          className={clsx(styles.decoration, styles.car)}
          style={{
            top: `${height*0.83}px`,
            left: `${width*0.76}px`,
            width: `${width*0.2}px`,
          }}
        />
        <img
          onClick={()=>window.open(process.env.wedding_url, "_blank", "noreferrer")}
          id="qrcode"
          src={`${process.env.prodUrl}/background4_qrcode_new.png`}
          alt="QRCode"
          width={500}
          height={500}
          className={clsx(styles.decoration, styles.qrcode)}
          style={{
            top: `${height*0.76}px`,
            left: `${width*0.25}px`,
            width: `${width*0.50}px`,
          }}
        />
        <Image
          id="sakura_staff_2"
          quality={20}
          src={`${process.env.prodUrl}/sakura_staff_2.png`}
          alt="Sakura Cardcaptor Wing Staff"
          width={500}
          height={500}
          className={clsx(styles.decoration, styles.wing_staff)}
          style={{
            top: `${height*0.55}px`,
            left: `${width*0.70}px`,
            width: `${width*0.23}px`,
          }}
        />
        <Image
          src={`${process.env.prodUrl}/cloud1.png`}
          quality={20}
          alt="Cloud"
          width={500}
          height={500}
          className={clsx(styles.decoration, styles.car)}
          style={{
            top: `${height*0.22}px`,
            left: `${width*-0.06}px`,
            width: `${width*0.3}px`,
          }}
        />
        <Image
          src={`${process.env.prodUrl}/cloud1_rotated.png`}
          quality={20}
          alt="Cloud"
          width={500}
          height={500}
          className={clsx(styles.decoration, styles.car)}
          style={{
            top: `${height*0.235}px`,
            left: `${width*0.80}px`,
            width: `${width*0.3}px`,
          }}
        />
        <img
          src={`${process.env.prodUrl}/witch.png`}
          alt="Cloud"
          width={500}
          height={500}
          className={clsx(styles.decoration, styles.car)}
          style={{
            top: `${height*0.17}px`,
            left: `${width*0.15}px`,
            width: `${width*0.73}px`,
          }}
        />
        <iframe
        width="600" height="450"
        className={clsx(styles.decoration)}
          style={{
            border:0,
            top: `${height*0.36}px`,
            left: `${width*0.16}px`,
            width: `${width*0.7}px`,
            height: `${height*0.145}px`,
          }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJOSg50yTCj4ARVkLgDtf8qqE&key=AIzaSyAzBjB7Cu78zFOZ5UnU87sWtp8XLiO1oO0&zoom=10"
          >
          </iframe>
          <Image
          src={`${process.env.prodUrl}/yahaha.png`}
          quality={20}
          alt="Yahaha"
          width={500}
          height={500}
          className={clsx(styles.decoration, styles.car)}
          style={{
            top: `${height*0.81}px`,
            left: `${width*0}px`,
            width: `${width*0.29}px`,
          }}
        />
    </Fragment>
}

export default Decorations4