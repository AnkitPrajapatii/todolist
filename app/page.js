"use client"
import React, { useState } from 'react'


const page = () => {

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [maintask, setMainTask] = useState([])

  const submithandler = (e) => {
    e.preventDefault()
    setMainTask([...maintask, { title, desc }])

    setTitle("")
    setDesc("")
  }

  const deleteHandler =(i ) => {
    let copytask = [...maintask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }


  let renderTask = <h2>No task available</h2>

  if (maintask.length > 0) {
    renderTask = maintask.map((t, i) => {
      return <li  key={i} className='flex items-center justify-between mb-8'>
        <div className='flex justify-between mb-5 w-2/3 items-center'>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text-lg font-medium' >{t.desc}</h6>
        </div>
        <button onClick={()=>{
          deleteHandler(i)
        }} className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
      </li>
    })
  }

  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Ankit's Todo List</h1>
      <form onSubmit={submithandler}>
        <input type='text' className='text-2xl text-black border-zinc-800 border-4 m-8 px-4 py-2' placeholder='Enter task here' value={title} onChange={(e) => {
          setTitle(e.target.value)
        }} />
        <input type='text' className='text-2xl text-black border-zinc-800 border-4 m-8 px-4 py-2' placeholder='Enter discription here' value={desc} onChange={(e) => {
          setDesc(e.target.value)
        }} />
        <button className='bg-white text-black px-4 py-3 text-2xl font-bold rounded m-5'>Add Task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-800'>
        <ul>{renderTask}</ul>
      </div>


    </>
  )
}

export default page
