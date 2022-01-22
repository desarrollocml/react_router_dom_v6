import { useParams } from "react-router-dom";

export default function UserPage() {
  //const params = useParams();
  const {Id} = useParams();
  return (
    <>
      {/* <h1>User {params.Id}</h1> */}
      <h1>User {Id}</h1>
    </>
  );
}
