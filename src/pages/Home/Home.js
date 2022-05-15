import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

import Table from "../../components/table/Table";

import './Home.module.css'

export default function Home() {
  const navigate = useNavigate()
  const [countries, setCountries] = useState(null)
  const [nameFilter, setNameFilter] = useState('')

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
      .then(response => setCountries(response.data))
      .catch(error => console.log(error))
  }

  const handleNameFilter = (event) => {
    event.preventDefault()

    setNameFilter(event.target.value)
  }

  const filterCountries = () => {
    if (!countries) return []

    const lowercaseNameFilter = nameFilter.toLowerCase()
    return countries.filter(country => country.name.toLowerCase().includes(lowercaseNameFilter)).sort((a,b) => a.name.localeCompare(b.name))
  }

  return (
    <div>
      <div className='max-w-xl mx-auto'>
        <h1 className='text-4xl font-bold m-5'>Countries</h1>
        <div className='cursor-pointer rounded border px-5 py-2 inline-block hover:shadow' onClick={createCountry}>Create a new country</div>
        <div className='m-5 p-5 shadow border shadow'>
          <div className='flex flex-col text-left'>
            <p>Search by name:</p>
            <input className='inline-block border p-2' onChange={handleNameFilter} type="text"/>
          </div>
          <Table className='mx-auto my-5' countries={filterCountries()} deleteHandler={deleteCountry} modifyHandler={modifyCountry} />
        </div>
      </div>
    </div>
  )
}