import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { styled, makeStyles } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Dialog from '../Dialog/Dialog';

const columns = [
    { field: 'id', headerName: 'ID', width: 340 },
    { field: 'firstName', headerName: 'First name', width: 340 },
    { field: 'lastName', headerName: 'Last name', width: 340 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 340,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 340,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    // {
    //     field:'statu',
    //     headerName:'statu',
    //     description:'Supprimer / Modifier',
    //     sortable:false,
    //     width:300,

    // }
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 55 },
    { id: 6, lastName: 'Melisandre', firstName: 'Kaka', age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 11, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 12, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 13, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 14, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: 55 },
    { id: 16, lastName: 'Melisandre', firstName: 'Kaka', age: 150 },
    { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 18, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Worker() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        padding: theme.spacing(1),
        // textAlign: 'center',
        padding: 20,
        color: theme.palette.text.secondary,
        justifyContent: 'center',
        alignItems: 'center',
    }));
    return (
        <Item>
            <h1>Workers</h1>
            <Dialog title='Ajouter un employer' style={{ backgroundColor: '#33bc33', color: 'white', position: 'absolute', right: 30, bottom: 180 }} variant="outlined" ></Dialog>
            {/* <Button >
                + Ajouter
            </Button> */}
            <div style={{ height: 460, width: '100%', margin: 'auto', marginTop: 40 }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={11}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </Item>

    );
}
