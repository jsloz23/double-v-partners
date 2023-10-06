import { SearchBar, UserList } from "../components"
import { useAppViewModel } from "../viewAppModel/useAppViewModel"




const Home = () => {
  const {handleSearchTermSubmit, handleSearchTermChange, users, handleButtonClick, handleButtonClickDataBase} = useAppViewModel()

  return (
    <div className='text-center h-screen'>
      <div className="flex flex-row w-full justify-evenly py-4">
        <h1 className='text-4xl p-4'>Listing of Github Users</h1>
        <button onClick={handleButtonClickDataBase} className="p-2 rounded-md bg-green-700">Go to users saved in the database</button>
      </div>
      <SearchBar onSubmit={handleSearchTermSubmit} onChange={handleSearchTermChange}/>
      <UserList users={users} handleButtonClick={handleButtonClick}/> 
      </div>
  )
}

export default Home