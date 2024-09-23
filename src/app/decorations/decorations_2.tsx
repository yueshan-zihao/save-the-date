import { Fragment } from 'react'
import styles from '../page.module.scss'
import clsx from "clsx"

interface Props {
    height: number;
    width: number;
  }

const Decorations2 = ({height, width}:Props) => {

    return <Fragment>
        <img
          id="heart_wings"
          src={`${process.env.prodUrl}/wing_move.gif`}
          alt="Heart with wings"
          width={300}
          height={300}
          className={clsx(styles.decoration, styles.heart)}
          style={{
            top: `${height*0.64}px`,
            left: `${width*0.34}px`,
            width: `${width*0.32}px`,
          }}
        />
    </Fragment>
}

export default Decorations2