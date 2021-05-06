// Libraries
import classnames from 'classnames';

// Material UI Component
import Button from '@material-ui/core/Button';

// Stylesheet
import './Button.scss';

interface IProps {
  cancel?: boolean;
  children: string;
  color?: 'primary' | 'secondary';
  confirm?: boolean;
  disabled?: boolean;
  nominate?: boolean;
  onClick?: () => void;
  remove?: boolean;
  style?: false | { fontSize: string } | undefined;
  variant: 'text' | 'outlined' | 'contained';
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
      style={(props.cancel || props.confirm) && { fontSize: '24px' }}
    >
      {props.children}
    </Button>
  );
};

export default CTAButton;
