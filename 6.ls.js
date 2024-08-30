const fs = require('node:fs')

fs.readdir('.', (err,files) =>{
    if(err){
        console.error('Erorr a el leer el directorio:', err)
        return;
    }
files.forEach(files => {
   console.log(file) 
})

})

