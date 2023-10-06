    import {useEffect, useState} from "react"
import { api } from "../utils/api"
import { useNavigate } from "react-router-dom";
export function useDatabaseUserPageViewModel() {
    const {getUsersFromDb} = api()
    const [dataBaseUsers, setDatabaseUsers] = useState([])
    const navigate = useNavigate();
    
    const handleDatabaseUsersFetch = async () => {
        const result = await getUsersFromDb()
        setDatabaseUsers(result)
    }
    useEffect(() => {
        handleDatabaseUsersFetch()
    }, [])

    const handleNavigateButtonClick = () => {
        navigate(`/`);
    };
    
    return {dataBaseUsers, handleNavigateButtonClick}
}