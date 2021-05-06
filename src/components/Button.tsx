// Libraries
import classNames from 'classnames';

// Material UI Component
import Button from '@material-ui/core/Button';

// Stylesheet
import './Button.scss';

interface IProps {
  children: string;
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  variant: 'text' | 'outlined' | 'contained';
  onClick?: () => void;
}

export const CTAButton: React.FC<IProps> = props => {
  return (
    <Button
      color={props.color}
      disabled={props.disabled}
      variant={props.variant}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default CTAButton;
