import { UserProfile } from "../components/UserProfile/UserProfile"
import { useUserPageViewModel } from "../viewAppModel/useUserPageViewModel"


const UserPage = () => {
  const {userData, handleSaveUser, handleNavigateButtonClick} = useUserPageViewModel()
  return (
    <div className="text-center">
      <div className="w-full flex justify-end">
        <button onClick={handleNavigateButtonClick} className="bg-green-700 p-4 rounded-md mr-4 mt-4">Go to Home</button>
      </div>
      <UserProfile userData={userData}/>
      <button onClick={() => handleSaveUser(userData)} className="bg-green-600 p-4 rounded-md my-4">Save user to Database</button>
    </div>
  )
}

export default UserPage