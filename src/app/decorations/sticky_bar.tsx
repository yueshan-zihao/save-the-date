'use client'
import { Fragment, useRef, useState } from 'react'
import styles from '../page.module.scss'
import clsx from "clsx"

interface Props {
    height: number;
    width: number;
  }

const StickyBar = ({width}:Props) => {

    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleMusic = () => {
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          audioRef.current.play();
          setIsPlaying(true);
        }
      }
    };

    // Repeat the music when it ends
    const handleEnd = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    };

    return <Fragment>
        <button className={clsx(styles.music_pushable)}
        onClick={toggleMusic}
        style={{
          bottom: `1rem`,
          left: `${width*0.01}px`,
          width: `${width*0.165}px`,
          position: `fixed`,
            }}>
            
              <img
                className={clsx(styles.music_front)}
                src={`${process.env.prodUrl}/frog.gif`}
                style={{
                width: `100%`,
                boxShadow: `none`,
                }}
            >
              </img>
          </button>
        
        <audio ref={audioRef} src={`${process.env.prodUrl}/animal_crossing_music.mp3`} onEnded={handleEnd} />
    </Fragment>
}

export default StickyBar