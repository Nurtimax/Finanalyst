import {
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell as MuiTableCell,
  TableBody,
  Paper,
} from '@mui/material';
import React, { useMemo } from 'react';
import { useTable, Column, CellProps, FooterProps, HeaderGroup } from 'react-table';
import { StoreMonthData } from '../../types/data';
import { data } from '../../utils/general/data';
import FooterPrice from './FooterPrice';
import Price from './Price';
import TableCell from './TableCell';
import Total from './Total';

interface Props {}

interface MyCellProps extends CellProps<StoreMonthData> {
  // add any additional props you want to pass to the cell component
}
interface MyFooterProps extends FooterProps<StoreMonthData> {
  // add any additional props you want to pass to the cell component
}

interface CustomHeaderGroup<T extends Record<string, unknown>> extends HeaderGroup<T> {
  style?: React.CSSProperties;
}

const Table: React.FC<Props> = () => {
  const columns = useMemo<Column<StoreMonthData>[]>(
    () => [
      {
        Header: 'Store',
        accessor: (data: StoreMonthData) => data.store.name,
        Footer: 'Totals',
      },
      ...data.map((item, index) => {
        return {
          Header: item.months[index].name,
          accessor: (data: StoreMonthData) => data.months[index].id,

          Cell: (cell: MyCellProps) => {
            return cell.column.Header?.toString() ? (
              <TableCell value={0} id={cell.value} storeId={cell.column.Header?.toString()} />
            ) : null;
          },
          Footer: ({ rows, column }: MyFooterProps) => {
            const keys: Array<string[]> = rows.map((item) => item.values.Total);

            return column.Header ? <FooterPrice header={column.Header?.toString()} keys={keys} index={index} /> : null;
          },
        };
      }),
      {
        Header: 'Total',
        accessor: (data: StoreMonthData) => data.months.map((item) => item.id),
        Cell: ({ row, rows, columns, column }: MyCellProps) => {
          return <Total original={row.original} />;
        },
        Footer: (props: MyFooterProps) => {
          return <Price />;
        },
      },
    ],
    []
  );

  const tableData = useMemo(() => data, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<StoreMonthData>({
    columns,
    data: tableData,
  });

  return (
    <>
      <TableContainer component={Paper}>
        <MuiTable sx={{ minWidth: 650 }} {...getTableProps()} aria-label="simple table">
          <TableHead>
            {headerGroups.map((headerGroup, index) => {
              return (
                <TableRow {...headerGroup.getHeaderGroupProps()} key={headerGroup.headers[index].id}>
                  {headerGroup.headers.map((column: CustomHeaderGroup<StoreMonthData>, index) => {
                    return (
                      <MuiTableCell
                        {...column.getHeaderProps()}
                        component="th"
                        scope="row"
                        key={column.Header?.toString()}
                      >
                        {column.render('Header')}
                      </MuiTableCell>
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
                    <MuiTableCell {...cell.getCellProps({})} component="th" scope="row" key={index}>
                      {cell.render('Cell')}
                    </MuiTableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
          <TableHead>
            {headerGroups.map((headerGroup, index) => (
              <TableRow key={index}>
                {headerGroup.headers.map((column: CustomHeaderGroup<StoreMonthData>, index) => {
                  return (
                    <MuiTableCell {...column.getHeaderProps()} key={index}>
                      {column.render('Footer')}
                    </MuiTableCell>
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
