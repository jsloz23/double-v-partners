import {useEffect, useState} from "react"
import {  useNavigate, useParams } from "react-router-dom";
import { api } from "../utils/api";

export interface userDataProps {
      id: number;
      bio: string;
      company: string;
      followers: number;
      followers_url: string;
      login: string;
      avatar_url: string;
  }

export function useUserPageViewModel() {
    const {login} = useParams();
    const {fetchOneUser, saveUserToDb} = api();
    const [userData, setUserData] = useState<userDataProps | undefined>()
    const navigate = useNavigate();

    const handleSaveUser = (userData: userDataProps) => {
        const extractedData = {
            userId: userData.id,
            login: userData?.login,
            company:userData?.company,
            bio: userData?.bio,
            followers: userData?.followers,
            avatar_url: userData?.avatar_url

        }
        const result = saveUserToDb(extractedData)
        alert("User has been saved to the database");
    }

    const handleOneUserFetch = async () => {
        if(login){
            const result = await fetchOneUser(login)
            setUserData(result?.data)
        }
    };

    useEffect(() => {
        if(login){
            handleOneUserFetch()
        }
    }, [login])

    const handleNavigateButtonClick = () => {
        navigate(`/`);
    };
    
    return {userData, handleSaveUser, handleNavigateButtonClick}
}