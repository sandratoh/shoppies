// Component
import Button from '../Button';

// Stylesheet
import './NominationCardListItem.scss';

interface IProps {
  title: string;
  year: number;
}

export const NominationCardListItem: React.FC<IProps> = props => {
  const handleRemove = (): void => {
    console.log('remove button clicked');
  };

  return (
    <section className="nomination-card--item">
      <p>{`${props.title} (${props.year})`}</p>
      <Button
        remove
        variant="outlined"
        color="secondary"
        onClick={handleRemove}
      >
        Remove
      </Button>
    </section>
  );
};

export default NominationCardListItem;
