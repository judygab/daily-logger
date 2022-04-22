import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";

interface DataTableProps {
  columns: Array<string>,
  data: any
}

export const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
  const filters = useSelector((state: RootStateOrAny) => state.filtersReducer);

  const shouldDisplay = (transaction: Transaction) => {
      let price = parseInt(transaction.amount.replace('$', ''));
      let matchesSearchText = filters.searchText === '' ? true : filters.searchText.includes(transaction.transaction_name);
      let matchesCategory = filters.categories.length > 0 ? filters.categories.some((category: string) => category == transaction.category) : true;
      let matchesVendor = filters.vendors.length> 0 ? filters.vendors.some((vendor: string) => vendor == transaction.transaction_vendor): true;
      let matchesPrice = (filters.price && filters.price.length == 2) ? (price >= filters.price[0] && price <= filters.price[1]) : true;
      return matchesSearchText && matchesCategory && matchesVendor && matchesPrice;
  }

  const filteredData = data.filter((transaction: Transaction) => shouldDisplay(transaction));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#F9F9FB"}}>
          <TableRow>
            {
              columns.map((column: string) => {
                return (
                  <TableCell align="left">{column}</TableCell>
                )
              })
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((row: any) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.transaction_name}
              </TableCell>
              <TableCell align="left">{row.amount}</TableCell>
              <TableCell align="left">{row.category}</TableCell>
              <TableCell align="left">{row.transaction_vendor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
