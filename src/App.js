import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import LocalStorageData from './components/LocalStorageData';



const App = () => {
	const [notes, setNotes] = useState(LocalStorageData());     //get notes from LocalStorage.

	const [searchText, setSearchText] = useState('');  //this variable contain search input from user.

	const [darkMode, setDarkMode] = useState(false);   //this variable contain boolean value to control the page "dark mode" style.


	useEffect(() => {   //this function update local storage after add a note.
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);


	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};
		debugger
	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText) || note.text.toUpperCase().includes(searchText) //check upper abd lower case.
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;
