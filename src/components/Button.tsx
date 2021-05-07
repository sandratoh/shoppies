// Libraries
import classNames from 'classnames';

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
  link?: boolean;
  nominate?: boolean;
  onClick?: () => void;
  remove?: boolean;
  variant: 'text' | 'outlined' | 'contained';
}

export const CTAButton: React.FC<IProps> = props => {
  const buttonClass = classNames('button', {
    'button--nominate': props.nominate,
    'button--remove': props.remove,
    'button--cancel': props.cancel,
    'button--confirm': props.confirm,
    'button--link': props.link,
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
