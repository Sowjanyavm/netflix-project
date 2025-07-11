import { useState } from 'react';
import Header from './Header';
const Login = () => {
  const [isSignInForm, setIssignInForm] = useState(true);

  const toggleSignIn = () => {
    setIssignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs'
          alt='background'
        />
      </div>

      <form className='w-3/12 absolute p-12 bg-black/80  text-white my-24 mx-auto right-0 left-0 bg-opacity-70'>
        <h2 className='font-bold text-xl py-2'>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h2>
        {!isSignInForm && (
          <input
            type='text'
            placeholder='Full Name'
            className='p-4 my-4 bg-gray-700'
          />
        )}
        <input
          type='text'
          placeholder='Email address'
          className='p-4 my-4 bg-gray-700'
        />
        <input
          type='password'
          placeholder='Password'
          className='p-4 my-4 bg-gray-700'
        />
        <button className='p-2 m-1 bg-red-700 text-white  w-30'>
          {' '}
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className='p-4 cursor-pointer' onClick={toggleSignIn}>
          {' '}
          {isSignInForm
            ? 'New to netflix? sign up now'
            : 'Already a user please sign in'}
        </p>
      </form>
    </div>
  );
};

export default Login;
