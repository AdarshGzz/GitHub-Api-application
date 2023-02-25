import { useState, useRef, useContext } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { AppContext } from '../pages/Context';
import { countryList } from '../pages/helpers';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


const SelectCountry = () => {



  const { setLocation, currentCountry, setCurrentCountry } =
    useContext(AppContext);
  const [option, setOption] = useState(false);
  const [countries, setCountries] = useState(countryList);
  const inputRef = useRef(null);
  // const [select,setSelect] = useState('null')
   
  // console.log("select :"+ select)
  

  const currentCountryHandler = (val) => {
    setOption(val)
    setCurrentCountry(val);
    setLocation(`location:${val.toLowerCase()}`);
  };
  


  return (
    <div className=' flex items-center pr-4 relative w-48 rounded'>
      {/* <DropdownButton
        alignRight
        ref={inputRef}
        title={`${option==false?'Select Country':option}`}
        id="dropdown-menu-align-right"
        onSelect={currentCountryHandler}
      >
        {countries.map((country) => (
          <Dropdown.Item className='' value={`${country}`} eventKey={`${country}`}>{country}</Dropdown.Item>
        ))}
      </DropdownButton> */}
      <select className='text-white font-bold pl-2 focus:outline-none bg-[#4fa338] h-10 w-[10rem]' onChange={(e) => currentCountryHandler(e.target.value)}>
        {countries.map((country) => (
          <option className='text-black' value={`${country}`} key={`${country}`}>{country}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectCountry;
