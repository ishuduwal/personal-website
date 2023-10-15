import * as api from '../api/Contact';

export const Contact = async (contactData) => {
    try {
        const { data } = await api.sendContact(contactData);
        return data
    } catch (error) {
        console.log(error)
    }
}