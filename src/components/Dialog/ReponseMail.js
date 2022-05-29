import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ReponseMail(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button style={{ backgroundColor: '#33bc33', color: 'white', textTransform: "none" }} variant="outlined" onClick={handleClickOpen}>
                {props.title}
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Repondre</DialogTitle>
                <DialogContent style={{ width: 500, }}>
                    <DialogContentText>
                        Veuillez saisir un message
                    </DialogContentText>
                    <TextField
                        id="standard-multiline-static"
                        label="Message"
                        multiline
                        fullWidth
                        rows={6}
                        placeholder="Saisir message"
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Annuler</Button>
                    <Button onClick={handleClose}>Envoyer</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}