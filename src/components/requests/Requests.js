import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Alert } from '@mui/material';
import Request from './Request';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const columns = [
  { id: 'name', label: 'Nom', minWidth: 170 },
  { id: 'address', label: 'Adresse', minWidth: 100 },
  {
    id: 'phone',
    label: 'Telephone',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'status',
    label: 'statut',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(id,name, address, phone, date,status) {
  return {id, name, address, phone, date, status };
}
const rows = [
    createData(1,'hama', 'nahj othman', 574822, '05/11/2022','new'),
    createData(2,'hama', 'nahj othman', 574822, '05/11/2022','pending'),
    createData(3,'hama', 'nahj othman', 574822, '05/11/2022','new'),
    createData(4,'hama', 'nahj othman', 574822, '05/11/2022','canceled'),
    createData(5,'hama', 'nahj othman', 574822, '05/11/2022','new'),
    createData(6,'hama', 'nahj othman', 574822, '05/11/2022','pending'),
    createData(7,'hama', 'nahj othman', 574822, '05/11/2022','pending'),
    createData(8,'hama', 'nahj othman', 574822, '05/11/2022','done'),
    createData(9,'hama', 'nahj othman', 574822, '05/11/2022','new'),
    createData(10,'hama', 'nahj othman', 574822, '05/11/2022','done'),
    createData(11,'hama', 'nahj othman', 574822, '05/11/2022','done'),
    createData(12,'hama', 'nahj othman', 574822, '05/11/2022','canceled'),
    createData(13,'hama', 'nahj othman', 574822, '05/11/2022','pending'),
    createData(14,'hama', 'nahj othman', 574822, '05/11/2022','canceled'),
    createData(15,'hama', 'nahj othman', 574822, '05/11/2022','new'),
];

export default function Requests() {
    const [Request,setRequests]=React.useState(null);
    React.useEffect(()=>{
        fetch("http://localhost:8000/requests")
        .then(res =>{
            res.json();
            console.log("response",res);
        })
        .then((data)=>{
            console.log("data",data);
        })
    },[]);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div>
            <h2>Requete client</h2>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                        <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                        >
                            {column.label}
                        </TableCell>
                        ))}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                        return (
                            <TableRow component={Link} to={`/Request/${row.id}`} state={row} hover role="checkbox" tabIndex={-1} key={row.id}>
                            {console.log(row.id)}
                            {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                <TableCell key={column.id} align={column.align}>
                                    {(() => {
                                        if(column.id ==='status')
                                        {
                                            switch (value) {
                                                case "new":
                                                    return <Alert variant="filled" severity="warning">
                                                    nouveau
                                                    </Alert>
                                                case 'pending':
                                                    return <Alert variant="filled" severity="info">
                                                    en attente
                                                    </Alert>
                                                case 'done':
                                                    return <Alert variant="filled" severity="success">
                                                    complete
                                                    </Alert>
                                                case 'canceled':
                                                    return <Alert variant="filled" severity="error">
                                                    annule
                                                    </Alert>
                                                default:
                                                    return <Alert variant="filled" severity="info">
                                                    else
                                                    </Alert>
                                            }
                                        }
                                        else{
                                            return value;
                                        }
                                        })()
                                    }
                                </TableCell>
                                );
                            })}
                            </TableRow>
                        );
                        })}
                    </TableBody>
                </Table>
                </TableContainer>
                <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
}
