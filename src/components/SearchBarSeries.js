import { Container, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import useComicsCalls from "../hooks/useComicsCalls";
import { useSelector } from "react-redux";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { UserContext } from "../App";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function SearchBarSeries() {
  const [searchTerm, setSearchTerm] = useState("");
  const searchSeries = useSelector((state) => state.marvel.series);
  const {
    searchingSeries,
    setSearchingSeries,
    setPage,
    page,
    setOffset,
    offset,
  } = React.useContext(UserContext);

  const { getSearchSeries } = useComicsCalls();

  React.useEffect(() => {
    getSearchSeries();
    // getSeries();
  }, [searchingSeries, page]);

  console.log(searchSeries);

  const handleChange = (event) => {
    setSearchingSeries(event.target.value);
  };

  const handleNext = () => {
    setPage(page + 1);
    setOffset(offset + 10);
    window.scrollTo(0, 0);
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
      setOffset(offset - 10);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <Container maxWidth="false" sx={{ ml: "25rem", mb: "3rem" }}>
        <TextField
          id="search"
          type="search"
          label="Search Series"
          value={searchingSeries}
          onChange={handleChange}
          sx={{ width: 600 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Container>
      <TableContainer sx={{ px: "20rem" }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Picture</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Creator</TableCell>
              {/* <TableCell align="center">Carbs&nbsp;(g)</TableCell>
              <TableCell align="center">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {searchSeries?.data?.results?.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  <img
                    src={`${row.thumbnail.path}/portrait_fantastic.jpg`}
                    alt="img"
                  />
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="center">
                  {row?.creators?.items[0]?.name
                    ? row?.creators?.items[0]?.name
                    : "No result"}
                </TableCell>

                {/* <TableCell align="center">
                  {row.comics.items.map((item) => {
                    <li>{item.name}</li>;
                  })}
                </TableCell> */}
                {/* <TableCell align="center">{row.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="center"
          sx={{ mt: 2 }}
        >
          <Button variant="outlined" onClick={handlePrevious}>
            Previos
          </Button>
          <Button variant="contained">{page}</Button>
          <Button variant="outlined" onClick={handleNext}>
            Next
          </Button>
        </Stack>
      </TableContainer>
    </>
  );
}
