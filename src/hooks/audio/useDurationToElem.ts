import { secondsParser } from "../../utils/timeUtils";

type elem = HTMLDivElement |
            HTMLParagraphElement |
            HTMLSpanElement;
export default function useDurationToElem(
    elemLink: React.RefObject<elem>, functions?: Function[] 
){
    function onCanPlay(event: React.SyntheticEvent<HTMLAudioElement, Event>){
        let element = elemLink.current;
        if(!element) return;
        if(element) element.innerHTML = secondsParser(event.currentTarget.duration);
        if(functions){
            functions.forEach((func) => {
                func(event.currentTarget.duration);
            });
        }
    }
    return onCanPlay;
}