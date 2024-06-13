// import tracks
import { audioData } from '../../types/type';
import DecencyDefied from '../music/Cannibal Corpse - Decency Defied.mp3';
import MurderousRampage from '../music/Cannibal Corpse - Murderous Rampage.mp3';
import BloodBlind from '../music/Cannibal Corpse - Blood Blind.mp3';
import TOTTFIY from '../music/Mick Gordon - The Only This They Fear Is You.mp3';
import TOTIKFR from '../music/Jamie Christopherson - The Only Thing I Know For Real.mp3';
import OneGoodReason from '../music/Celldweller - One Good Reason.mp3';
import Decadence from '../music/Disturbed - Decadence.mp3';
import BloodAndThunder from '../music/Mastodon - Blood And Thunder.mp3';
import YouMustFollow from '../music/Stratus - You Must Follow.mp3';
import BrokenSword from '../music/Thinktank - Broken Sword.mp3';

//import img
import CannibalCorpse from '../musicImg/CannibalCorpse.jpg';
import DOOM from '../musicImg/DOOM.jpg';
import MGR from '../musicImg/MGR.jpg';
import NFSMW from '../musicImg/NFSMW.jpg';
import LEVIATHAN from '../musicImg/LEVIATHAN.png';

const musicData: audioData[] = [
    {
        id: 1,
        title: "Blood Blind",
        author: "Cannibal Corpse",
        src: BloodBlind,
        img: CannibalCorpse
    },
    {
        id: 2,
        title: "Decency Defied",
        author: "Cannibal Corpse",
        src: DecencyDefied,
        img: CannibalCorpse
    },
    {
        id: 3,
        title: "Murderous Rampage",
        author: "Cannibal Corpse",
        src: MurderousRampage,
        img: CannibalCorpse
    },
    {
        id: 4,
        title: "One Good Reason",
        author: "Celldweller",
        src: OneGoodReason,
        img: NFSMW
    },
    {
        id: 5,
        title: "Decadence",
        author: "Disturbed",
        src: Decadence,
        img: NFSMW
    },
    {
        id: 6,
        title: "The Only Thing I Know For Real",
        author: "Jamie Christopherson",
        src: TOTIKFR,
        img: MGR
    },
    {
        id: 7,
        title: "Blood And Thunder",
        author: "Mastodon",
        src: BloodAndThunder,
        img: LEVIATHAN
    },
    {
        id: 8,
        title: "The Only Thing They Fear Is YOU",
        author: "Mick Gordon",
        src: TOTTFIY,
        img: DOOM
    },
    {
        id: 9,
        title: "You Must Follow",
        author: "Stratus",
        src: YouMustFollow,
        img: NFSMW
    },
    {
        id: 10,
        title: "Broken Sword",
        author: "Thinktank",
        src: BrokenSword,
        img: NFSMW
    },
    
]
export default musicData;