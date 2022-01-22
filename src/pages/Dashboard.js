import { Link, Outlet, useNavigate } from "react-router-dom"

export default function Dashboard() {
    const navigate= useNavigate();
    const handleclick = ()=>{
        navigate("/")
    }
  return (
    <div>
        <h1>Dashboard</h1>
        <Outlet/>
        <Link to="welcome">Say Welcome</Link>
        <br></br>
        <Link to="goodbye">Say Goodbye</Link>
        <br/>
        <button onClick={handleclick}>
            Logout
        </button>
    </div>
  )
}
