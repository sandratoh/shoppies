// Libraries
import classNames from 'classnames';

// Stylesheet
import './CardBanner.scss';

interface IProps {
  currentNominees: number;
}

export const CardBanner: React.FC<IProps> = props => {
  const bannerClasses = classNames('card-banner', {
    'card-banner--full': props.currentNominees === 5,
  });

  return (
    <section className={bannerClasses}>
      <h4>{props.currentNominees}/5</h4>
    </section>
  );
};

export default CardBanner;
