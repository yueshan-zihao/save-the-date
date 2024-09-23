import { Fragment } from 'react'
import styles from '../page.module.scss'
import clsx from "clsx"
import Image from 'next/image'

interface Props {
    height: number;
    width: number;
  }

const Decorations3 = ({height, width}:Props) => {
    return <Fragment>
        <Image
          id="ballon_blue"
          quality={20}
          src={`${process.env.prodUrl}/balloon_blue_s_s.png`}
          alt="Blue Balloon"
          width={500}
          height={500}
          className={clsx(styles.decoration, styles.balloon)}
          style={{
            top: `${height*0.017}px`,
            left: `${width*0.80}px`,
            width: `${width*0.12}px`,
          }}
        />
        <Image
          id="card"
          quality={20}
          src={`${process.env.prodUrl}/background3_animal_crossing_card.png`}
          alt="Animal Crossing Horizon Card"
          width={500}
          height={500}
          className={clsx(styles.decoration, styles.car)}
          style={{
            top: `${height*0.39}px`,
            left: `${width*0.8}px`,
            width: `${width*0.22}px`,
          }}
        />
        <Image
          id="sakura_cardcaptor_star_staff"
          quality={20}
          src={`${process.env.prodUrl}/sakura_staff.png`}
          alt="Sakura Cardcaptor Star Staff"
          width={500}
          height={500}
          className={clsx(styles.decoration, styles.star_staff)}
          style={{
            top: `${height*0.35}px`,
            left: `${width*0.01}px`,
            width: `${width*0.20}px`,
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
            top: `${height*0.0}px`,
            left: `${width*0.0}px`,
            width: `${width*0.23}px`,
          }}
        />
    </Fragment>
}

export default Decorations3