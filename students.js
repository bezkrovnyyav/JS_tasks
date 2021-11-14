import randomstring from 'randomstring';
import { Chance } from 'chance';
import fs from 'fs';


function genData(obj) {
    function genName() {
        return new Chance().first({
            charset: 'abcdefghijklmnopqrstuvwxyz'
        });
    }

    function genLast() {
        let last = randomstring.generate({
            length: 5,
            charset: 'abcdefghijklmnopqrstuvwxyz',
            capitalization: 'lowercase'
        });
        return last.charAt(0).toUpperCase() + last.slice(1);
    }

    function genRate() {
        return Math.floor((Math.random() * 100));
    }

    if (obj) {
        obj.name = genName();
        obj.surname = genLast();
        obj.rate = genRate();
    }
    return obj;
}

function createFile(path, jsn) {
    try {
        fs.writeFileSync(path, jsn);
        console.log('File is created');
        return jsn;
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log('File is NOT exist!');
        }
        console.log('Write file error');
    }
}

function readFile(path, encdng) {
    let data;
    try {
        data = fs.readFileSync(path, encdng);
        console.log('File is read!');
        return JSON.parse(data);
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log('File is NOT exist!');
        }
        console.log('Read file error');
    }
}

function appendFile(path, jsn) {
    try {
        if (fs.readFileSync(path, 'utf-8').length > 70) {
            let longJsn = fs.readFileSync(path, 'utf-8');
            let result = longJsn.substring(longJsn.indexOf("}") + 1, longJsn.length);
            console.log('File is rewriten!');
            fs.writeFileSync(path, '');
            fs.appendFileSync(path, result);
            return result;

        } else {
            fs.appendFileSync(path, jsn);
            console.log('File is appended!');
            return jsn;
        }

    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log('File is NOT exist!');
        }
        console.log('Error overwriting file');
    }
}

function deleteFile(path) {
    try {
        fs.unlinkSync(path);
        console.log('File is deleted!');
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log('File is NOT exist!');
        }
        console.log('Delete file error.');
    }
}

let student = {};
genData(student);
let jsnStr = JSON.stringify(student);
console.log(`Generated object at the first: ${jsnStr} \n`);
const filePath = 'studentFile.json';
console.log(`JSON file is created: ${createFile(filePath, jsnStr)} \n`);
let objFromFile = readFile(filePath, 'utf-8');
console.log(`Data of file: ${JSON.stringify(objFromFile)} \n`);
let jsnStr2 = genData(objFromFile);
console.log(`Chang JSON file: ${appendFile(filePath, JSON.stringify(jsnStr2))} \n`);
// deleteFile(filePath); // You can delete the created file via this code