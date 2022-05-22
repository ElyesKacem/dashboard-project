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
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { AlignHorizontalCenter } from '@mui/icons-material';
import Divider from '@mui/material/Divider';

export default function Mails() {
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
  function createData(id,name, email, text, date) {
    return {id,name, email, text, date};
  }
  const rows = [
      createData(1,'hama','emailqsdfqsdfqsdfsqdsf@mail.ctn','nsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla parisunt in culpa qui officia deserunt mollit anim id est laborum.','05/11/2022'),
      createData(2,'hama','emailqsdfqsdfqsdfsqdsf@mail.ctn','nsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla parisunt in culpa qui officia deserunt mollit anim id est laborum.','05/11/2022'),
      createData(3,'hama','emailqsdfqsdfqsdfsqdsf@mail.ctn','nsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla parisunt in culpa qui officia deserunt mollit anim id est laborum.','05/11/2022'),
      createData(4,'hama','emailqsdfqsdfqsdfsqdsf@mail.ctn','nsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla parisunt in culpa qui officia deserunt mollit anim id est laborum.','05/11/2022'),
      createData(5,'hama','emailqsdfqsdfqsdfsqdsf@mail.ctn','nsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla parisunt in culpa qui officia deserunt mollit anim id est laborum.','05/11/2022'),
      createData(6,'hama','emailqsdfqsdfqsdfsqdsf@mail.ctn','nsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla parisunt in culpa qui officia deserunt mollit anim id est laborum.','05/11/2022'),
      createData(7,'hama','emailqsdfqsdfqsdfsqdsf@mail.ctn','nsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla parisunt in culpa qui officia deserunt mollit anim id est laborum.','05/11/2022'),
      createData(8,'hama','emailqsdfqsdfqsdfsqdsf@mail.ctn','nsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla parisunt in culpa qui officia deserunt mollit anim id est laborum.','05/11/2022'),
      createData(9,'hama','emailqsdfqsdfqsdfsqdsf@mail.ctn','nsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla parisunt in culpa qui officia deserunt mollit anim id est laborum.','05/11/2022'),
  ];

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem> 
        <ListItemText primary="Nom" primaryTypographyProps={{ fontSize:20, fontWeight: 'bold', align:'left'}} />
        <ListItemText primary="Email" primaryTypographyProps={{fontSize:20, fontWeight: 'bold', align:'left'}} />
        <ListItemText primary="Message"  primaryTypographyProps={{fontSize:20, fontWeight: 'bold', align:'left'}}/>
        <ListItemText primary="Date"  primaryTypographyProps={{fontSize:20, fontWeight: 'bold', align:'center'}}/>
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
              
              <ListItemText primary={row.name}/>
              <ListItemText primary={row.email}/>
              <ListItemText primary={row.text} primaryTypographyProps={{ style: { maxWidth:340, maxHeight:20, overflow: 'hidden', textOverflow: 'ellipsis' } }} />
              <ListItemText primary={row.date} primaryTypographyProps={{align:'center'}}/>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}