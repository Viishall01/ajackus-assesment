import React from "react";

const AddUser = ({ onAdd }) => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value,e.target.email.value);
    e.target.name.value = "";
    e.target.email.value = "";
}

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl w-96 mt-48">
      <form onSubmit={handleOnSubmit} className="flex flex-col justify-between items-center border border-black rounded-lg">
        <h3 className="text-xl font-bold text-gray-700 m-4">Add User</h3>
        <input placeholder="Name" name="name"  className="border border-gray-300 p-2 w-[18rem] rounded-lg focus:ring focus:ring-blue-300 mb-4"/>
        <input placeholder="Email" name="email" className="border border-gray-300 p-2 w-[18rem] rounded-lg focus:ring focus:ring-blue-300 mb-4" />
        <button onSubmit={handleOnSubmit} className="bg-green-500 text-white px-12 py-2 rounded-lg mr-2 hover:bg-green-600 transition mb-4">Add</button>
        <hr />
      </form>
    </div>
  );
};

export default AddUser;