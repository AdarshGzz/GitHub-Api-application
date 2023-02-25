import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';
import User from './User';

const UserList = ({ data, fetchData }) => {
  return (
    <InfiniteScroll
      className='grid grid-cols-3 gap-10 p-4 w-full'
      dataLength={data ? data.search.edges.length : 0}
      next={fetchData}
      hasMore={data ? data.search.pageInfo.hasNextPage : false}
    >
      {data ? (
        data.search.edges.map((user, index) => <User key={index} user={user} />)
      ) : (
        <h1>No results!</h1>
      )}

    </InfiniteScroll>
  );
};

export default UserList;
