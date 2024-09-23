'use client'
import { Fragment } from 'react'
import Image from 'next/image'
import styles from '../page.module.scss'
import clsx from "clsx"

interface Props {
    height: number;
    width: number;
  }

const Decorations = ({height, width}:Props) => {
    return <Fragment>
        <Image
          id="ballon_yellow"
          quality={20}
          src={`${process.env.prodUrl}/balloon_yellow_s_s.png`}
          alt="Yellow Balloon"
          width={300}
          height={300}
          className={clsx(styles.decoration, styles.balloon)}
          style={{
            top: `${height*0.08}px`,
            left: `${width*0.75}px`,
            width: `${width*0.13}px`,
          }}
          priority
        />
        <Image
          id="couple"
          quality={20}
          src={`${process.env.prodUrl}/background1_couple.png`}
          alt="Cute Anime Style Couple"
          width={500}
          height={500}
          className={clsx(styles.decoration, styles.couples)}
          style={{
            top: `${height*0.34}px`,
            left: `${width*0.006}px`,
            width: `${width*0.979}px`,
          }}
          priority
        />
        <Image
          id="wave"
          quality={20}
          src={`${process.env.prodUrl}/web hailang-19 2.png`}
          alt="Wave"
          width={500}
          height={500}
          className={clsx(styles.decoration, styles.wave)}
          style={{
            top: `${height*0.05}px`,
            left: `0px`,
            width: `${width}px`,
          }}
          priority
        />
        <Image
          id="wave_bubble"
          quality={20}
          src={`${process.env.prodUrl}/web hailang-29 3.png`}
          alt="Wave Bubble"
          width={500}
          height={500}
          className={clsx(styles.decoration, styles.wave_bubble)}
          style={{
            top: `${height*0.06}px`,
            left: `0px`,
            width: `${width}px`,
          }}
          priority
        />
    </Fragment>
}

export default Decorations