import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/form/Input";
import SubmitBtn from "../../components/form/SubmitBtn";

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
        <Input label='Name:' value={name} onChangeHandler={event => setName(event.target.value)}/>
        <Input label='Code:' value={code} onChangeHandler={event => setCode(event.target.value)}/>
        <SubmitBtn value='Submit'/>
        <Link className='text-sky-400 underline text-center' to='/'>Go back</Link>
      </form>
    </div>
  )
}