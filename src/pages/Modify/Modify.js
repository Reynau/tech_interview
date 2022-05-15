import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Modify() {
  let params = useParams();
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [code, setCode] = useState('')

  useEffect(() => {
    axios.get(`http://localhost:4000/countries/${params.code}`)
      .then(response => {
        setName(response.data.name)
        setCode(response.data.code)
      })
  }, [params.code])

  const handleSubmit = (event) => {
    event.preventDefault()

    axios
      .put(`http://localhost:4000/countries/${code}`, {
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
        <input className='px-5 py-2 border cursor-pointer hover:shadow' type="submit" value="Save"/>
        <Link className='text-sky-400 underline text-center' to='/'>Go back</Link>
      </form>
    </div>
  )
}