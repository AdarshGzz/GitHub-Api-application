import { useContext } from 'react';
import { BiSearch } from 'react-icons/bi';
import { AppContext } from '../pages/Context';
const Input = () => {
  let typingTimer;
  const { setLocation, currentCountry, setSearchValue } =
    useContext(AppContext);

  const searchUsers = (e) => {
    clearTimeout(typingTimer);

    typingTimer = setTimeout(() => {
      setSearchValue(e.target.value);
      setLocation(`${e.target.value} location:${currentCountry}`);
    }, 600);
  };

  return (
    <div className='flex justify-center align-middle m-auto'>
      <input className='h-10 w-[15rem] text-white pl-5 rounded-md bg-gray-600 focus:outline-none pl-2' type='text' onChange={searchUsers} placeholder='Search' />
    </div>
  );
};

export default Input;
