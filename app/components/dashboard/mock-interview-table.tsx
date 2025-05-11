"use client"

import * as React from "react"
import {
    ColumnDef,
    PaginationState,
    SortingState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react"
import { FilterFn } from "@tanstack/react-table";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table"
import { Button } from "../ui/button"
import { useEffect, useState } from "react"

export type MockInterview = {
    id: string;
    title: string;
    isCompleted: boolean;
    createdAt: Date;
    position: string;
    role: string;
    type: string;
    difficulty: "1" | "2" | "3";
    tags: string[];
};

export let data: MockInterview[] = [
    {
        id: "1",
        title: "Frontend Technical Interview",
        isCompleted: false,
        createdAt: new Date("2025-04-20T10:00:00Z"),
        position: "Frontend Engineer",
        role: "Frontend Developer",
        type: "Technical",
        difficulty: "2",
        tags: ["React", "JavaScript", "CSS"]
    },
    {
        id: "2",
        title: "System Design for Backend",
        isCompleted: false,
        createdAt: new Date("2025-03-15T15:30:00Z"),
        position: "Backend Engineer",
        role: "Backend Developer",
        type: "System Design",
        difficulty: "3",
        tags: ["Scalability", "Databases", "Microservices"]
    },
    {
        id: "3",
        title: "Behavioral Round Practice",
        isCompleted: false,
        createdAt: new Date("2025-04-05T12:00:00Z"),
        position: "Software Engineer",
        role: "Full Stack Developer",
        type: "Behavioral",
        difficulty: "1",
        tags: ["Communication", "Leadership", "Teamwork"]
    },
    {
        id: "4",
        title: "Data Structures & Algorithms",
        isCompleted: false,
        createdAt: new Date("2025-04-25T08:45:00Z"),
        position: "Software Engineer",
        role: "Backend Developer",
        type: "Technical",
        difficulty: "3",
        tags: ["Algorithms", "Problem Solving", "Graphs"]
    },
    {
        id: "5",
        title: "Mobile Dev Interview",
        isCompleted: false,
        createdAt: new Date("2025-02-28T09:30:00Z"),
        position: "Mobile Engineer",
        role: "Android Developer",
        type: "Technical",
        difficulty: "2",
        tags: ["Kotlin", "Jetpack", "UI Design"]
    },
    {
        id: "6",
        title: "Full Stack Interview Simulation",
        isCompleted: false,
        createdAt: new Date("2025-04-28T13:00:00Z"),
        position: "Full Stack Engineer",
        role: "Full Stack Developer",
        type: "Technical",
        difficulty: "2",
        tags: ["Node.js", "React", "MongoDB"]
    },
    {
        id: "7",
        title: "Behavioral Interview for Tech Leads",
        isCompleted: false,
        createdAt: new Date("2025-03-21T16:00:00Z"),
        position: "Technical Lead",
        role: "Team Lead",
        type: "Behavioral",
        difficulty: "2",
        tags: ["Leadership", "Conflict Resolution", "Mentorship"]
    },
    {
        id: "8",
        title: "System Design: Messaging System",
        isCompleted: false,
        createdAt: new Date("2025-03-10T10:30:00Z"),
        position: "Backend Engineer",
        role: "System Architect",
        type: "System Design",
        difficulty: "3",
        tags: ["Pub/Sub", "Load Balancing", "Caching"]
    },
    {
        id: "9",
        title: "React Deep Dive",
        isCompleted: false,
        createdAt: new Date("2025-04-30T11:15:00Z"),
        position: "Frontend Engineer",
        role: "React Developer",
        type: "Technical",
        difficulty: "2",
        tags: ["Hooks", "State Management", "Performance"]
    },
    {
        id: "10",
        title: "AI/ML Position Interview",
        isCompleted: false,
        createdAt: new Date("2025-03-08T09:00:00Z"),
        position: "Machine Learning Engineer",
        role: "ML Engineer",
        type: "Technical",
        difficulty: "3",
        tags: ["Model Evaluation", "Python", "Scikit-learn"]
    },
    {
        id: "11",
        title: "SQL and Data Modeling",
        isCompleted: false,
        createdAt: new Date("2025-04-01T14:00:00Z"),
        position: "Data Analyst",
        role: "Data Specialist",
        type: "Technical",
        difficulty: "1",
        tags: ["SQL", "Normalization", "Joins"]
    },
    {
        id: "12",
        title: "Cloud System Design",
        isCompleted: false,
        createdAt: new Date("2025-04-29T10:00:00Z"),
        position: "Cloud Architect",
        role: "DevOps Engineer",
        type: "System Design",
        difficulty: "3",
        tags: ["AWS", "Kubernetes", "Scalability"]
    },
    {
        id: "13",
        title: "Behavioral + Tech Round",
        isCompleted: false,
        createdAt: new Date("2025-03-17T17:00:00Z"),
        position: "Product Engineer",
        role: "Software Developer",
        type: "Behavioral",
        difficulty: "2",
        tags: ["Culture Fit", "Technical Communication", "Problem Solving"]
    },
    {
        id: "14",
        title: "Junior Dev Mock Interview",
        isCompleted: false,
        createdAt: new Date("2025-02-15T09:30:00Z"),
        position: "Junior Developer",
        role: "Entry-Level Developer",
        type: "Technical",
        difficulty: "1",
        tags: ["Loops", "Basic Algorithms", "Debugging"]
    },
    {
        id: "15",
        title: "Data Engineering Practical",
        isCompleted: false,
        createdAt: new Date("2025-04-27T10:00:00Z"),
        position: "Data Engineer",
        role: "Big Data Engineer",
        type: "Technical",
        difficulty: "3",
        tags: ["ETL", "Spark", "Data Pipelines"]
    }
];

const levels: Record<string, string> = {
    "1": "Easy",
    "2": "Medium",
    "3": "Hard",
};

export const columns: ColumnDef<MockInterview>[] = [
    {
        accessorKey: "title",
        header: ({ column }) => {
            const isSorted = column.getIsSorted();
            const handleSort = () => column.toggleSorting(isSorted === "asc");

            return (
                <Button
                    variant="ghost"
                    onClick={handleSort}
                    className="flex items-center gap-1"
                    aria-label={`Sort by CreatedAt ${isSorted === "asc" ? "descending" : "ascending"}`}
                >
                    Title
                    {isSorted === "asc" && <ArrowUp className="w-4 h-4" />}
                    {isSorted === "desc" && <ArrowDown className="w-4 h-4" />}
                    {!isSorted && <ArrowUpDown className="w-4 h-4 opacity-50" />}
                </Button>
            );
        },
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("title")}</div>
        ),
        size: 100
    }
    ,
    {
        accessorKey: "createdAt",
        header: ({ column }) => {
            const isSorted = column.getIsSorted();
            const handleSort = () => column.toggleSorting(isSorted === "asc");

            return (
                <Button
                    variant="ghost"
                    onClick={handleSort}
                    className="flex items-center gap-1"
                    aria-label={`Sort by CreatedAt ${isSorted === "asc" ? "descending" : "ascending"}`}
                >
                    CreatedAt
                    {isSorted === "asc" && <ArrowUp className="w-4 h-4" />}
                    {isSorted === "desc" && <ArrowDown className="w-4 h-4" />}
                    {!isSorted && <ArrowUpDown className="w-4 h-4 opacity-50" />}
                </Button>
            );
        },
        enableSorting: true,
        cell: ({ row }) => <div className="lowercase">{row.getValue<Date>("createdAt").toLocaleDateString()}</div>,
        size: 100

    },
    {
        accessorKey: "role",
        header: ({ column }) => {
            return (
                "Role"
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("role")}</div>,
        size: 100

    },
    {
        accessorKey: "type",
        header: ({ column }) => {
            return (
                "Type"
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("type")}</div>,
        size: 100

    },
    {
        accessorKey: "difficulty",
        header: ({ column }) => {
            const isSorted = column.getIsSorted();
            const handleSort = () => column.toggleSorting(isSorted === "asc");

            return (
                <Button
                    variant="ghost"
                    onClick={handleSort}
                    className="flex items-center gap-1"
                    aria-label={`Sort by CreatedAt ${isSorted === "asc" ? "descending" : "ascending"}`}
                >
                    Difficulty
                    {isSorted === "asc" && <ArrowUp className="w-4 h-4" />}
                    {isSorted === "desc" && <ArrowDown className="w-4 h-4" />}
                    {!isSorted && <ArrowUpDown className="w-4 h-4 opacity-50" />}
                </Button>
            );
        },
        cell: ({ row }) => {
            const type: "1" | "2" | "3" = row.getValue("difficulty");
            return (
                <div className={`flex rounded-4xl justify-center items-center text-center ${type == "1" ? "bg-[#46c6c2]" : type == "2" ? "bg-[#ffb700]" : "bg-[#f63737]"}`}>

                    <span className="text-center p-2 ">{levels[row.getValue("difficulty") as string]}</span>
                </div>
            )
        },
        enableSorting: true,
        enableResizing: true,
        size: 100

    },
    {
        accessorKey: "isCompleted",
        header: ({ column }) => "Status",
        cell: ({ row }) => {
            const status = row.getValue("isCompleted");
            const isInProgress = status === false;

            return isInProgress && (
                <div className="w-[160px]">
                    <Button className="w-full cursor-pointer py-4 px-4 rounded-full bg-[#1d243c] text-sm font-semibold text-center text-white hover:bg-black transition-colors duration-200">
                        <span className=" relative flex items-center gap-2">
                            <span>Take Interview</span>
                            <span className="relative flex items-center size-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-200 opacity-75"></span>
                                <span className="relative inline-flex size-3 rounded-full bg-sky-400"></span>
                            </span>
                        </span>
                    </Button>
                </div>
            )
        },
    }
]
type InterviewTableProps = {
    globalFilterValue: string;
};


const multiColumnTextFilter: FilterFn<any> = (row, columnId, filterValue) => {
    const title = row.getValue<string>('title')?.toLowerCase().trim();
    const role = row.getValue<string>('role')?.toLowerCase().trim();
    const value = (filterValue as string).toLowerCase().trim();

    return title.includes(value) || role.includes(value);
};



export function MockInterviewTable({ globalFilterValue }: InterviewTableProps) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [globalFilter, setGlobalFilter] = useState<any>("")
    const [pagination, setpagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 5
    })

    useEffect(() => {
        setGlobalFilter(globalFilterValue.trim() || "");
    }, [globalFilterValue]);

    // data = data.filter(item => !item.isCompleted);

    const table = useReactTable({
        columns,
        data,
        state: {
            sorting,
            globalFilter,
            pagination
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,
        onPaginationChange: setpagination,
        getFilteredRowModel: getFilteredRowModel(),
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        manualPagination: false,
    });

    return (
        <div className="space-y-4 bg-white px-10 py-4 rounded-4xl z-50">
            <Table className="w-full h-full overflow-auto">
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableHead key={header.id} style={{ width: header.getSize() }} className="p-2 bg-transparent text-left border-b-2  border-gray-400 border-dotted">
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody className="">
                    {table.getRowModel().rows.map((row) => (
                        <TableRow className="p-4 border-none rounded-[45px] hover:bg-[#e7e9fb]" key={row.id}>
                            {row.getVisibleCells().map((cell, i) => {
                                const isFirst = i === 0;
                                const isLast = i === row.getVisibleCells().length - 1;
                                return (
                                    <TableCell
                                        key={cell.id}
                                        style={{ width: cell.column.getSize() }}
                                        className={`p-4 ${isFirst ? 'rounded-l-[45px]' : ''
                                            } ${isLast ? 'rounded-r-[45px]' : ''}`}
                                    >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                    {table.getState().pagination.pageIndex + 1} of{' '}
                    {table.getPageCount().toLocaleString()}
                </div>
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}

