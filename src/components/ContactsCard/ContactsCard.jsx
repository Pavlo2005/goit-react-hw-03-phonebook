import { Button, Container } from "./ContactsCard.styled";

export const ContactsCard = (
    { contact: {
        id,
        name,
        number
    }, onDelete }
) => {
    return (
        <Container>
            <p>{`${name}: ${number}`}</p>
            <Button onClick={() => onDelete(id)}>Delete</Button>
        </Container>
    );
}