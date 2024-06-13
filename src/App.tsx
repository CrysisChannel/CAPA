import { useState, useMemo } from "react";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import AudioList from "./components/AudioList/AudioList";
import './App.css';
import './range.css';

export type AudioPlayerState = {
  isPlayOnLoad: boolean,
  setIsPlayOnLoad: Function
}
export default function App(){
  const [ musicId, setMusicId ] = useState(0);
  const [ isPlayOnLoad, setIsPlayOnLoad ] = useState(false);
  const AudioPlayerState: AudioPlayerState = {
    isPlayOnLoad,
    setIsPlayOnLoad
  }
  const AudioListState = {
    ...AudioPlayerState,
    id: musicId,
    setId: setMusicId
  }
  return (
    <>
      <AudioPlayer audioId={musicId} state={AudioPlayerState}/>
      {useMemo(() => <AudioList state={AudioListState} />, [musicId])};
    </>
  );
}

