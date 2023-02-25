import Input from './Input';
import SelectCountry from './SelectCountry';

const SearchField = () => {
  return (
    <div className='flex flex-row justify-center h-[5rem]  rounded-md w-[40rem] border bg-slate-800'>
      <div className='flex flex-row justify-center align-middle'>
        <Input />
        <SelectCountry />
      </div>
    </div>
  );
};

export default SearchField;
