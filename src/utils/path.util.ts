/**
 * This file is my personal note for now.
 * It will be converted into
 * proper util once needed.
 */

import path from 'path';

// Available on CommonJS module (current)
// __filename
// __dirname
console.log(__filename);
console.log(__dirname);

// Workaround for ESModule
// import url from 'url';
// import path from 'path;
// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename); // 

const filePath = './folder/test.txt';

// file base name
// basename()
console.log(path.basename(__filename));

// directory name
// dirname()
console.log(path.dirname(filePath));

// extension name
// extname() 
console.log(path.extname(filePath));

// returns an object
// parse()
console.log(path.parse(filePath));

// Joins path
// join()
const joinedPath = path.join(__dirname, 'deep', 'deeper', 'deepest', 'kraken-slumbers.ts');
console.log(joinedPath);
