import { useRouteError } from "react-router";

const Error = () => {
const err = useRouteError();
console.log(err);
    return (
        <div>
            <h1>Oops, something went wrong!</h1>
            <p>The page you are looking for does not exist.</p>
            <p>{err.status}: {err.statusText}</p>
        </div>
    )
}

export default Error;