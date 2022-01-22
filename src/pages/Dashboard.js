import { useNavigate } from "react-router-dom"

export default function Dashboard() {
    const navigate= useNavigate();
    const handleclick = ()=>{
        navigate("/")
    }
  return (
    <div>
        <h1>Dashboard</h1>
        <button onClick={handleclick}>
            Logout
        </button>
    </div>
  )
}
