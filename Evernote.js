
class NotesApplication {
	 
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
		this.notes.push(note_content);
		return this.notes;
	}
	
	/**
	 * the content of the notes list this way:
	 * Note ID:[note_id]
	 * [NOTE_CONTENT]
	 *
	 * By Author[author]
	 */
	listNotes(){

		for (let i = 0; i < this.notes.length; i++){
			console.log("ID:", i );
			console.log(this.notes[i]);
			console.log("By Author", [this.authorCaptured]);
		}
	}
	
	/**
	 * note_id is the index of the note in the notes list
	 * return the content of that note as a string
	 */
	getNote(note_id){
		
		return String(this.notes[note_id]);
	}
		
	/**
	 * This function take a search string, search_text
	 * It returns all the notes with that text within it in the following format:
	 * Showing results for search ‘[<search_text>]’
	 * Note ID: [note_id]
	 * [NOTE_CONTENT]
	 * By Author [author]
	 */
	search(search_text){
		for (let i = 0; i < this.notes.length; i++){
			if(this.notes.includes(search_text)){
				console.log("Showing results for", "[ "+ "< " +search_text +" >" + " ]");
				console.log("Note ID: ", i );
				console.log(this.notes[i]);
				console.log("By Author", [this.authorCaptured]);
			}
		}
	}
	
	/**
	 * delete the note
	 */
	killer(note_id){
		for (let i = 0; i < this.notes.length; i++) { 
			delete this.notes[i];
			return (this.notes);
			}
}
	/**
	 *  replace content in note at note_id with new_note
	 */
	modifyNote(note_id, new_content) {
		
		this.notes[note_id] = new_content;
		return this.notes;
	}
 }
 
 // TESTS
 // let n = new NotesApplication("Femi");
 // n.create("Lorem");
 // n.create("Ipsum");
 // n.killer(0);
 // n.getNote(0);
 // n.listNotes();
 // n.search("Lorem");
 // n.modifyNote(1, "change");