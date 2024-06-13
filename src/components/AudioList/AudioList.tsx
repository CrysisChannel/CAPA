import { useRef } from "react";
import musicData from "../../assets/musicData/musicData";
import useDurationToElem from "../../hooks/audio/useDurationToElem";
import { audioData } from "../../types/type";
import styles from "./AudioList.module.css";

type state = {
    id: number,
    setId: Function,
    isPlayOnLoad: boolean,
    setIsPlayOnLoad: Function
}
export default function AudioList({ state }: { state: state}){
    return (
        <section className={styles.audioList}>
            {
                musicData.map((music: audioData, index: number) => {
                    const duration = useRef<HTMLSpanElement>(null);
                    const onCanPlay = useDurationToElem(duration);
                    const style = {background: `url(${music.img}) 0 0/ 100% 100%`}
                    return (
                        <button
                        style={style}
                        className={styles.audioListItem}
                        onClick={() => {
                                state.setId(index);
                                state.setIsPlayOnLoad(true);
                            }
                        }
                        key={music.id}>
                            <audio src={music.src} onCanPlay={onCanPlay}></audio>
                            <h1 className={styles.title}>{music.title}</h1>
                            <p className={styles.author}>{music.author}</p>
                            <span className={styles.duration} ref={duration}></span>
                        </button>
                    )
                })
            }
        </section>
    );
}