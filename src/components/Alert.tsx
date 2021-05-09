// Material UI Components
import Alert from '@material-ui/lab/Alert';

export const AppAlert: React.FC<{}> = () => {
  return (
    <Alert severity="error">
      Your nomination list is full. Please remove a movie from your list before
      nominating another.
    </Alert>
  );
};

export default AppAlert;
