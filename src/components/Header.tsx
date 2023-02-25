import CountriesData from './CountriesData';
import SearchField from './SearchField';

const Header = ({ setLocation, totalUsers }) => {
  return (
    <header className="p-5 rounded">
      <div className=' bg-[#0d1116] p-6 rounded-md border '>
        <div className=' m-5'>
          <h1 className=" font-serif text-left text-5xl text-white font-bold p-2">GitStalkers</h1>
          <p>Search developers around the world on GitHub</p>
          <SearchField />
        </div>
        <img src='img/undraw_version_control_re_mg66.svg' alt='' />
      </div>
      <div className='border rounded-md p-3 ml-[15rem] mt-5 h-[5rem] w-[60%]  '>
        <CountriesData />
      </div>
    </header>
  );
};

export default Header;
