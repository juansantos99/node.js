const express = require('express');
const app = express(); //chamar a função express

app.listen(3000, function(){
    console.log('Servidor Online | Porta: 3000');
});

app.get('/', function(req, resp){
    resp.send(
        `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Casa do Código </h1>
            </body> 
        </html>
    `
    );
});
