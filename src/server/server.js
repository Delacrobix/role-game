const express = require('express'),
      app = express();

const PORT = process.env.PORT || 8080;

const server = () => {
    try{
        app.listen(PORT, function(){
            console.log(`Node server running on port ${PORT}`);
        });
    } catch(err){
        console.error(`ERROR connecting to ${PORT}` , err);
    }
}

module.exports = server;