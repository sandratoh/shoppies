// Libraries
import { useContext, useState } from 'react';

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
  const { nominations } = useContext(MovieContext);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const nominations = [
  //   {
  //     Title: 'Mean Girls',
  //     Year: '2004',
  //     imdbID: 'tt0377092',
  //     Type: 'movie',
  //     Poster:
  //       'https://m.media-amazon.com/images/M/MV5BMjE1MDQ4MjI1OV5BMl5BanBnXkFtZTcwNzcwODAzMw@@._V1_SX300.jpg',
  //   },
  //   {
  //     Title: 'The Avengers',
  //     Year: '2012',
  //     imdbID: 'tt0848228',
  //     Type: 'movie',
  //     Poster:
  //       'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  //   },
  //   {
  //     Title: 'The Matrix',
  //     Year: '1999',
  //     imdbID: 'tt0133093',
  //     Type: 'movie',
  //     Poster:
  //       'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
  //   },
  // ];

  const movieList = nominations
    ? nominations.map(nomination => (
        <li>{`${nomination.Title} (${nomination.Year})`}</li>
      ))
    : 'There are no movies in your nomination list.';

  return (
    <Dialog
      open={true}
      onClose={handleClose}
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
  );
};

export default Confirm;
