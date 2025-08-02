const NoteList = ({ notes, deleteNote }) => {
    if (notes.length === 0) {
        return (
            <p className="text-center text-gray-500">
                Your notes will appear here.
            </p>
        );
    }

    return (
        <div className="space-y-4">
            {notes.map(note => (
                <div
                    key={note.id}
                    className="p-4 bg-white rounded-lg shadow-md border-l-4">
                    <h2 className="text-large font-bold">
                        {note.title}
                    </h2>
                    <p className="text-sm text-gray-600">
                        <strong>Category: </strong> {note.category}
                    </p>
                    <p className="text-sm text-gray-600">
                        <strong>Priority: </strong> {note.priority}
                    </p>
                    <p className="mt-2">{note.description}</p>
                    <button
                        className="mt-3 text-red-500 cursor-pointer transition hover:text-red-700"
                        onClick={() => deleteNote(note.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default NoteList;
