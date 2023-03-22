const express = require('express');
const mongoose = require('mongoose');


const app = express();
const PORT = 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// schema
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String,
    age: Number
});

// model
const User = mongoose.model('User', userSchema);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

app.get('/', async (req, res) => {
    User.create({ name: 'John Cena', age: 20 }).then((user) => {
        console.log(user);
        res.json(user);
    }).catch((err) => {
        
        res.json(err);
    }
    );


});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
