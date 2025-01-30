import { useEffect, useState } from "react"
import UserTile from "./components/UserTile";


function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
    try{
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    }catch(error){
      console.log("Error in Fetching data", error);
    }
  };

  return (
    <div className="">
      <div >
        {users.map((user) => (
          <UserTile key={user.id} id={user.id} name={user.name} email={user.email}/>
        ))}
      </div>
    </div>
  )
}

export default App
