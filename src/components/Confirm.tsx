// Libraries
import { useContext } from 'react';

// Components
import Button from './Button';

// Material UI Components
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Helpers
import { AppContext } from '../Provider/DataProvider';

export const Confirm: React.FC<{}> = () => {
  const {
    nominations,
    setNominations,
    openConfirm,
    setOpenConfirm,
  } = useContext(AppContext);

  const handleConfirm = () => {
    setNominations([]);
    setOpenConfirm(false);
  };

  const handleCancel = () => setOpenConfirm(false);

  const movieList =
    nominations.length > 0
      ? nominations.map(nomination => (
          <li
            key={nomination.imdbID}
          >{`${nomination.Title} (${nomination.Year})`}</li>
        ))
      : 'There are no movies in your nomination list.';

  return (
    <Dialog
      open={openConfirm}
      onClose={handleCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle id="alert-dialog-title">
        <span className="dialog-title">Clear All from Nomination List?</span>
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
