import React, {useMemo, useState} from 'react'
import { useTable, usePagination } from 'react-table'
import TableData from './TableData.json'
import {COLUMNS} from "./Columns";
import './Table.css'

const MainTable2 = () =>
{
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => TableData, [])
    // @ts-ignore
    const tableInstance = useTable({columns, data,initialState: { pageIndex: 0}}, usePagination)
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    const {getTableProps, getTableBodyProps, headerGroups, prepareRow,page, canPreviousPage, canNextPage, pageOptions, pageCount, gotoPage, nextPage, previousPage, setPageSize, state: { pageIndex, pageSize}}= tableInstance

        return (
        <div id="table">
      <pre>
        {/*<code>*/}
        {/*  {JSON.stringify(*/}
        {/*      {*/}
        {/*          pageIndex,*/}
        {/*          pageSize,*/}
        {/*          pageCount,*/}
        {/*          canNextPage,*/}
        {/*          canPreviousPage,*/}
        {/*      },*/}
        {/*      null,*/}
        {/*      2*/}
        {/*  )}*/}
        {/*</code>*/}
      </pre>
            <table {...getTableProps()}>
                <thead>
                {
                    headerGroups.map((headerGroup:any) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>{
                            headerGroup.headers.map((column: any) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {page.map((row: any) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>{
                            row.cells.map((cell:any) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })
                        }
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <div className="pagination">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'First Page'}
                </button>{' '}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'Previous'}
                </button>{' '}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'Next'}
                </button>{' '}
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'Last Page'}
                </button>{' '}
                <span className="pageNumber">
                  Page{' '}
                    <strong>{pageIndex + 1} of {pageOptions.length}</strong>{' '}
                </span>
                <span>
                 | Go to page:{' '}
                    <input className="pageNumber"
                        type="number"
                        // defaultValue={pageIndex + 1}
                        defaultValue={pageIndex}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(page)
                        }}
                        style={{ width: '100px' }}
                    />
                 </span>{' '}
                <select className="pageNumber"
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}>
                    {[4,6,8,10].map(pageSize => (
                        <option key={pageSize} value={pageSize}>Show {pageSize}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default MainTable2