Class NotesApplication { // The class itself
 /**
  * constructor that takes author as a parameter
  * this constructor saves the author parameter as an instance variable
  * it has a notes list/array to store all the notes as an instance property
  */ 
 
 constructor authorTaker(author){
	this.authorCaptured = author
	notes = []
	}
	
	/**
	 * Take the note content as the parameter and 
	 * add it to the notes list object
	 */
	function create(note_content){
		notes.push(note_content)
		return notes
	}
	/**
	 * the content of the notes list this way:
	 * Note ID:[note_id]
	 * [NOTE_CONTENT]
	 *
	 * By Author[author]
	 */
	
	listNotes(){
		// How to do that, coming up.
	}
	/**
	*note_id is the index of the note in the notes list
	*return the content of that note as a string
	*/
	function get(note_id){
		
	}
		
	
	/**
	 * take search_text
	 * result for serch-text
	 * Note id: [note_id]
	 * [NOTE_CONTENT]
	 * By Author[author]
	 */
	function search(search_text) {
		
	}
	
	/**
	*delete the note
	*/
	function delete(note_id){
		
	}
	/**
	 *  replace content in note at note_id with new_note
	 */
	function edit(note_id, new_content) {
	}
 }