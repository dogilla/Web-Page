const express = require('express');
const path = require('path');
const app = express();

//set static folder
app.use(express.static(path.join(__dirname, 'static'))); 


app.listen(3000, () => {
    console.log('Escuchando por puerto 3000');
});
