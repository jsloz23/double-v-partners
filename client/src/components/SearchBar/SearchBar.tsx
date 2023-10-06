import { StyledSearchBar } from "./SearchBar.styles"
import {FC} from "react"

interface SearchBarProps  {
  onSubmit: (event: unknown) => void
  onChange: (event: unknown) => void
}


export const SearchBar: FC<SearchBarProps> = ({onSubmit, onChange}) => {
  return (
      <form className="flex flex-row mx-4" onSubmit={onSubmit}>
        <StyledSearchBar onChange={onChange} placeholder="Search for github users..."/>
        <button className="p-4 bg-green-700">Search</button>
      </form>

  )
}