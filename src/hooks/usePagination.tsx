import { useEffect, useState } from "react";
import { ArticlesProps } from "../interfaces/ArticlesProps";

type Props = {
  items: ArticlesProps[];
  itemsPerPage: number;
  target?: string;
  externalCurrentPage?: number;
  setExternalCurrentPage?: React.Dispatch<React.SetStateAction<number | undefined>>;
};

const usePagination = ({
  items,
  itemsPerPage,
  target,
  externalCurrentPage,
  setExternalCurrentPage,
}: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPageState, setItemsPerPage] = useState(0);
  const [currentItems, setCurrentItems] = useState<ArticlesProps[]>([]);
  const [allItems, setAllItems] = useState<ArticlesProps[]>([]);

  const scrollPagination = () => {
    if (target) {
      const targetElement = document.getElementById(target);
  
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }
  }

  useEffect(() => {
    const firstIndex = (currentPage - 1) * itemsPerPage;
    const newLastIndex = currentPage * itemsPerPage;

    setCurrentItems(items.slice(firstIndex, newLastIndex));
    setAllItems(items);
    setItemsPerPage(itemsPerPage);

    if (externalCurrentPage !== undefined && externalCurrentPage !== currentPage) {
      setCurrentPage(externalCurrentPage);
    }

    if (setExternalCurrentPage) {
      setExternalCurrentPage((prev) => {
        return prev !== undefined ? prev : currentPage;
      });
    }
  }, [items, currentPage, externalCurrentPage, setExternalCurrentPage]);

  return {
    currentPage,
    itemsPerPageState,
    currentItems,
    allItems,
    paginate: (page: number) =>{ setCurrentPage(page); scrollPagination(); },
    setCurrentPage,
    setCurrentItems,
  };
};

export default usePagination;