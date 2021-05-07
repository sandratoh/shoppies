// Stylesheet
import './CardBanner.scss';

interface IProps {
  currentNominees: number;
}

export const CardBanner: React.FC<IProps> = props => {
  return <section className="card-banner">{props.currentNominees}/5</section>;
};

export default CardBanner;
