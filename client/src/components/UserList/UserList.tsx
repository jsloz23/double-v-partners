import { StyledButton, UserAvatar, UserCard, UserListContainer, Username } from "./UserList.styles"
import {FC} from "react"

interface UserListProps {
    users: {
      id: number; 
      avatar_url: string; 
      login: string; 
    }[];
    handleButtonClick: (login: string) => void
    flag?: boolean
  }
  

export const UserList: FC<UserListProps> = ({users, handleButtonClick, flag}) => {

  return (
    <>
    
    {users.length !== 0 ? 
    <UserListContainer>
      {users.map((user) => (
        <UserCard key={user.id}>
          <UserAvatar src={user.avatar_url} alt={`Avatar for ${user.login}`} />
          <div className="flex flex-row justify-between w-full">
          <Username>USERNAME: {user.login}</Username>
          <div className="items-center">
            <p className="p-2 bg-gray-700 w-full h-full border-2">ID: {user.id}</p>
          </div>
          {!flag && <StyledButton onClick={() => handleButtonClick(user.login)}>See user details</StyledButton>}
          </div>
        </UserCard>
      ))}
      </UserListContainer>
    : 
    <div className="mt-8 w-full">
      <h2 className="text-4xl my-4 text-center">
        {flag ? `Ups! Looks like there are no users saved in the database` :`Looks like you haven't searched for users.`}
      </h2>
      <h2 className="text-4xl my-4">
        {!flag && `Use the Search Bar so I can show you some really cool people!`}
      </h2>
    </div>
      
    }
      
    
    </>
  );
}

