function asyncForEach(itr, cb){
    itr.forEach((i) => {
        setTimeout(() => {cb(i)}, 0)
    })
    console.log('out');
}

asyncForEach([1, 2, 3, 4], function (i) {
    console.log('aaa', i);
})