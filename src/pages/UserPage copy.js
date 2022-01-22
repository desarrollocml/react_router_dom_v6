import { useParams } from "react-router-dom";

export default function UserPage() {
  const params = useParams();
  return (
    <>
      <h1>User {params.Id}</h1>
    </>
  );
}
