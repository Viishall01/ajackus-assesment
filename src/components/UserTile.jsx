import React from 'react'

const UserTile = ({id, name, email, onEdit, onDelete}) => {
  return (
    <div className='flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-2 border border-gray-200 w-full max-w-md'>
        <div className='flex flex-col '>
        <h2 className="text-lg font-semibold text-gray-800">
          <span className="text-gray-500 mr-2">#{id}</span> {name}
         </h2>
         <h3 className="text-blue-500 text-sm">{email}</h3>
        </div>
        <div className='flex gap-2'> 
            <button className='px-3 py-1 text-sm font-medium hover:scale-110 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-all' onClick={() => onEdit({ id, name, email })}>Edit</button>
            <button className='px-3 py-1 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition-all hover:scale-110' onClick={() => onDelete(id)}>Delete</button>
        </div>
    </div>
  )
}

export default UserTile



