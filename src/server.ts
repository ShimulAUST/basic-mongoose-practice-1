import app from './app';
import mongoose from 'mongoose';
const port: number = 5000;

// database connection
async function bootstarp() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log('Database connected');

        app.listen(port, () => {
            console.log(`Server app listening on port ${port}`)
        })
    }
    catch (err) {
        console.log(err);
    }
}
bootstarp();


