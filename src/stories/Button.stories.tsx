// Libraries
import { action } from '@storybook/addon-actions';

// Components
import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Nominate = () => {
  return (
    <Button
      color="primary"
      variant="contained"
      onClick={action('Nominate button clicked')}
    >
      Nominate
    </Button>
  );
};

export const Remove = () => {
  return (
    <Button
      color="secondary"
      variant="outlined"
      onClick={action('Remove button clicked')}
    >
      Remove
    </Button>
  );
};

export const Disabled = () => {
  return (
    <Button variant="contained" disabled>
      Disabled
    </Button>
  );
};
