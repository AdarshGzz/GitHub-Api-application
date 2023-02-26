import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';
import User from './User';

import { AppContext } from '../pages/Context';
import { useContext } from 'react';

interface UserListProps {
  data: any;
  fetchData: any;
}

interface AppContextType {
  first: string;
  setFirst: (value: string) => void;
}



const UserList: React.FC<UserListProps> = ({ data, fetchData }) => {

  const { first,setFirst } = useContext(AppContext);


  const handleLoadMore = () =>{
    if(data){
      if (data.search.userCount > first + 20) {
        setFirst(first + 20)
      }
    }
  }


  return (
    <InfiniteScroll
      className='grid grid-cols-3 gap-10 p-4 w-full'
      dataLength={data ? data.search.edges.length : 0}
      next={fetchData}
      hasMore={data ? data.search.pageInfo.hasNextPage : false}
      loader={<h4>Loading...</h4>}
    >
      {data ? (
        data.search.edges.map((user: any, index: number) => <User key={index} user={user} />)
      ) : (
        <h1>No results!</h1>
      )}
 
      <button className='h-9 w-40 flex justify-center items-center align-middle rounded-md bg-[#4fa338]'  onClick={handleLoadMore}>
        loadMore
      </button>

    </InfiniteScroll>
  );
};

export default UserList;
