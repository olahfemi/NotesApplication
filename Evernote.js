Class NotesApplication {
	 
	 /**
	  * constructor that takes author as a parameter
	  * this constructor saves the author parameter as an instance variable
	  * it has a notes list/array to store all the notes as an instance property
	  */ 
	constructor(author){
		this.authorCaptured = author;
		this.notes = [];
		}
	
	/**
	 * Take the note content as the parameter and 
	 * add it to the notes list object
	 */
	create(note_content){
		notes.push(note_content);
		return notes;
	}
	
	/**
	 * the content of the notes list this way:
	 * Note ID:[note_id]
	 * [NOTE_CONTENT]
	 *
	 * By Author[author]
	 */
	listNotes(){

		for (i = 0; i < notes.length; i++){
			return ([["ID:", i], 
				notes[i]]
				"By Author " authorCaptured);
		}
	}
	
	/**
	 * note_id is the index of the note in the notes list
	 * return the content of that note as a string
	 */
	capture(note_id){
		
		return String(notes[note_id]);
	}
		
	/**
	 * take search_text
	 * result for serch-text
	 * Note id: [note_id]
	 * [NOTE_CONTENT]
	 * By Author[author]
	 */
	search(search_text){
		for (x = 0; x < search_text.length; x++);
		
			for (i = 0; i < notes.length; i++){
				if (search_text[x] === notes[i]){
							
						return "Yay!";
			}
		}
	}
	
	/**
	 * delete the note
	 */
	killer(note_id){
		for (i = 0; i < notes.length; i++) { 
			delete notes[i];
			return (notes);
			}
}
	/**
	 *  replace content in note at note_id with new_note
	 */
	function edit(note_id, new_content) {
		
		notes[note_id]
	}
 }