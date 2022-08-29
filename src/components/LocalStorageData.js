const localStorageName = 'react-notes-app-data'
function LocalStorageData() {
	const savedNotes = localStorage.getItem(localStorageName)
	if(savedNotes) {
		return JSON.parse(savedNotes)
	}
	return []
}

export default LocalStorageData