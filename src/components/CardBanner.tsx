// Stylesheet
import './CardBanner.scss';

interface IProps {
  currentNominees: number;
}

export const CardBanner: React.FC<IProps> = props => {
  return (
    <section className="card-banner">
      <h4>{props.currentNominees}/5</h4>
    </section>
  );
};

export default CardBanner;
