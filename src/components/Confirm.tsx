// Libraries
import { useState } from 'react';

// Component
import Button from './Button';

// Material UI Component
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Stylesheet
import './Confirm.scss';

export const Confirm = () => {
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="confirma-dialog">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            variant="text"
            onClick={() => console.log('confirm button clicked')}
          >
            Confirm
          </Button>
          <Button
            color="primary"
            variant="text"
            onClick={() => console.log('cancel button clicked')}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  );
};

export default Confirm;
