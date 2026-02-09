import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  console.log(err);

  return (
    <div>
      <h1>Oops 😵</h1>
      <p>{err.status} : {err.statusText}</p>
      <p>{err.data}</p>
    </div>
  );
}

export default Error