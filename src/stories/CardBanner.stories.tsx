// Components
import CardBanner from '../components/Nomination/CardBanner';

export default {
  title: 'CardBanner',
  component: CardBanner,
};

export const Default = () => {
  return <CardBanner currentNominees={0}></CardBanner>;
};

export const Full = () => {
  return <CardBanner currentNominees={5}></CardBanner>;
};
