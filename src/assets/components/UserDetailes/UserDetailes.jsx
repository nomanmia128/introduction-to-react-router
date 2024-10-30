import { useLoaderData } from "react-router-dom";

const UserDetailes = () => {
    const user = useLoaderData();

    const {name, website} = user;
    return (
        <div>
            <h2>Detailes about user: {name}</h2>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetailes;