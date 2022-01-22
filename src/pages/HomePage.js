import React from "react";
import { Link } from "react-router-dom";
const userId = 10;

export default function HomePage() {
  return (
    <>
      <h1>Aplication</h1>
      <Link to={`/users/${userId}`}>usuario</Link>
      <br/>
      <Link to="/usuarios">usuarios</Link>
    </>
  );
}
