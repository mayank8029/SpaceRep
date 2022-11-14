const mongoose = require('mongoose') ; 

exports.connectToDatabase = async () =>{
    try {
        await mongoose.connect(process.env.DB_connection)
        console.log('connected to database ')
    } catch (error) {
        console.log(error) ; 
    }
}