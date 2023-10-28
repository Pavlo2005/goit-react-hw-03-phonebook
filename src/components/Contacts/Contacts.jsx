import { ContactsCard } from "components/ContactsCard/ContactsCard";
import { ContactElement } from "./Contacts.styled";

export const Contacts = ({ contacts, onDelete, filter, onChange }) => {

    return (
        <div>
            <h2>Contacts</h2>

            <h3>Find contacts by name</h3>
            <input type="text" onChange={evt => onChange(evt.target.value)} />

            <ul>
                {contacts.map(contact => (
                    <ContactElement key={contact.id}>
                        <ContactsCard contact={contact} onDelete={onDelete}></ContactsCard>
                    </ContactElement>
                ))}
            </ul>
        </div>
    );

}