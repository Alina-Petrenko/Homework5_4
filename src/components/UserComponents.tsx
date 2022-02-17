import { Card } from "react-bootstrap";
import { User } from "../models/User";

type UserProps = {
    user: User | null
};

const UserComponent = (props: UserProps) => {
    return (
        <Card style={{ width: '18rem' }}>
            <h4>Single</h4>
            <Card.Img variant="top" src={props.user?.data.avatar} />
            <Card.Body>
                <Card.Title>
                    Avatar
                    <p>Id: {props.user?.data.id}</p>
                    <p>Name: {props.user?.data.first_name} {props.user?.data.last_name}</p>
                    <p>Email: {props.user?.data.email}</p></Card.Title>
            </Card.Body>
        </Card>
    );
}

export default UserComponent 