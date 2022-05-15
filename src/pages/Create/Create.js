import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [code, setCode] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    axios
      .post(`http://localhost:4000/countries/`, {
        name: name,
        code: code
      })
      .then(() => navigate('/'))
      .catch(error => console.error(error))
  }

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <form className='text-left p-5 border shadow flex flex-col space-y-2' onSubmit={handleSubmit}>
        <div>
          <p>Name:</p>
          <input className='border p-2' type="text" value={name} onChange={event => setName(event.target.value)}/>
        </div>
        <div>
          <p>Code:</p>
          <input className='border p-2' type="text" value={code} onChange={event => setCode(event.target.value)}/>
        </div>
        <input className='px-5 py-2 border cursor-pointer hover:shadow' type="submit" value="Create"/>
        <Link className='text-sky-400 underline text-center' to='/'>Go back</Link>
      </form>
    </div>
  )
}