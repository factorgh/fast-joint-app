import { Link } from "react-router-dom"


// eslint-disable-next-line react/prop-types
export default function Button({children,to}) {
  return (
    <div>
      <Link to={to}>
        <button className=' inline-block rounded-full
        hover:bg-gray-200 hover:text-stone-500 bg-yellow-200 p-4 focus:ring 
      tracking-wide mt-5
      text-stone-900
      focus:bg-yellow-50
      font-semibold
      focus:outline-none
       focus:ring-yellow-200
       focus:ring-offset-2'>{children}</button> 
      </Link>
          
    </div>
  )
}
