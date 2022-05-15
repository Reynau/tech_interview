import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

import Table from "../components/table/Table";

import './Home.module.css'

export default function Home() {
  const navigate = useNavigate()
  const [countries, setCountries] = useState(null)

  useEffect(() => {
    axios
      .get(`http://localhost:4000/countries/`)
      .then(response => setCountries(response.data))
  }, [])

  const createCountry = () => {
    navigate('create')
  }

  const modifyCountry = (code) => {
    navigate(`/modify/${code}`)
  }

  const deleteCountry = (code) => {
    axios.delete(`http://localhost:4000/countries/${code}`)
      .then(() => axios.get(`http://localhost:4000/countries/`))
      .then(response => setCountries(response))
      .catch(error => console.log(error))
  }

  return (
    <div>
      { countries &&
        <div>
          <div className='createBtn' onClick={createCountry}>Create</div>
          <Table countries={countries} deleteHandler={deleteCountry} modifyHandler={modifyCountry} />
        </div>
      }
    </div>
  )
}