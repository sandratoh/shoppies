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

export const Submit: React.FC<{}> = () => {
  const { nominations, setNominations, openSubmit, setOpenSubmit } = useContext(
    AppContext
  );

  const handleSubmit = () => {
    setNominations([]);
    setOpenSubmit(false);
  };

  const handleCancel = () => setOpenSubmit(false);

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
      open={openSubmit}
      onClose={handleCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle id="alert-dialog-title">
        <h4>Submit Nomination List?</h4>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {movieList}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="text" onClick={handleSubmit}>
          Submit
        </Button>
        <Button color="primary" variant="text" onClick={handleCancel}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Submit;
