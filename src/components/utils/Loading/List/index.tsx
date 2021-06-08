import ComponentIsVisible from 'components/utils/IsVisible';

import { ItemsBodyLoading } from './styles';

interface IComponentLoadingListProps {
  rows?: number;
  show: boolean;
}

const ComponentLoadingList: React.FC<IComponentLoadingListProps> = ({
  rows = 5,
  show,
}) => {
  const loadingItems = new Array(rows);

  for (let i = 0; i < loadingItems.length; i += 1) {
    loadingItems[i] = i;
  }

  return (
    <ComponentIsVisible when={show}>
      {loadingItems.map(position => (
        <ItemsBodyLoading addColorRow={!!(position % 2)} key={position} />
      ))}
    </ComponentIsVisible>
  );
};

export default ComponentLoadingList;
