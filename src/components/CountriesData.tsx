import { useContext } from 'react';
import { AppContext } from '../pages/Context';
interface Props {
  totalUsers: any;
}

const CountriesData: React.FC<Props> = ({ totalUsers }) => {
  const date = new Date();
  const { data } = useContext(AppContext);

  const title = ' font-bold text-xl p-2'
  const value = 'font-extrabold text-2xl '

  return (
    <div className='flex flex-row justify-between p-2'>
      <div>
        <span className={`${value}`}>{data ? data.search.userCount : 0}</span>
        <span className={`${title}`}>Users</span>
      </div>
      <div>
        <span className={`${value}`}>{date.getDate()}</span>
        <span className={`${title}`}>Day</span>
      </div>
      <div>
        <span className={`${value}`}>{date.getMonth() + 1}</span>
        <span className={`${title}`}>Month</span>
      </div>
      <div>
        <span className={`${value}`}>{date.getFullYear()}</span>
        <span className={`${title}`}>Year</span>
      </div>
    </div>
  );
};

export default CountriesData;
