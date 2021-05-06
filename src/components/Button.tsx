// Libraries
import classnames from 'classnames';

// Material UI Component
import Button from '@material-ui/core/Button';

// Stylesheet
import './Button.scss';

interface IProps {
  children: string;
  color?: 'primary' | 'secondary';
  variant: 'text' | 'outlined' | 'contained';
  onClick?: () => void;
  cancel?: boolean;
  confirm?: boolean;
  disabled?: boolean;
  nominate?: boolean;
  remove?: boolean;
}

export const CTAButton: React.FC<IProps> = props => {
  const buttonClass = classnames('button', {
    'button--nominate': props.nominate,
    'button--remove': props.remove,
    'button--cancel': props.cancel,
    'button--confirm': props.confirm,
  });

  return (
    <Button
      className={buttonClass}
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
