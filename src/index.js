import app from './app';

const PORT = process.env.PORT || 8080;

function executeServer(){
    try{
        app.listen(PORT, function(){
            console.log(`Node server running on port ${PORT}`);
        });
    } catch(err){
        console.error(`ERROR connecting to ${PORT}` , err);
    }
}

executeServer();