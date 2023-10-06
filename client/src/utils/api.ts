import axios from 'axios';

export interface UsersResponse {
    data: {
      items: [];
  }
}

export function api() {
    const BASE_URL = 'https://api.github.com';

    // Function to fetch user data by username
    const fetchUsers = async (term: string) => {
        try {
            const response: UsersResponse = await axios.get(`${BASE_URL}/search/users?q=${term}&per_page=10`)
            return response
        } catch (error) {
            console.error('Error:', error); 
        }
    }

    // Function to fetch data from une user by username
    const fetchOneUser = async (term: string) => {
        try {
            const response = await axios.get(`${BASE_URL}/users/${term}`)    
            return response
        } catch (error) {
            console.error('Error:', error); 
        }
    }

    //Function for saving a user into the database
    const saveUserToDb = async (userData: {userId: number, name: string, company: string, bio: string, followers: number,  avatar_url: string}) => {
        try {
          const response = await axios.post(`http://localhost:4000/user`, userData);
          return response.data;
        } catch (error) {
          console.error('Error creating user:', error);
          throw error; // Rethrow the error to handle it at a higher level if needed
        }
    };

    //Function for getting the users in the database
    const getUsersFromDb = async () => {
        try {
          const response = await axios.get("http://localhost:4000/users");
          return response.data;
        } catch (error) {
          console.error("Error fetching users:", error);
          throw error; // Rethrow the error to handle it at a higher level if needed
        }
      };

    
    return {fetchUsers, fetchOneUser, saveUserToDb, getUsersFromDb}
}