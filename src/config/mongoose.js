'use strict';

import mongoose from 'mongoose'

const mongooseInit = () => {
  mongoose.connect('mongodb://localhost/authapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const database = mongoose.connection;

  database.on('error', console.error.bind(console, 'connection error'));
  database.once('open', () => {
    console.log('MongoDB Started');
    console.log(`DB ${database.name} in ${database.host}:${database.port}`);
  });
}

export default mongooseInit;
