const fs = require('fs')

var fetchNotes = () => {
	try {
		var notesString = fs.readFileSync('notes-data.json')
		return JSON.parse(notesString)
	}catch(e){
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes))
};

var addNote = (title, body) => {
	var notes = fetchNotes()
	var note = {
		title,
		body
	}

	var duplicateNotes = notes.filter((note) => {
		return note.title === title
	})

	if (duplicateNotes.length === 0){
		notes.push(note)
		saveNotes(notes)
		return note
	}
};

var getAll = () => {
	return fetchNotes();
}

var readNote = (title) => {
	var notes = fetchNotes()
	var result = notes.filter((note) => {
		return title === note.title
	})
	return result[0]
}

var remove = (title) =>{
	var notes = fetchNotes()
	var result = notes.filter((note) => {
		return title !== note.title
	})
	saveNotes(result)

	return notes.length !== result.length
}

var logNote = (note) => {
	// Break on this line and use repl to output note
	debugger;
	console.log('--');
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`)
}

module.exports = {
	addNote,
	getAll,
	readNote,
	remove,
	logNote
}
