import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog(props) {
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
                + Ajouter un employer
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Veuillez saisir les nouveaux valeurs
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Nom"
                        type="text"
                        fullWidth
                        variant="standard"
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Prénom"
                        type="email"
                        fullWidth
                        variant="standard"
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Annuler</Button>
                    <Button onClick={handleClose}>Modifier</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
