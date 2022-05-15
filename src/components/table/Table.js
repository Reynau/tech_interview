import { useState } from "react";

export default function Table({ className = '', countries, modifyHandler, deleteHandler }) {
  const [orderByName, setOrderByName] = useState(false)
  const [orderByCode, setOrderByCode] = useState(false)
  const [nameOrderInc, setNameOrderInc] = useState(true)
  const [codeOrderInc, setCodeOrderInc] = useState(true)

  const order = (a,b) => {
    if (orderByName) {
      if (nameOrderInc) return a.name.localeCompare(b.name)
      else return b.name.localeCompare(a.name)
    }
    else if (orderByCode) {
      if (codeOrderInc) return a.name.localeCompare(b.code)
      else return b.name.localeCompare(a.code)
    }
  }

  const changeOrderByName = () => {
    setCodeOrderInc(false)
    setOrderByCode(false)
    setOrderByName(true)
    setNameOrderInc(!nameOrderInc)
  }

  const changeOrderByCode = () => {
    setNameOrderInc(false)
    setOrderByName(false)
    setOrderByCode(true)
    setCodeOrderInc(!codeOrderInc)
  }

  const getNameCaret = () => {
    if (nameOrderInc) return 'caret_down.svg'
    else return 'caret_up.svg'
  }

  const getCodeCaret = () => {
    if (codeOrderInc) return 'caret_down.svg'
    else return 'caret_up.svg'
  }

  return (
    <table className={`text-left ${className}`}>
      <thead>
        <tr>
          <th onClick={changeOrderByName} className='pr-2 cursor-pointer'>Name{orderByName && <img className='inline-block' alt='' src={getNameCaret()}/>}</th>
          <th onClick={changeOrderByCode} className='pr-2 cursor-pointer min-w-[5em]'>Code{orderByCode && <img className='inline-block' alt='' src={getCodeCaret()}/>}</th>
          <th className='text-center' colSpan={2}>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
        countries.sort(order).map(country =>
          <tr key={country.code}>
            <td className='pr-2'>{country.name}</td>
            <td className='pr-2'>{country.code}</td>
            <td className='pr-2'><div onClick={() => modifyHandler(country.code)}><img className='border rounded hover:shadow p-1 cursor-pointer' src='edit.svg'/></div></td>
            <td><div onClick={() => deleteHandler(country.code)}><img className='border rounded hover:shadow p-1 cursor-pointer' src='delete.svg'/></div></td>
          </tr>
        )
      }
      </tbody>
    </table>
  )
}