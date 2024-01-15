'use client'

import { Box, Button, TextField } from "@mui/material"
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ onSearch, onFilterClick } : {onSearch: any, onFilterClick: any}) {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (e: any) => {
    // Trigger the search by passing the searchKeyword to the parent component
    e.preventDefault();
    onSearch(searchKeyword);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  

  return (
    <Box sx={{ mt: '80px' }} mt={4} mb={2} display="flex" justifyContent="center">
      <TextField
        label="Search Events"
        variant="outlined"
        fullWidth
        onKeyPress={handleKeyPress}
        sx={{
          maxWidth: 'sm',
          '& .MuiOutlinedInput-root': {
            borderRadius: 50,
            borderColor: '#4CAF50', // Add a thick green border
            background: '#F9F1F0', // Set the background color
          },
          '& .MuiInputBase-input': {
            color: 'black', // Set the text color to white
          },
        }}
        onChange={(e) => setSearchKeyword(e.target.value)}
        InputProps={{
          endAdornment: (
            <SearchIcon
              color="primary"
              sx={{ cursor: 'pointer' }}
              onClick={handleSearch}
            />
            
          ),
        }}
      />
      {/* <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Filter
      </button> */}
    </Box>
  )
       
}