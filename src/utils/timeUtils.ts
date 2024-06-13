export function secondsParser(seconds: number): string {
    let hours = 0;
    let minutes = 0;
    let newSeconds = 0;
    if(1 <= seconds/3600){
        hours = (seconds - (seconds%3600))/3600;
    }
    if(1 <= seconds/60){
        const remainder = (seconds - hours*3600);
        minutes = (remainder - remainder%60)/60;
    }
    
    newSeconds = Math.round(seconds - hours*3600 - minutes*60); 
    if(newSeconds == 60){
        newSeconds = 0;
        minutes++;
    }   
    // Формирование строки
    let parsedData = "";
    if(hours !== 0) hours < 10 ? parsedData += "0" + hours + ":" : parsedData += hours + ":";
    if(minutes !== 0) minutes < 10 ? parsedData += "0" + minutes + ":" : parsedData += minutes + ":";
    newSeconds < 10 ? parsedData += "0" + newSeconds : parsedData += newSeconds;

    return parsedData;
}