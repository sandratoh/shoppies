// Libraries
import { useContext } from 'react';

// Component
import Button from './Button';

// Material UI Component
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Helpers
import { MovieContext } from '../Provider/MovieDataProvider';

// Stylesheet
import './Confirm.scss';

export const Confirm = () => {
  const { nominations, open, setOpen } = useContext(MovieContext);

  const handleConfirm = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const movieList = nominations
    ? nominations.map(nomination => (
        <li>{`${nomination.Title} (${nomination.Year})`}</li>
      ))
    : 'There are no movies in your nomination list.';

  return (
    <Dialog
      open={open}
      onClose={handleCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle id="alert-dialog-title">
        {'Clear All from Nomination List?'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {movieList}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="text" onClick={handleConfirm}>
          Confirm
        </Button>
        <Button color="primary" variant="text" onClick={handleCancel}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Confirm;
