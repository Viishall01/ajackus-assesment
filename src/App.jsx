import { useEffect, useState } from "react"
import UserTile from "./components/UserTile";
import AddUser from "./components/AddUser";
import EditUserModal from "./components/EditUserModel";


function App() {
  const [users, setUsers] = useState([]);
  const [updatedUsers, setUpdatedUsers] = useState(null);

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

  // Updating User data
  
  const onEdit = (user) => {
    setUpdatedUsers(user);
  };

  const onSaveEdit = async (id, updatedUser) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });

      if (res.status === 200) {
        setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
        setUpdatedUsers(null);
      }
    } catch (err) {
      console.error(err);
    }
  }; 

  // deleting data 
  const onDelete = async (id) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "DELETE",
      });

      if (res.status === 200) {
        setUsers(users.filter((user) => user.id !== id));
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
          <UserTile key={user.id} id={user.id} name={user.name} email={user.email} onEdit={onEdit} onDelete={onDelete}/>
        ))}
      </div>

      {updatedUsers && <EditUserModal user={updatedUsers} onSave={onSaveEdit} onClose={() => setUpdatedUsers(null)} />}
    </div>
  )
}

export default App
