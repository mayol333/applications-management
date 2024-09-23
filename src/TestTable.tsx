import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import styled from "styled-components";

interface Application {
    companyName: string;
    date: string;
    possibleSalary: string;
    status: string;
}

const data: Application[] = [
    {
        companyName: "MasterBorn",
        date: "23.09.2024",
        possibleSalary: "4000-5000",
        status: "No answer",
    },
    {
        companyName: "Yato",
        date: "23.09.2024",
        possibleSalary: "5000-7000",
        status: "No answer",
    },
    {
        companyName: "OXOO",
        date: "23.09.2024",
        possibleSalary: "9000-10000",
        status: "Declined",
    },
];

const columnHelper = createColumnHelper<Application>();

const columns = [
    columnHelper.accessor("companyName", {
        header: () => "Company Name",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("date", {
        header: () => "Date",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("possibleSalary", {
        header: () => "Possible Salary",
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("status", {
        header: () => "Status",
        cell: (info) => info.getValue(),
    }),
];

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const Th = styled.th`
    text-align: left;
    padding: 10px;
`;

export const Td = styled.td`
    padding: 10px;
`;

export const TableRow = styled.tr`
    border: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const TestTable = () => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <Table>
            <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <Th key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                          header.column.columnDef.header,
                                          header.getContext()
                                      )}
                            </Th>
                        ))}
                    </TableRow>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <Td key={cell.id}>
                                {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                )}
                            </Td>
                        ))}
                    </TableRow>
                ))}
            </tbody>
        </Table>
    );
};
