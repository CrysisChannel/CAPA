import React from "react";
import musicData from "../../assets/musicData/musicData";

export function play(objectLink: React.RefObject<HTMLAudioElement>){ 
    if(objectLink.current){
        if(objectLink.current.paused) objectLink.current.play();
        else {
            objectLink.current.pause();
            objectLink.current.currentTime = 0;
            objectLink.current.play();
        }
        return true;
    } 
    else return false;
}
export function stop(objectLink: React.RefObject<HTMLAudioElement>){ 
    if(objectLink.current){
        objectLink.current.pause();
        objectLink.current.currentTime = 0;
        return true;
    } 
    else return false;
}
export function pause(objectLink: React.RefObject<HTMLAudioElement>){ 
    if(objectLink.current){
        objectLink.current.pause();
        return true;
    } 
    else return false;
}
export function mute(objectLink: React.RefObject<HTMLAudioElement>){
    if(objectLink.current){
        objectLink.current.muted = !objectLink.current.muted;
        return true;
    }
    else return false;
}
export function next(id:number, setId: Function){
    if(!musicData[id + 1]){ setId(0); return; }
    setId(id + 1);
}
export function prev(id:number, setId: Function){
    if(id === 0){ setId(musicData.length - 1); return; }
    setId(id - 1);
}