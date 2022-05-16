import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Input from "../../components/form/Input";
import SubmitBtn from "../../components/form/SubmitBtn";

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
        <Input label='Name:' value={name} onChangeHandler={event => setName(event.target.value)}/>
        <Input label='Code:' value={code} onChangeHandler={event => setCode(event.target.value)}/>
        <SubmitBtn value='Submit'/>
        <Link className='text-sky-400 underline text-center' to='/'>Go back</Link>
      </form>
    </div>
  )
}