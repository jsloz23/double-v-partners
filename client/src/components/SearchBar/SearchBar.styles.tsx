import tw from "twin.macro";
import styled from "styled-components";

export const StyledSearchBar = styled.input.attrs({
    className: "StyledSearchBar",
})`
${tw`
    px-2
    w-full
    text-2xl
  `}
`;