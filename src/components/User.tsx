import { AppContext } from '../pages/Context';
import { useContext } from 'react'; 



const User = (props) => {
  const { setUsername,setPopup } = useContext(AppContext);
  

  const handleRepo=(val)=>{
    console.log(val)
    setUsername(val)
    setPopup(true)
  }

  const user = props.user.node;
  const githubUserUrlProfile = `https://github.com/${user.login}`;
  return (
    <div className='border rounded-md flex flex-col w-full max-w-sm  border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700'>
      <div className='flex flex-col align-middle p-4 items-center pb-10'>
        <div>
          <img className='w-[110px] h-[110px]  mb-3 rounded-full shadow-lg' src={user.avatarUrl} alt={user.name} />
        </div>
        <div className='user-info'>
          <div className='detail'>
            <div className='mb-1 text-sm font-bold text-gray-900 dark:text-white text-center'>
              <span>@</span>
              <span>{user.login}</span>
            </div>
          </div>
          <div className='detail'>
            <div className='text-xl text-center p-2 text-gray-500 dark:text-gray-400'>
              <span>{user.name}</span>
            </div>
          </div>
          <div className='flex justify-around gap-2'>
            <div className='detail'>
              <div className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600'>
                <span>Followers </span>
                <span className='pl-1'>{user.followers ? user.followers.totalCount : 0}</span>
              </div>
            </div>
            <button className='detail cursor-pointer' onClick={()=>handleRepo(user.login)} >
              <div className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#86a36e] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#4fa338] '>
                <span>Repositories </span>
                <span className='pl-1'>
                  {user.repositories ? user.repositories.totalCount : 0}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className='actions'>
        <a href={githubUserUrlProfile} className='inline items-center px-4 py-2 text-sm font-medium text-center no-underline  border border-gray-300 rounded-md hover:bg-white hover:text-black  focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 transition-all'>
          Vew profile
        </a>
      </div>
    </div>
  );
};

export default User;
