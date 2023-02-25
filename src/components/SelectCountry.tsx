import { useState, useContext } from 'react';

import { AppContext } from '../pages/Context';
import { countryList } from '../pages/helpers';
import 'bootstrap/dist/css/bootstrap.min.css';



const SelectCountry = () => {


  const { setLocation, setCurrentCountry, popup } =
    useContext(AppContext);
  const [option, setOption] = useState(false);
  const [countries, setCountries] = useState(countryList);

  let selectStyle = ' text-white font-bold pl-2 focus:outline-none bg-[#4fa338] h-10 w-[10rem] z-[1] '
   if(popup===true){
     selectStyle = ' text-white font-bold pl-2 focus:outline-none bg-[#4fa338] h-10 w-[10rem] z-[-1] '
   }

  const currentCountryHandler = (val:any) => {
    setOption(val)
    setCurrentCountry(val);
    setLocation(`location:${val.toLowerCase()}`);
  };
  

  return (
    <div className=' flex items-center pr-4 relative w-48 rounded'>
      <select className={`${selectStyle}`} onChange={(e) => currentCountryHandler(e.target.value)}>
        {countries.map((country) => (
          <option className='text-black' value={`${country}`} key={`${country}`}>{country}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectCountry;
