import {
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell as MuiTableCell,
  TableBody,
  Paper,
  styled,
} from '@mui/material';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import dayjs from 'dayjs';
import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useTable, CellProps, FooterProps, HeaderGroup } from 'react-table';
import { useAppSelector } from '../../hooks/dispatch';
import { parseFormatDate } from '../../parseFormatDate';
import { actionColumns } from '../../store/columns';
import { IShedule } from '../../types/data';
import { createTableData } from '../../utils/constants/data';
import { returnSheduleTableCell } from './SheduleTableCell';

interface Props {}

interface MyCellProps extends CellProps<IShedule> {
  // add any additional props you want to pass to the cell component
}
interface MyFooterProps extends FooterProps<IShedule> {
  // add any additional props you want to pass to the cell component
}

interface CustomHeaderGroup<T extends Record<string, unknown>> extends HeaderGroup<T> {
  style?: React.CSSProperties;
}

const StyledTableCell = styled(MuiTableCell)(() => ({
  minWidth: '7vw',
}));

const SheduleTable: React.FC<Props> = () => {
  const { data } = useAppSelector((state) => state.shedule);
  const { columns } = useAppSelector((state) => state.columns);

  const dispatch = useDispatch();

  const tableData = useMemo(() => data, [data]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<IShedule>({
    columns,
    data: tableData,
  });

  useEffect(() => {
    const tableColumns = createTableData(data);

    const columns = [
      {
        Header: 'Doctor',
        accessor: 'userData.name',
      },
      ...tableColumns.map((item) => {
        return {
          Header: parseFormatDate(item.date),
          accessor: String(item.date),
          Cell: ({ cell }: MyCellProps) => {
            const id = cell.row.original.id;
            return returnSheduleTableCell(id);
          },
        };
      }),
    ];

    dispatch(actionColumns.columnsEffect(columns));
    dispatch(actionColumns.monthColumnsEffect(tableColumns));
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <MuiTable sx={{ minWidth: 650 }} {...getTableProps()} aria-label="simple table">
          <TableHead>
            {headerGroups.map((headerGroup, index) => {
              return (
                <TableRow {...headerGroup.getHeaderGroupProps()} key={headerGroup.headers[index].id}>
                  {headerGroup.headers.map((column: CustomHeaderGroup<IShedule>, index) => {
                    return (
                      <StyledTableCell
                        {...column.getHeaderProps()}
                        component="th"
                        scope="row"
                        key={column.Header?.toString()}
                      >
                        {column.render('Header')}
                      </StyledTableCell>
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
                    <StyledTableCell {...cell.getCellProps({})} component="th" scope="row" key={index}>
                      {cell.render('Cell')}
                    </StyledTableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </>
  );
};

export default SheduleTable;
