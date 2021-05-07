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
      nominate
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
      remove
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
    <Button
      variant="contained"
      disabled
      onClick={action('Should not be able to click')}
    >
      Disabled
    </Button>
  );
};

export const Cancel = () => {
  return (
    <Button
      color="primary"
      variant="outlined"
      cancel
      onClick={action('Cancel button clicked')}
    >
      Cancel
    </Button>
  );
};

export const Confirm = () => {
  return (
    <Button
      color="primary"
      variant="outlined"
      confirm
      onClick={action('Confirm button clicked')}
    >
      Confirm
    </Button>
  );
};
