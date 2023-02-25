import { createContext, useState } from 'react';
import { useQuery, gql } from '@apollo/client';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const first = 50;
    const [location, setLocation] = useState('location:angola');
    const [currentCountry, setCurrentCountry] = useState('angola');
    const [searchValue, setSearchValue] = useState('');
    const [username, setUsername] = useState('null');

    const GET_USER = gql`query ($first: Int!, $location: String!, $endCursor: String) {
    search(query: $location, type: USER, first: $first, after: $endCursor) {
      userCount
      edges {
        cursor
        node {
          ... on User {
            login
            name
            avatarUrl
            followers {
              totalCount
            }

            repositories {
              totalCount
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }`

    const { loading, data, fetchMore } = useQuery(GET_USER, {
        variables: { first, location },
    });

    const fetchData = () => {
        const { endCursor } = data.search.pageInfo;
        fetchMore({
            variables: { endCursor: endCursor },
        });
    };

    return (
        <AppContext.Provider
            value={{
                loading,
                data,
                setLocation,
                fetchData,
                currentCountry,
                setCurrentCountry,
                searchValue,
                setSearchValue,
                username,
                setUsername
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
