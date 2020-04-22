import React, { useState } from "react";
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TablePagination,
  Toolbar,
  Tooltip,
  Typography
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/styles";
import { daysSinceScale, percentBelowScale } from "./scales";
import { StyledTableSortLabel } from "../TopMovers/CustomComponents";
import { getComparator, stableSort} from "../../helpers/sorting";

const useStyle = makeStyles({
  paper: {
    background: '#373B52',
    color: '#3BBA9C'
  },
  pagination: {
    color: '#3BBA9C'
  }
});

const headCells = [
  { id: "country", align: false, label: "Country", sort: false },
  { id: "newCases", align: true, label: "New Cases", sort: true },
  { id: "peak", align: true, label: "Peak", sort: true },
  { id: "peakDate", align: true, label: "Date of Peak", sort: false },
  { id: "daysSince", align: true, label: "Days Since", sort: true },
  { id: "percentBelow", align: true, label: "% Below Peak", sort: true }
];

function PeakToolbar(props) {
  const { title } = props;
  return (
    <Toolbar>
      <Typography color="inherit" align="left" variant="h5" style={{ marginRight: 5 }}>
        {title}
      </Typography>
    </Toolbar>
  );
};

export const StyledTableCell = withStyles(() => ({
  head: {
    background: '#373b52',
    color: '#3BBA9C',
    fontSize: 16,
    fontWeight: "bolder"
  },
  body: {
    background: '#3C3F58',
    color: '#3BBA9C',
    fontSize: 15
  }
}))(TableCell);


const generateStyle = (value, scale) => ({
  backgroundColor: "#3C3F58",
  color: scale(value),
  fontSize: 15
});

export default function PeakTable(props) {
  const [ order, setOrder ] = useState("asc");
  const [ orderBy, setOrderBy ] = useState('daysSince');
  const [ page, setPage ] = useState(0);
  const [ rowsPerPage, setRowsPerPage ] = useState(20);
  const { dense, rows, title } = props;

  const classes = useStyle();

  const handleChangePage = (_, newPage) => {
    setPage(newPage)
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (property) => () => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  }

  return (
    <Paper className={classes.paper}>
      <PeakToolbar title={title} />
      <TableContainer>
        <Table size={dense ? "small" : "medium"}>
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <StyledTableCell
                  id={headCell.id}
                  key={headCell.id}
                  align={headCell.align ? "right" : "left"}
                >
                  {headCell.sort
                    ?
                      (<Tooltip title="Sort by" placement="top">
                        <StyledTableSortLabel
                          active={orderBy === headCell.id}
                          direction={order}
                          onClick={handleRequestSort(headCell.id)}
                        >
                          { headCell.label }
                        </StyledTableSortLabel>
                      </Tooltip>)
                    : headCell.label
                  }
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.country}>
                  <StyledTableCell>{row.country}</StyledTableCell>
                  <StyledTableCell align="right">{row.newCases}</StyledTableCell>
                  <StyledTableCell align="right">{row.peak}</StyledTableCell>
                  <StyledTableCell align="right">{row.peakDate}</StyledTableCell>
                  <TableCell
                    align="right"
                    style={generateStyle(row.daysSince, daysSinceScale)}
                  >
                    {row.daysSince}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={generateStyle(row.percentBelow, percentBelowScale)}
                  >
                    {`${row.percentBelow}%`}
                  </TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className={classes.pagination}
        rowsPerPageOptions={[5, 10, 20, rows.length]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}