import { Navigate, useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetailes = () => {
    const post = useLoaderData();
    const {postId} = useParams();
    const navigate = useNavigate();
    const {id, title, body} = post;

    console.log(postId);

    const handeGoBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h3>Post detailes about: {id}</h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handeGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetailes;