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

const TableMarvelSeries = () => {
  const characters = useSelector((state) => state.marvel);
  const series = useSelector((state) => state.marvel);
  const { getSeries } = useComicsCalls();

  React.useEffect(() => {
    getSeries();
  }, []);

  // characters.characters.data.results.map((item) => {
  //   console.log(item.id);
  // });
  //   console.log(characters);
  console.log(series);
  return (
    <>
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
            {characters?.series?.data?.results?.map((row) => (
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
      </TableContainer>
    </>
  );
};

export default TableMarvelSeries;
