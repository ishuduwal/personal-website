import Contact from '../model/Contact.js'; 

export const GetContact = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const CreateContact = async (req, res) => {
    const { name, email, message } = req.body;
    
    try {
        const newContact = new Contact({
            name,
            email,
            message
        });

        await newContact.save();
        res.status(201).json({ message: "message sent" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

