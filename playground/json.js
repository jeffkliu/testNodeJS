// var obj = {
// 	name: 'Jeff'
// };

// var stringObj = JSON.stringify(obj)

// console.log(obj)
// console.log(stringObj)

// var personString = '{"name": "Jeff", "age": 25}';
// var person = JSON.parse(personString);

// console.log(typeof personString)
// console.log(typeof person)

const fs = require('fs')

var originalNote = {
	title: 'Some title',
	body: 'Some body'
}

var originalNoteString = JSON.stringify(originalNote)

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json')

var note = JSON.parse(originalNoteString)

fs.writeFileSync('notes.json', originalNote)


console.log(typeof note)
console.log(note.title)