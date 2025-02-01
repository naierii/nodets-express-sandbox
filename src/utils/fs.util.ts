// import fs from 'fs';
import fs from 'fs/promises';
import { rollDice } from './util';

const testFilePath = `${process.cwd()}/public/test.txt`;

// readFile () - callback
// fs.readFile(testFilePath, 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// readFileSync() - Synchronous version
// const data = fs.readFileSync(testFilePath, 'utf8');
// console.log(data);

// readFile() - Promise .then
// fs
//   .readFile(testFilePath, 'utf8')
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

// Export when needed
// Read file
const readFile = async () => {
  try {
    const data = await fs.readFile(testFilePath, 'utf8');
    console.log(data)
  } catch (error) {
    // I might throw a custom error here
    console.error(error);
  }
};

// Write file
const writeFile = async () => {
  try {
    await fs.writeFile(testFilePath, `Henlo! ${rollDice()}`);
    console.log('written file:', testFilePath);
  } catch (error) {
    console.error(error);
  }
}

// Append file
const appendFile = async () => {
  try {
    await fs.appendFile(testFilePath, `\nAppend success!!! ${rollDice()}`)
    console.log('Appended file: ', testFilePath);
  } catch (error) {
    console.error(error);
  }
}