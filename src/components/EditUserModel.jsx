import React, { useState } from "react";
import { motion } from "framer-motion";

const EditUserModal = ({ user, onSave, onClose }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSave = () => {
    onSave(user.id, { id: user.id, name, email });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-xl shadow-xl w-96"
      >
        <h2 className="text-xl font-bold text-gray-700 mb-4">Edit User</h2>
        <input
          className="border border-gray-300 p-2 w-full rounded-lg focus:ring focus:ring-blue-300"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <input
          className="border border-gray-300 p-2 w-full rounded-lg mt-3 focus:ring focus:ring-blue-300"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
        <div className="flex justify-end mt-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-600 transition" onClick={handleSave}>
            Save
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition" onClick={onClose}>
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default EditUserModal;
