import React from "react";

const AddUser = ({ onAdd }) => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value,e.target.email.value);
    e.target.name.value = "";
    e.target.email.value = "";
}

  return (
    <div className="mt-60 min-w-sm items-center">
      <form onSubmit={handleOnSubmit} className="flex flex-col justify-between items-center border border-black rounded-lg">
        <h3 className="mt-6 bg-gray-200 w-full text-center mb-2">Add User</h3>
        <input placeholder="Name" name="name"  className="outline-none border border-red-500 m-2 "/>
        <input placeholder="Email" name="email" className="outline-none border border-red-500 m-2 " />
        <button onSubmit={handleOnSubmit} className="border border-slate-400 rounded-md m-2 px-5 mb-12 ">Add</button>
        <hr />
      </form>
    </div>
  );
};

export default AddUser;