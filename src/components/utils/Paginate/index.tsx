import { useCallback, useMemo } from 'react';

import ReactPaginate from 'react-paginate';

import ComponentIsVisible from 'components/utils/IsVisible';

interface IPaginateProps {
  currentPage?: number;
  onPage(pageSelected: number): void;
  show: boolean;
  totalPages?: number;
}

const ComponentPaginate: React.FC<IPaginateProps> = ({
  currentPage,
  onPage,
  show,
  totalPages,
}) => {
  const currentPageFormatted = useMemo<number>(
    () => (currentPage || 1) - 1,
    [currentPage],
  );

  const handlePage = useCallback(
    (selectedItem: { selected: number }) => {
      const pageSelectedFormatted = selectedItem.selected + 1;

      onPage(pageSelectedFormatted);
    },
    [onPage],
  );

  return (
    <ComponentIsVisible when={show}>
      <ReactPaginate
        activeClassName="active"
        breakLabel="..."
        containerClassName="ulPaginate"
        disableInitialCallback
        initialPage={currentPageFormatted}
        marginPagesDisplayed={2}
        nextLabel="›"
        onPageChange={handlePage}
        pageCount={totalPages || 1}
        pageRangeDisplayed={5}
        previousLabel="‹"
      />
    </ComponentIsVisible>
  );
};

export default ComponentPaginate;
