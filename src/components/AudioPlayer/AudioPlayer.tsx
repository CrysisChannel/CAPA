import React, { useEffect, useRef, useState } from "react";
import { audioData } from "../../types/type";
import useDurationToElem from "../../hooks/audio/useDurationToElem";
import { mute, next, pause, play, prev, stop } from "./AudioControl";
import musicData from "../../assets/musicData/musicData";
import styles from './AudioPlayer.module.css';
import { secondsParser } from "../../utils/timeUtils";
import { AudioPlayerState } from "../../App";

export default function AudioPlayer(
    { audioId, state }: { audioId: number, state: AudioPlayerState }){
    const [ id, setId ] = useState(audioId);
    useEffect(() => setId(audioId), [audioId]);
    const audioData: audioData = musicData[id]; 
    const audio = useRef<HTMLAudioElement>(null);
    const input = useRef<HTMLInputElement>(null);
    const duration = useRef<HTMLSpanElement>(null);
    const currentTime = useRef<HTMLSpanElement>(null);
    useEffect(() => {
        function listener(event: KeyboardEvent){
            if(event.key == 'ArrowRight' && event.ctrlKey){
                changeAudio('next');
                return;
            }
            if(event.key == 'ArrowLeft' && event.ctrlKey){
                changeAudio('prev');
                return;
            }
            if((event.code == 'Space') || (event.key == 'k' && event.altKey)){
                if(!audio.current) return;
                audio.current.paused ? play(audio) : pause(audio);
                return;
            }
        }
        document.addEventListener('keydown', listener);
        return ()  => document.removeEventListener('keydown', listener)
    });
    function setMax(duration: number){
        if(input.current) input.current.max = duration.toString(); 
    }
    function changeAudio(action: "next" | "prev"){
        action == "next" ? next(id, setId) : prev(id, setId);
        state.setIsPlayOnLoad(true);
    }
    function onTimeUpdate(){
        if(!input.current || !audio.current || !currentTime.current) return;
        input.current.value = audio.current.currentTime.toString();
        currentTime.current.innerHTML = secondsParser(audio.current.currentTime);
    }
    function onChange(){
        if(!input.current || !audio.current) return;
        state.setIsPlayOnLoad(false);
        audio.current.currentTime = Number(input.current.value);
    }
    function volumeChanger(event: React.ChangeEvent<HTMLInputElement>){
        if(!audio.current) return;
        audio.current.volume = Number(event.currentTarget.value);
    }
    let playAfterLoad = state.isPlayOnLoad ? () => {play(audio)} : () => {};
    const onCanPlay = useDurationToElem(duration, [setMax, playAfterLoad]);
    return (
        <>
            <div id="audio-player" className={styles.audioPlayer}>
                <div className={styles.top}>
                    <input
                    defaultValue={0}
                    className={"range " + styles.range}
                    type="range" 
                    ref={input}
                    onChange={onChange}
                    onMouseDown={() => pause(audio)}
                    onMouseUp={() => play(audio)} />
                </div>
                <div className={styles.bot}>
                    <audio
                    src={audioData.src}
                    ref={audio}
                    onCanPlay={onCanPlay}
                    onTimeUpdate={onTimeUpdate}
                    onEnded={() => changeAudio('next')}
                    />
                    <button onClick={() => play(audio)}>PLAY</button>
                    <button onClick={() => pause(audio)}>PAUSE</button>
                    <button onClick={() => {
                        stop(audio);
                        state.setIsPlayOnLoad(false);
                        }}>STOP</button>
                    <button onClick={() => changeAudio('prev')}>PREV</button>
                    <button onClick={() => changeAudio('next')}>NEXT</button>
                    <button onClick={() => mute(audio)}>MUTE</button>
                    <input
                    type="range"
                    className="range"
                    max={1}
                    step={0.05}
                    onChange={volumeChanger} />
                    <span className={styles.currentTime} ref={currentTime}></span>
                </div>
            </div>
            <div id="audio-info" className={styles.audioInfo}>
                <img src={audioData.img} alt={audioData.title} className={styles.infoImg} />
                <h1 id="title" className={styles.title}>{audioData.title}</h1>
                <p id="author" className={styles.author}>{audioData.author}</p>
                <span id="duration" className={styles.duration} ref={duration}></span>
            </div>
        </>
    );
}
