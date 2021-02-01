const addCommas=(numberCount)=>{
    if(!Number.isInteger(numberCount)){
        throw new TypeError("This is an integer")
    }
    numberCount=numberCount.toString();
    let lenNumberCount=numberCount.length;
    let nCommas;
    if(Number.isInteger(lenNumberCount/3)){
        nCommas=((lenNumberCount/3)-1);
    }
    else{
        nCommas=Math.floor(lenNumberCount/3)
    }
    //adding the Commas
    for(let i=1;i<=nCommas;i++){
        numberCount=numberCount.slice(0,lenNumberCount-(3*i))+ "," +
        numberCount.slice(lenNumberCount-(3*i));
    }
    return numberCount;
}

export default addCommas;