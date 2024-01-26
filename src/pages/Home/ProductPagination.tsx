/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";
interface IMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}
interface ProductPaginationProps {
  meta: IMeta;
  onPageChange: (page: number) => void;
}
const ProductPagination = ({ meta, onPageChange }: ProductPaginationProps) => {
  const { page, limit, totalPage: total } = meta;
  const maxVisiblePages = 3;
  
  const [visiblePageRange, setVisiblePageRange] = useState({
    start: 1,
    end: maxVisiblePages,
  });

  const totalPage = Math.ceil(total / limit);

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (
      let i = visiblePageRange.start;
      i <= Math.min(visiblePageRange.end, totalPage);
      i++
    ) {
      pageNumbers.push(
        <PaginationItem key={i}>
          <PaginationLink isActive={i === page} onClick={() => onPageChange(i)}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return pageNumbers;
  };
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => onPageChange(page - 1)} />
        </PaginationItem>

        {renderPageNumbers()}
        <PaginationEllipsis></PaginationEllipsis>
        <PaginationItem>
          <PaginationNext onClick={() => onPageChange(page + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ProductPagination;
