import { DB_URL } from '../config/app'
import mongoose from 'mongoose'

const DbConnect = async () => {
    try {
       const conn =  await mongoose.connect(DB_URL);
         if(conn){
            console.log('MongoDB is connected');
         }else{
            console.log('Oops could not connect MongoDB ');
         }
    } catch (error) {
        console.log(error);
    }

}

export default DbConnect;