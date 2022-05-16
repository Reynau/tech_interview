
export default function Input({ className = '', label, value, onChangeHandler}) {
  return (
    <div className={className}>
      <p>{label}</p>
      <input className='border p-2' type="text" value={value} onChange={onChangeHandler}/>
    </div>
  )
}