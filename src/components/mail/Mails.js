import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { maxHeight } from '@mui/system';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { AlignHorizontalCenter } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { Dialog } from '@mui/material'; import { DataGrid } from '@mui/x-data-grid';

export default function Mails() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(1),
    // textAlign: 'center',
    padding: 20,
    color: theme.palette.text.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  }));
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  function createData(id, name, email, text, date) {
    return { id, name, email, text, date };
  }
  const rows = [
    createData(1, 'hama', 'emailqsdfqsdfqsdfsqdsf@mail.ctn', 'nsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla parisunt in culpa qui officia deserunt mollit anim id est laborum.', '05/11/2022'),
    createData(2, 'hama', 'emailqsdfqsdfqsdfsqdsf@mail.ctn', 'nsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla parisunt in culpa qui officia deserunt mollit anim id est laborum.', '05/11/2022'),
    createData(3, 'hama', 'emailqsdfqsdfqsdfsqdsf@mail.ctn', 'nsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla parisunt in culpa qui officia deserunt mollit anim id est laborum.', '05/11/2022'),
    createData(4, 'hama', 'emailqsdfqsdfqsdfsqdsf@mail.ctn', 'nsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla parisunt in culpa qui officia deserunt mollit anim id est laborum.', '05/11/2022'),
    createData(5, 'hama', 'emailqsdfqsdfqsdfsqdsf@mail.ctn', 'nsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla parisunt in culpa qui officia deserunt mollit anim id est laborum.', '05/11/2022'),
    createData(6, 'hama', 'emailqsdfqsdfqsdfsqdsf@mail.ctn', 'nsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla parisunt in culpa qui officia deserunt mollit anim id est laborum.', '05/11/2022'),
    createData(7, 'hama', 'emailqsdfqsdfqsdfsqdsf@mail.ctn', 'nsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla parisunt in culpa qui officia deserunt mollit anim id est laborum.', '05/11/2022'),
    createData(8, 'hama', 'emailqsdfqsdfqsdfsqdsf@mail.ctn', 'nsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla parisunt in culpa qui officia deserunt mollit anim id est laborum.', '05/11/2022'),
    createData(9, 'hama', 'emailqsdfqsdfqsdfsqdsf@mail.ctn', 'nsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla parisunt in culpa qui officia deserunt mollit anim id est laborum.', '05/11/2022'),
  ];
  const columns = [
    { field: 'id', headerName: 'ID', width: 340 },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 340,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },

    {
      field: 'Mail',
      headerName: 'Mail',
      width: 340,
    },
    {
      field: 'Contenu',
      headerName: 'Contenu',
      width: 340,
    },
    {
      field: 'Date',
      headerName: 'Date',
      width: 340,
    },
    // {
    //     field:'statu',
    //     headerName:'statu',
    //     description:'Supprimer / Modifier',
    //     sortable:false,
    //     width:300,

    // }
  ];
  return (
    <React.Fragment>

      <h1>Mails</h1>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ListItem>
          <ListItemText primary="Nom" primaryTypographyProps={{ fontSize: 20, fontWeight: 'bold', align: 'left' }} />
          <ListItemText primary="Email" primaryTypographyProps={{ fontSize: 20, fontWeight: 'bold', align: 'left' }} />
          <ListItemText primary="Message" primaryTypographyProps={{ fontSize: 20, fontWeight: 'bold', align: 'left' }} />
          <ListItemText primary="Date" primaryTypographyProps={{ fontSize: 20, fontWeight: 'bold', align: 'center' }} />
        </ListItem>
        <Divider />
        {rows.map((row) => {
          const labelId = `checkbox-list-label-${row.id}`;

          return (

            <ListItem
              key={row.id}
              secondaryAction={
                <IconButton edge="end" aria-label="comments" component={Link} to={`/Mail/${row.id}`} state={row}>
                  <CommentIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton role={undefined} onClick={handleToggle(row.id)} dense>

                <ListItemText primary={row.name} />
                <ListItemText primary={row.email} />
                <ListItemText primary={row.text} primaryTypographyProps={{ style: { maxWidth: 340, maxHeight: 20, overflow: 'hidden', textOverflow: 'ellipsis' } }} />
                <ListItemText primary={row.date} primaryTypographyProps={{ align: 'center' }} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      {/* 
      <Item>
        <h1>Mails</h1>
        <Dialog title='Ajouter un mail' style={{ backgroundColor: '#33bc33', color: 'white', position: 'absolute', right: 30, bottom: 180 }} variant="outlined" ></Dialog>
      
        <div style={{ height: 460, width: '100%', margin: 'auto', marginTop: 40 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={11}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </Item> */}


    </React.Fragment>
  );
}