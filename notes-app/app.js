
// // const fs = require('fs');
// const yargs = require('yargs');

// // Task 1
// // Create and write a text to file
// //fs.writeFileSync('notes.txt','################ This is beginning ###############');

// // Challenge 1
// // Append a text to file
// //fs.appendFileSync('notes.txt','################ I am working on Challenge 1 ###############');
// // console.log(fs);


// // console.log(name);
// // const name = require('./utils.js');
// // const addFunction = require('./utils.js');
// // const sum = addFunction(2,21);
// // console.log(sum);

// // Challenge 2 : Create a new file and define a method getNotes

// const notesApp = require('./notes.js');
// const getNotes = notesApp();
// console.log(getNotes);
// // Using Validator.js from npm package
// // No ES 6
// const validator = require('validator');
// // ES6 Import Syntax not supported yet
// // import validator from 'validator';
// // console.log('Testing isEmail',validator.isEmail('pooja@gmail.com'));
// // console.log('Testing isURL',validator.isURL("www.npmjs.org"));

// // Using Chalk.js from npm
// const chalk = require('chalk');
// // console.log('Testing Chalk method of printing colored text',chalk.green.bgRed.bold.inverse('Success'));
// // console.log('Testing Chalk method of printing colored text',chalk.red.bgCyan.inverse('Failure'));
// // console.log('Testing Chalk method of printing colored text',chalk.blue.bgMagenta.inverse('Error'));

// // console.log(process.argv);
// // const command = process.argv[2];
// // if (command === 'add') {
// //     console.log('Adding Notes....');
// // } else if (command === 'remove') {
// //     console.log('Removing Notes...');
// // }
// // Using Yargs
// //yargs.version('1.1.0');
// // console.log(yargs.argv);

// // Create App for add , remove , read , list

// // 1. Add Command
// yargs.command({
//     command: 'add',
//     describe: 'Add a new note',
//     builder:{
//         title: {
//             describe:'Note Title',
//             demandOption:true,
//             typr:'string',
//         },
//         body: {
//             describe:'Note Body',
//             demandOption:true,
//             typr:'string',
//         }
//     },
//     handler: function (argv) {
//         console.log("Adding a new note to "+argv.title,argv.body);
//     }
// })

// // 2. Remove Command
// yargs.command({
//     command: 'remove',
//     describe: 'Remove a new note',
//     handler: function () {
//         console.log("Removing a new note");
//     }
// })

// // 3. Read Command
// yargs.command({
//     command: 'read',
//     describe: 'Read a new note',
//     handler: function () {
//         console.log("Read a new note");
//     }
// })

// // 4. List Command
// yargs.command({
//     command: 'list',
//     describe: 'List a new note',
//     handler: function () {
//         console.log("List a new note");
//     }
// })
// // console.log(yargs.argv);
// yargs.parse(); // Replacement for console.log(yargs.argv);

// CRUD API CREATION EXAMPLE
// const express = require('express')
// const app = express()
 
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
 
// app.listen(3000)