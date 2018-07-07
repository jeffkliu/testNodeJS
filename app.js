const fs = require('fs');
const notes = require('./notes')
const _ = require('lodash')
const yargs = require('yargs')
const requiredTitle = {describe:'Title of note', demand: true, alias: 't'}
const argv = yargs
	.command('add', 'Add a new note', {
		title: requiredTitle,
		body: {
			describe: 'Body of note',
			demand: true,
			alias: 'b'
		}
	})
	.command('list', 'List all notes')
	.command('read', 'Read a specific note', {
		title: requiredTitle
	})
	.command('remove', 'Remove a specific note', {
		title: requiredTitle
	})
	.help()
	.argv;
var command = process.argv[2]

// console.log('Command: ', command)
// console.log('Yargs', argv)

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body)
	if (note===undefined){
		console.log('This is a duplicated note, ho')
	} else {
		console.log('Note added.')
		notes.logNote(note)
	}
} else if (command ==='list') {
	var allNotes = notes.getAll()
	console.log(`Printing ${allNotes.length} note(s).`)
	allNotes.map((note)=>
		notes.logNote(note)
	)
} else if(command ==='read') {
	var note = notes.readNote(argv.title)

	if(note.length == 0){
		console.log(`Note with title ${argv.title} doesn't exist`)
	} else {
		console.log('Note read.')
		notes.logNote(note)
	}
} else if(command === 'remove') {
	var removedNote = notes.remove(argv.title)
	var message = removedNote ? 'Note\'s been removed' : 'Note not found'

	console.log(message)
} else {
	console.log('Nothing to see here really')
}