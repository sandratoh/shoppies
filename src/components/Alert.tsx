// Libraries
import { useContext } from 'react';

// Material UI Components
import Alert from '@material-ui/lab/Alert';

// Helpers
import { AppContext } from '../Provider/DataProvider';

export const AppAlert: React.FC<{}> = () => {
  const { success } = useContext(AppContext);

  const alertType = success ? 'success' : 'error';

  const alertMessage = success
    ? 'Thank you for your submission, your nomination has been received!'
    : 'Your nomination list is full. Please submit your nominations or remove a movie before nominating another.';

  return <Alert severity={alertType}>{alertMessage}</Alert>;
};

export default AppAlert;
