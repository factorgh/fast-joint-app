
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Header() {
    const username = useSelector((state)=> state.user.username);
    console.log(username);
  return (
    <div className='text-xl flex justify-between text-center text-slate-800 font-semibold  sm:text-center bg-yellow-200 p-4  mb-5'>
          <Link to="/">
              <h1 className='uppercase font-bold text-stone-800'>fast-recipe-joint</h1>
          </Link>
          <div>
              <h3 className='text-sm font-semibold text-slate-800  lowercase'>
                  {username}
              </h3>
        </div>
    </div>
  )
}
