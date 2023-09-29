import {
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell as MuiTableCell,
  TableBody,
  Paper,
  styled
} from '@mui/material';
import React, { useMemo } from 'react';
import { useTable, Column, CellProps, FooterProps, HeaderGroup } from 'react-table';
import { StoreMonthData } from '../../types/data';
import { data } from '../../utils/general/data';
import FooterPrice from './FooterPrice';
import Price from './Price';
import TableCell from './TableCell';
import Total from './Total';

interface CustomHeaderGroup<T extends Record<string, unknown>> extends HeaderGroup<T> {
  style?: React.CSSProperties;
}

const StyledMuiTableCell = styled(MuiTableCell)(() => ({
  padding: '6px 0',
  '&:first-of-type': {
    padding: '6px 0 6px 8px'
  }
}));

const Table: React.FC = () => {
  const columns = useMemo<Column<StoreMonthData>[]>(
    () => [
      {
        Header: 'Store',
        accessor: (data: StoreMonthData) => data.store.name,
        Footer: 'Totals'
      },
      ...data.map((item, index) => {
        return {
          Header: item.months[index].name,
          accessor: (data: StoreMonthData) => data.months[index].id,

          Cell: (cell: CellProps<StoreMonthData>) => {
            return cell.column.Header?.toString() ? (
              <TableCell value={0} id={cell.value} storeId={cell.column.Header?.toString()} />
            ) : null;
          },
          Footer: ({ rows, column }: FooterProps<StoreMonthData>) => {
            const keys: Array<string[]> = rows.map((item) => item.values.Total);

            return column.Header ? (
              <FooterPrice header={column.Header?.toString()} keys={keys} index={index} />
            ) : null;
          }
        };
      }),
      {
        Header: 'Total',
        accessor: (data: StoreMonthData) => data.months.map((item) => item.id),
        Cell: ({ row }: CellProps<StoreMonthData>) => {
          return <Total original={row.original} />;
        },
        Footer: () => {
          return <Price />;
        }
      }
    ],
    []
  );

  const tableData = useMemo(() => data, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<StoreMonthData>({
      columns,
      data: tableData
    });

  return (
    <>
      <TableContainer component={Paper} sx={{ maxHeight: '90vh' }}>
        <MuiTable
          sx={{ minWidth: 650 }}
          stickyHeader
          size="small"
          {...getTableProps()}
          aria-label="simple table"
        >
          <TableHead>
            {headerGroups.map((headerGroup, index) => {
              return (
                <TableRow
                  {...headerGroup.getHeaderGroupProps()}
                  key={headerGroup.headers[index].id}
                >
                  {headerGroup.headers.map((column: CustomHeaderGroup<StoreMonthData>) => {
                    return (
                      <StyledMuiTableCell
                        {...column.getHeaderProps()}
                        component="th"
                        scope="row"
                        key={column.Header?.toString()}
                      >
                        {column.render('Header')}
                      </StyledMuiTableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps({})} key={index}>
                  {row.cells.map((cell, index) => (
                    <StyledMuiTableCell
                      {...cell.getCellProps({})}
                      component="th"
                      scope="row"
                      key={index}
                    >
                      {cell.render('Cell')}
                    </StyledMuiTableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
          <TableHead>
            {headerGroups.map((headerGroup, index) => (
              <TableRow key={index} id="table-head-sticky-footer">
                {headerGroup.headers.map((column: CustomHeaderGroup<StoreMonthData>, index) => {
                  return (
                    <StyledMuiTableCell {...column.getHeaderProps()} key={index}>
                      {column.render('Footer')}
                    </StyledMuiTableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableHead>
        </MuiTable>
      </TableContainer>
    </>
  );
};

export default Table;
