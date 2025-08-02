import { useState } from "react";
import TextInput from "./Inputs/TextInput";
import SelectInput from "./Inputs/SelectInput";
import TextAreaInput from "./Inputs/TextAreaInput";

const NoteForm = ({ notes, setNotes }) => {
    const [formData, setFormData] = useState({
        title: "",
        category: "Work",
        priority: "Medium",
        description: "",
    });

    const [isExpanded, setExpanded] = useState(false);

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (!formData.title || !formData.description) return;

        const newNote = {
            id: Date.now(),
            ...formData,
        };

        setNotes([newNote, ...notes]);

        setFormData({
            title: "",
            category: "Work",
            priority: "Medium",
            description: "",
        });
    };

    return (
        <>
            <button
                className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg hover:bg-purple-200 hover: border-purple-300 transition mb-4 cursor-pointer"
                onClick={() => setExpanded(!isExpanded)}>
                {isExpanded ? "Collapse form" : "Expand form"}
            </button>
            {isExpanded && (
                <form className="mb-6" onSubmit={handleSubmit}>
                    <TextInput
                        label="Title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required={true}
                    />
                    <SelectInput
                        label="Priority"
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        required={true}
                        options={[
                            { value: "High", label: "High" },
                            { value: "Medium", label: "Medium" },
                            { value: "Low", label: "Low" },
                        ]}
                    />
                    <SelectInput
                        label="Category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required={true}
                        options={[
                            { value: "Work", label: "Work" },
                            { value: "Personal", label: "Personal" },
                            { value: "Ideas", label: "Ideas" },
                        ]}
                    />
                    <TextAreaInput
                        label="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required={true}
                    />
                    <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">
                        Add Note
                    </button>
                </form>
            )}
        </>
    );
};

export default NoteForm;
