import useComicsCalls from "../hooks/useComicsCalls";
import { useSelector } from "react-redux";

import * as React from "react";
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

const TableMarvel = () => {
  const characters = useSelector((state) => state.marvel.characters);
  // const series = useSelector((state) => state.marvel);
  const { getCharacters, getSeries } = useComicsCalls();
  const { page, setPage, offset, setOffset } = React.useContext(UserContext);

  React.useEffect(() => {
    getCharacters();
  }, [page]);

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
      <TableContainer sx={{ px: "20rem" }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ size: "small" }}>
                Picture
              </TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Series</TableCell>
              {/* <TableCell align="center">Carbs&nbsp;(g)</TableCell>
              <TableCell align="center">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {characters?.data?.results?.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  <img
                    src={`${row.thumbnail.path}/portrait_fantastic.jpg`}
                    alt="img"
                  />
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.name}
                </TableCell>

                <TableCell align="center">
                  {row?.series?.items && row.series.items.length > 0
                    ? row.series.items.map((item) => item?.name)
                    : "No Result"}
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
};

export default TableMarvel;
