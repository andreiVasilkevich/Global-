const p = new Promise(( resolve, regect ) => {
    setTimeout( () =>{
        console.log ('Reparing daya')
        const backendData = {
            port: 'aws',
            server : 2000
        }
        resolve (backendData)
    }, 2000)

})
p.then ((degd) => {
    console.log ('Promise resolved')
})
