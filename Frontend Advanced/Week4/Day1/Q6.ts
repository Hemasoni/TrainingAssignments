function getMax(...ar:number[])
{
    let s:number  = 0;

    console.log("Numbers given by the user:")
    for(let n of ar)
    {
        console.log(n)
        if (s<n)
        s  = n;
        
    }
    
    console.log("Maximum of the given numbers : " + s);
}

getMax(10,20,70,80);
getMax(200,300,700)
