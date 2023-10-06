import { UserList } from "../components"
import { useDatabaseUserPageViewModel } from "../viewAppModel/useDatabaseUserPageViewModel"

const DatabaseUserPage = () => {
    const {dataBaseUsers, handleNavigateButtonClick} = useDatabaseUserPageViewModel()

    return(
        <div>
            <h1 className="text-4xl text-center">Users saved in the database</h1>
            <div className="w-full flex justify-end">
                <button onClick={handleNavigateButtonClick} className="bg-green-700 p-4 rounded-md mr-4">Go to Home</button>
            </div>
            <UserList users={dataBaseUsers} flag={true} handleButtonClick={() => {}}/>
        </div>
    )
}

export default DatabaseUserPage