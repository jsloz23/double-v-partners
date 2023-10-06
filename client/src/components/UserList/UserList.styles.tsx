import tw from "twin.macro";
import styled from "styled-components";

// Styled component for the UserList container
export const UserListContainer = styled.div`
  /* Add your container styles here */
  ${tw`p-4 grid grid-cols-1 md:(grid-cols-5) `}
`;

// Styled component for the User Card
export const UserCard = styled.div`
  /* Add styles for the user card, e.g., background color, padding, border, etc. */
  ${tw`py-4 md:(mx-2)`}
`;

// Styled component for the user avatar
export const UserAvatar = styled.img`
  /* Add styles for the user avatar, e.g., width, height, border-radius, etc. */
  ${tw`w-full`}
`;

// Styled component for the username
export const Username = styled.div`
  /* Add styles for the username, e.g., font-size, color, margin, etc. */
  ${tw`p-2 bg-gray-700 w-full border-2`}
`;

export const StyledButton = styled.button`
  /* Add styles for the username, e.g., font-size, color, margin, etc. */
  ${tw`p-2 bg-green-700 w-full border-2`}
`;