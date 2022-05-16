export default function SubmitBtn({ className = '', value }) {
  return <input className={`px-5 py-2 border cursor-pointer hover:shadow ${className}`} type="submit" value={value}/>
}