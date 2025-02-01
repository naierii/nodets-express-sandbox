import 'source-map-support/register'; // Shows the location of the error in TS file instead of the compiled JS file

// Get current path
// console.log('__filename', __filename);
// console.log('__dirname', __dirname);
// console.log('process.cwd()', process.cwd());

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const PORT = process.env.PORT;
const app = express();

app.use(cors({
  origin: '*', // Get from somewhere else
}));
app.use(bodyParser.json());

app.use('/', () => {
  console.log('q');
});

app.listen(PORT);