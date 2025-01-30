import React from 'react'

const UserTile = ({id, name, email, onEdit, onDelete}) => {
  return (
    <div className='flex mb1 rounded-md max-w-96 justify-between items-center border border-black'>
        <div className='flex flex-col m-2 '>
            <h2><span className='p-2'>{id}</span>{name}</h2>
            <h3 className='text-blue-600 text-sm mx-5'>{email}</h3>
        </div>
        <div className='flex m-2 items-center gap-2'> 
            <button className=' px-2 cursor-pointer hover:scale-110 transition-all border border-gray-600 rounded-lg' onClick={() => onEdit({ id, name, email })}>Edit</button>
            <button className=' px-2 cursor-pointer hover:scale-110 transition-all border border-gray-600 rounded-lg' onClick={() => onDelete(id)}>Delete</button>
        </div>
    </div>
  )
}

export default UserTile