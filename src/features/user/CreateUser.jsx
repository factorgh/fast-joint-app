import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();
  const navigate  = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;

    dispatch(updateName(username));
    navigate('/order/new')
  }

  return (
    <form onSubmit={handleSubmit} className='text-stone-800 font-semibold'>
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name ..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='w-72 mt-5 p-2 rounded-xl border
         focus:ring
         placeholder:text-slate-500
         focus:ring-yellow-200 focus:outline-none'
      />

      {username !== '' && (
        <Button to={"/order/new"}>
        <h3>Start ordering now</h3>
      </Button>
      )}
    </form>
  );
}

export default CreateUser;
