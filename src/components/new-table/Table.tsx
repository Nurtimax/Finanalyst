import {
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell as MuiTableCell,
  TableBody,
  Paper,
  styled,
  Box,
  Typography,
} from '@mui/material';
import React, { useMemo } from 'react';
import { useTable, Column, CellProps, FooterProps, HeaderGroup } from 'react-table';
import { useAppSelector } from '../../hooks/dispatch';
import { StoreMonthData } from '../../types/data';
import { months } from '../../utils/general/data';
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

const StyledMuiTableCell = styled(MuiTableCell)(() => ({}));

const NewTable: React.FC<Props> = () => {
  const { data } = useAppSelector((state) => state.financial);

  const columns = useMemo<Column<StoreMonthData>[]>(
    () => [
      {
        Header: 'Store',
        accessor: (data: StoreMonthData) => data.store.name,
        Footer: 'Totals',
      },
      ...months.map((item, index) => {
        return {
          Header: item.name,
          accessor: String(index),

          Cell: (cell: MyCellProps) => {
            // console.log(cell);

            const { id: storeId, name: storeName } = cell.cell.row.original.store;
            const { name, id } = cell.cell.row.original.months[index];

            return cell.column.Header?.toString() ? (
              <TableCell storeId={storeId} monthId={id} name={storeName} month={name} />
            ) : null;
          },
          Footer: ({ rows, column }: MyFooterProps) => {
            const keys: Array<string[]> = rows.map((item) => item.values.Total);

            return column.Header ? <FooterPrice keys={keys} index={index} /> : null;
          },
        };
      }),
      {
        Header: 'Total',
        accessor: (data: StoreMonthData) => data.months.map((item) => item.id),
        Cell: ({ row }: MyCellProps) => {
          return <Total original={row.original} />;
        },
        Footer: (props: MyFooterProps) => {
          return <Price />;
        },
      },
    ],
    []
  );

  const tableData = useMemo(() => data, [data]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<StoreMonthData>({
    columns,
    data: tableData,
  });

  if (!data.length) {
    return (
      <Box>
        <Typography variant="h5">You have no active fields</Typography>
      </Box>
    );
  }

  return (
    <>
      <TableContainer component={Paper}>
        <MuiTable sx={{ minWidth: 650 }} size="small" {...getTableProps()} aria-label="simple table">
          <TableHead>
            {headerGroups.map((headerGroup, index) => {
              return (
                <TableRow {...headerGroup.getHeaderGroupProps()} key={headerGroup.headers[index].id}>
                  {headerGroup.headers.map((column: CustomHeaderGroup<StoreMonthData>, index) => {
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
                    <StyledMuiTableCell {...cell.getCellProps({})} component="th" scope="row" key={index}>
                      {cell.render('Cell')}
                    </StyledMuiTableCell>
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

export default NewTable;
