import {FC} from "react"
import { BarChart } from ".."
import { userDataProps } from "../../viewAppModel/useUserPageViewModel"

interface UserProfileProps {
    userData?: userDataProps
}

export const UserProfile: FC<UserProfileProps> = ({userData}) => {
    return (
        <div className="text-center items-center px-4">
        <h1 className='text-4xl p-4'>Github Users</h1>
        <div className="w-full flex flex-col md:flex-row justify-center">
          <img src={userData?.avatar_url} alt={`Avatar for ${userData?.login}`} />
          <div className="items-center flex flex-col justify-between text-center">
            <p className="w-full h-full flex flex-col bg-gray-700"><strong className="bg-green-700">ID:</strong> {userData?.id}</p>
            <p className="w-full h-full flex flex-col bg-gray-700"><strong className="bg-green-700">Name:</strong> {userData?.login}</p>
            <p className="w-full h-full flex flex-col bg-gray-700"><strong className="bg-green-700">Company:</strong> {userData?.company}</p>
            <p className="w-full h-full flex flex-col bg-gray-700"><strong className="bg-green-700">Bio:</strong>{userData?.bio ? userData?.bio : `No data was provided`} </p>
            <p className="w-full h-full flex flex-col bg-gray-700"><strong className="bg-green-700">Followers:</strong> {userData?.followers}</p>
        </div>
        <div>
        {userData && <BarChart value={userData?.followers}/>}
        </div>
        </div>
       
      </div>
    )
}