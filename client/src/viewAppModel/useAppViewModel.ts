import {useState} from "react"
import { api } from "../utils/api"
import { useNavigate } from 'react-router-dom';

export function useAppViewModel() {
  const {fetchUsers} = api()
  const [searchTerm, setSearchTerm] = useState("")
  const [users, setUsers] = useState<[] | undefined>([])
  const navigate = useNavigate();
  
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSearchTermSubmit = async (event) => {
    event.preventDefault();
    // Minimum 4 characters validation
    if (searchTerm.length < 4) {
      alert("Search text must be at least 4 characters long.");
      return;
    }

    // Disallow "doublevpartners" validation
    if (searchTerm === "doublevpartners") {
      alert("You cannot search for 'doublevpartners'.");
      return;
    }

    const result = await fetchUsers(searchTerm)
    setUsers(result?.data?.items)
  };

  const handleButtonClick = (login: string) => {
    navigate(`/user/${login}`);
  };

  const handleButtonClickDataBase = () => {
    navigate(`/dbusers`);
  }

  return {
    handleSearchTermChange,
    handleSearchTermSubmit,
    fetchUsers,
    handleButtonClick,
    handleButtonClickDataBase,
    searchTerm,
    users
  }

}