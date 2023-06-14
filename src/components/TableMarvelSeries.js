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

const TableMarvelSeries = () => {
  const series = useSelector((state) => state.marvel.series);
  const { getSeries } = useComicsCalls();
  const { page, setPage, offset, setOffset } = React.useContext(UserContext);

  React.useEffect(() => {
    getSeries();
  }, [page]);

  console.log(series);

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
              <TableCell align="center">Picture</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Creators</TableCell>
              {/* <TableCell align="center">Comics</TableCell> */}
              {/*<TableCell align="center">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {series?.data?.results?.map((row, index) => (
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
                  {row?.creators?.items && row?.creators?.items.length > 0
                    ? row.creators?.items.map((item) => item?.name + "- ")
                    : "No Results"}
                </TableCell>
                {/* <TableCell align="center">
                  {row?.comics?.items && row.comics.items.length > 0
                    ? row.comics.items.map((item) => item?.name)
                    : "No Result"}
                </TableCell> */}
                {/* <TableCell align="center">
                  {row.comics.items.map((item) => {
                    <li>{item.name}</li>;
                  })}
                </TableCell>  */}
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

export default TableMarvelSeries;
