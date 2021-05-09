// Libraries
// @ts-ignore: Cannot find module '@storybook/addon-actions' or its corresponding type declarations
import { action } from '@storybook/addon-actions';

// Components
import SearchButton from '../components/SearchButton';

export default {
  title: 'SearchButton',
  component: SearchButton,
};

export const Default = () => {
  return <SearchButton onClick={action('Search button clicked')} />;
};
