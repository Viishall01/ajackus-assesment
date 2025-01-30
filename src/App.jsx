import { useEffect, useState } from "react"
import UserTile from "./components/UserTile";
import AddUser from "./components/AddUser";


function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

  // fetching data from api
  const fetchData = async () => {
    try{
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json(); 
      setUsers(data);
    }catch(error){
      console.log("Error in Fetching data", error);
    }
  };


  // adding user 
  const addUser = async (name, email) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({ name, email }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      if (res.status === 201) {
        const data = await res.json();
        setUsers([...users, data]);
      }
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className="flex justify-evenly relative">

      <div className="fixed left-9 items-center">
        <AddUser onAdd={addUser} />
      </div>

      <div className="overflow-y-scroll">
        {users.map((user) => (
          <UserTile key={user.id} id={user.id} name={user.name} email={user.email}/>
        ))}
      </div>
    </div>
  )
}

export default App
