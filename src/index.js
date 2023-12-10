import dotenv from 'dotenv'
import connectDb from "./db/index.js";
import app from './app.js';

dotenv.config({
    path: './env'
})

connectDb()
    .then(() => {
        app.get('/', (req, res) => {
            res.status(200).send('<h1>hello </h1>');  // Corrected this line
        });

        app.listen(process.env.PORT || 3000, () => {
            console.log(`server is running on port ${process.env.PORT || 3000}`);
        });
    })
    .catch((err) => {
        console.log(err, 'MongoDb connection failed')
    })