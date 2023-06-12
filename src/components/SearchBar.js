import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container maxWidth="false" sx={{ mt: 2, mb: 2 }}>
      <TextField
        id="search"
        type="search"
        label="Search Characters"
        value={searchTerm}
        onChange={handleChange}
        sx={{ width: 300 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
}
