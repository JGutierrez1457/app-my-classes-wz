const app = require('./config/server');
const connectToDB = require('./config/db');

connectToDB();
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log('Listen to', PORT);
})