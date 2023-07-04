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
import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useTable, CellProps, HeaderGroup } from 'react-table';
import { useAppSelector } from '../../hooks/dispatch';
import { actionColumns } from '../../store/columns';
import { IShedule } from '../../types/data';
import { createTableData } from '../../utils/constants/data';
import { parseFormatDate } from '../../utils/helpers/formatDate';
import { returnSheduleTableCell } from './SheduleTableCell';

interface Props {}

interface MyCellProps extends CellProps<IShedule> {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
