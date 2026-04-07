// const x = 6;
// const y = 7;
// const z = 10;
// // module.exports = x; // single exports
// module.exports = {x,y,z} // Multiple exports

const getDate = () =>{
    const date = new Date()
    console.log(date)
}

// module.exports = getDate;

const getTime = () => {
    const date = new Date()
    const time = date.toLocaleTimeString()
    console.log(time)
}

module.exports = {getDate,getTime};