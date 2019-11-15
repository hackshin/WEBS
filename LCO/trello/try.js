const convertToRs = (dollars)=>{
    if(typeof dollars ==='number')
{
    return dollars*64;
}
else
{
    throw Error('Amount needs to be in number')
}
}

try{
    const myVal = convertToRs('I will not run if program crashes');
    console.log(myVal)
}catch(error)
    {
    console.log(error)
    }

