import React from 'react'
import { AppContext } from '../pages/Context';
import { useContext, useState } from 'react';
import { useQuery, gql } from '@apollo/client';



const Repositories = () => {
    const { username, setUsername, setPopup } = useContext(AppContext);

    const GET_USER_DATA = gql`
            query($username:String!){
            user(login: $username) {
            avatarUrl
            bio
            email
            login
            name
            repositories(last: 10) {
            totalCount
            edges {
                node {
                name
                url
                }
            }
            }
        }
    }
    `
    const { error, loding, data } = useQuery(GET_USER_DATA, {
        variables: { username },
    });
    function syncking() {
        if (loding === undefined && error === undefined && data !== undefined) {
            console.log({ error, loding, data })
            const avatarUrl = data.user.avatarUrl
            const bio = data.user.bio
            const email = data.user.email
            const Username = data.user.login
            const name = data.user.name
            const RepoNo = data.user.repositories.totalCount
            const repositorys = data.user.repositories.edges

            return ({ avatarUrl, bio, email, Username, name, RepoNo, repositorys })
        }
    }
    const Data = syncking();

    const fields = ' font-bold text-lg '

    // const Map =()=> {for(let i = 0; i < Data?.repositorys.length; i++) {
    //     return (Data?.repositorys[i].node.name)
    // }}

    // const repo = Map()
    // console.log(repo)

    let repo = []
    for(let i = 0; i < Data?.repositorys.length;i++){
        repo.push(`(${Data?.repositorys[i].node.name})`)
    }

    let url = []
    for (let i = 0; i < Data?.repositorys.length; i++) {
        url.push(`(${Data?.repositorys[i].node.url})`)
    }

   





    return (
        <div className=" text-white reposit bg-[#161b22] h-[100vh] w-full fixed top-0 left-0 bottom-0 right-0 ">
            {Data === undefined
                ?
                <div>
                    <div className=' flex justify-center items-center align-middle mt-60'>

                        <div role="status">
                            <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>

                    </div>
                    <div onClick={() => setPopup(false)}>
                        X
                    </div>
                </div>

                :
                <div className="innerRepo p-3 flex ">
                    <div>
                        <div>
                            <div className='h-[30px] text-black bg-white w-[30px] rounded-[50%] flex justify-center items-center cursor-pointer ' onClick={() => setPopup(false)}>
                                X
                            </div>
                        </div>
                        <div className='border items-center rounded-md flex flex-col h-[40rem] w-[25rem] rounded-r-none'>
                            <div className=' p-2'>
                                <img className='border h-[20rem] w-[20rem] rounded-[50%] ' src={`${Data.avatarUrl}`} alt="" />
                            </div>
                            <div className='pt-10 flex flex-col gap-2 text-white '>

                                <div className=' rounded-md border h-10 w-[230px] flex flex-row text-center items-center overflow-hidden m-auto  '>
                                    <div className='h-10 w-10 bg-white  '>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="40px" height="40px">
                                            <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" /></svg>
                                    </div>
                                    <div className='pl-3'>
                                        <span>@</span>
                                        <span>{Data.Username}</span>
                                    </div>
                                </div>
                                <div className='pl-4'>
                                    <span className={`${fields}`}>Name: </span>
                                    <span>{Data.name}</span>
                                </div>
                                <div className='pl-4'>
                                    <span className={`${fields}`}>Email: </span>
                                    <span>{Data.email}</span>
                                </div>
                                <div className='pl-4'>
                                    <span className={`${fields}`}>Bio: </span>
                                    <span>{Data.bio}</span>
                                </div>
                                <div className='pl-4'>
                                    <span className={`${fields}`}>Repositories: </span>
                                    <span>{Data.RepoNo}</span>
                                </div>
                                <button className='items-center'>
                                    <a className='inline px-4 py-2 text-sm font-medium text-center no-underline  border border-gray-300 rounded-md hover:bg-white hover:text-black  focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 transition-all' href={`https://github.com/${Data.Username}`}>
                                        Visti Profile
                                    </a>
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className='border text-white h-[40rem] w-[70%] mt-[1.86rem] rounded-md rounded-l-none '>
                        <div className='font-bold text-4xl  p-4   '>
                            Repositories
                        </div>
                        
                        <div className=' text-white h-[34.5rem] w-[54.7rem] grid grid-cols-2 p-3 align-middle justify-center items-center'>
                            {repo.map((repo,i) => (
                            <div className='font-bold text-xl border items-center text-center flex justify-center rounded-md p-1 h-20  w-[90%]'>
                                {repo}
                            </div>
                            ))
                            }
                        </div>
                       
                    </div>
                    

                </div>
            }
        </div>
    )
}

export default Repositories
