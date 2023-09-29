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
import dayjs from 'dayjs';
import React, { CSSProperties, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useTable, CellProps, HeaderGroup } from 'react-table';
import { useAppSelector } from '../../hooks/dispatch';
import { actionColumns } from '../../store/slice/columns';
import { IShedule } from '../../types/data';
import { createTableData } from '../../utils/constants/data';
import { parseFormatDate } from '../../utils/helpers/formatDate';
import { stickyStyleWithBorder } from '../../utils/helpers/shedule-table';
import SheduleTableCell from './SheduleTableCell';

interface CustomHeaderGroup<T extends Record<string, unknown>> extends HeaderGroup<T> {
  style?: React.CSSProperties;
}

const StyledTableCell = styled(MuiTableCell)(() => ({
  minWidth: '9.5vw',
  borderRight: '1px solid #F1F3F5'
}));

const SheduleTable: React.FC = () => {
  const { data } = useAppSelector((state) => state.shedule);

  const dispatch = useDispatch();

  const tableData = useMemo(() => data, [data]);

  const columns = useMemo(() => {
    const tableColumns = createTableData(data);

    const tableColumn = [
      {
        Header: 'Doctor',
        accessor: 'userData.name'
      },
      ...tableColumns.map((item, index) => {
        const uniqueKey = `cell-${item.date}-${index}`;
        return {
          Header: parseFormatDate(dayjs(item.date)),
          accessor: String(item.date),
          Cell: ({ cell }: CellProps<IShedule>) => {
            const id = cell.row.original.id;

            return <SheduleTableCell key={uniqueKey} id={id} date={item.date} />;
          }
        };
      })
    ];

    dispatch(actionColumns.monthColumnsEffect(tableColumns));
    return tableColumn;
  }, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<IShedule>({
    columns,
    data: tableData
  });

  return (
    <>
      <TableContainer component={Paper}>
        <MuiTable sx={{ minWidth: 650 }} {...getTableProps()} aria-label="simple table">
          <TableHead>
            {headerGroups.map((headerGroup, index) => {
              return (
                <TableRow
                  {...headerGroup.getHeaderGroupProps()}
                  key={headerGroup.headers[index].id}
                >
                  {headerGroup.headers.map((column: CustomHeaderGroup<IShedule>, index) => {
                    const style: CSSProperties = stickyStyleWithBorder(index);
                    return (
                      <StyledTableCell
                        {...column.getHeaderProps({ style })}
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
                    <StyledTableCell
                      {...cell.getCellProps({ style: stickyStyleWithBorder(index) })}
                      component="th"
                      scope="row"
                      key={index}
                    >
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
