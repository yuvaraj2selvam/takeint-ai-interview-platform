"use client"

import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Input } from "../ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table"
import { Button } from "../ui/button"
import { useState } from "react"
import { Card, CardContent } from "../ui/card"

export const data: MockInterview[] = [
    {
        id: "1",
        title: "Frontend Technical Interview",
        status: "inProgress",
        createdAt: new Date("2025-04-20T10:00:00Z"),
        position: "Frontend Engineer",
        role: "Frontend Developer",
        type: "Technical",
        difficulty: "medium",
        tags: ["React", "JavaScript", "CSS"]
    },
    {
        id: "2",
        title: "System Design for Backend",
        status: "completed",
        createdAt: new Date("2025-03-15T15:30:00Z"),
        position: "Backend Engineer",
        role: "Backend Developer",
        type: "System Design",
        difficulty: "hard",
        tags: ["Scalability", "Databases", "Microservices"]
    },
    {
        id: "3",
        title: "Behavioral Round Practice",
        status: "completed",
        createdAt: new Date("2025-04-05T12:00:00Z"),
        position: "Software Engineer",
        role: "Full Stack Developer",
        type: "Behavioral",
        difficulty: "easy",
        tags: ["Communication", "Leadership", "Teamwork"]
    },
    {
        id: "4",
        title: "Data Structures & Algorithms",
        status: "inProgress",
        createdAt: new Date("2025-04-25T08:45:00Z"),
        position: "Software Engineer",
        role: "Backend Developer",
        type: "Technical",
        difficulty: "hard",
        tags: ["Algorithms", "Problem Solving", "Graphs"]
    },
    {
        id: "5",
        title: "Mobile Dev Interview",
        status: "completed",
        createdAt: new Date("2025-02-28T09:30:00Z"),
        position: "Mobile Engineer",
        role: "Android Developer",
        type: "Technical",
        difficulty: "medium",
        tags: ["Kotlin", "Jetpack", "UI Design"]
    },
    {
        id: "6",
        title: "Full Stack Interview Simulation",
        status: "inProgress",
        createdAt: new Date("2025-04-28T13:00:00Z"),
        position: "Full Stack Engineer",
        role: "Full Stack Developer",
        type: "Technical",
        difficulty: "medium",
        tags: ["Node.js", "React", "MongoDB"]
    },
    {
        id: "7",
        title: "Behavioral Interview for Tech Leads",
        status: "completed",
        createdAt: new Date("2025-03-21T16:00:00Z"),
        position: "Technical Lead",
        role: "Team Lead",
        type: "Behavioral",
        difficulty: "medium",
        tags: ["Leadership", "Conflict Resolution", "Mentorship"]
    },
    {
        id: "8",
        title: "System Design: Messaging System",
        status: "completed",
        createdAt: new Date("2025-03-10T10:30:00Z"),
        position: "Backend Engineer",
        role: "System Architect",
        type: "System Design",
        difficulty: "hard",
        tags: ["Pub/Sub", "Load Balancing", "Caching"]
    },
    {
        id: "9",
        title: "React Deep Dive",
        status: "inProgress",
        createdAt: new Date("2025-04-30T11:15:00Z"),
        position: "Frontend Engineer",
        role: "React Developer",
        type: "Technical",
        difficulty: "medium",
        tags: ["Hooks", "State Management", "Performance"]
    },
    {
        id: "10",
        title: "AI/ML Position Interview",
        status: "completed",
        createdAt: new Date("2025-03-08T09:00:00Z"),
        position: "Machine Learning Engineer",
        role: "ML Engineer",
        type: "Technical",
        difficulty: "hard",
        tags: ["Model Evaluation", "Python", "Scikit-learn"]
    },
    {
        id: "11",
        title: "SQL and Data Modeling",
        status: "completed",
        createdAt: new Date("2025-04-01T14:00:00Z"),
        position: "Data Analyst",
        role: "Data Specialist",
        type: "Technical",
        difficulty: "easy",
        tags: ["SQL", "Normalization", "Joins"]
    },
    {
        id: "12",
        title: "Cloud System Design",
        status: "inProgress",
        createdAt: new Date("2025-04-29T10:00:00Z"),
        position: "Cloud Architect",
        role: "DevOps Engineer",
        type: "System Design",
        difficulty: "hard",
        tags: ["AWS", "Kubernetes", "Scalability"]
    },
    {
        id: "13",
        title: "Behavioral + Tech Round",
        status: "completed",
        createdAt: new Date("2025-03-17T17:00:00Z"),
        position: "Product Engineer",
        role: "Software Developer",
        type: "Behavioral",
        difficulty: "medium",
        tags: ["Culture Fit", "Technical Communication", "Problem Solving"]
    },
    {
        id: "14",
        title: "Junior Dev Mock Interview",
        status: "completed",
        createdAt: new Date("2025-02-15T09:30:00Z"),
        position: "Junior Developer",
        role: "Entry-Level Developer",
        type: "Technical",
        difficulty: "easy",
        tags: ["Loops", "Basic Algorithms", "Debugging"]
    },
    {
        id: "15",
        title: "Data Engineering Practical",
        status: "inProgress",
        createdAt: new Date("2025-04-27T10:00:00Z"),
        position: "Data Engineer",
        role: "Big Data Engineer",
        type: "Technical",
        difficulty: "hard",
        tags: ["ETL", "Spark", "Data Pipelines"]
    }
];

export type MockInterview = {
    id: string;
    title: string;
    status: "inProgress" | "completed";
    createdAt: Date;
    position: string;
    role: string; // e.g., "Frontend Developer", "Data Engineer"
    type: string; // e.g., "Technical", "Behavioral", "System Design"
    difficulty: "easy" | "medium" | "hard";
    tags: string[];
};


export const columns: ColumnDef<MockInterview>[] = [
    {
        accessorKey: "title",
        header: "Title",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("title")}</div>
        ),
    },
    {
        accessorKey: "status",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Status
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => {
            const status = row.getValue("status");
            const isInProgress = status === "inProgress";

            return isInProgress ? (
                <Button className="py-2 px-3 w-[160px] rounded-full bg-green-500 text-white text-sm font-medium hover:bg-green-600">
                    Take Interview
                </Button>
            ) : (
                <div className="py-2 px-3 w-[160px] rounded-full bg-dark text-green-400 text-sm text-center font-medium">
                    Completed
                </div>
            );
        },
        enableSorting: true,
    }
,
    {
        accessorKey: "createdAt",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    CreatedAt
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue<Date>("createdAt").toLocaleDateString()}</div>,
    },
    {
        accessorKey: "role",
        header: ({ column }) => {
            return (
                "Role"
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("role")}</div>,
    },
    {
        accessorKey: "type",
        header: ({ column }) => {
            return (
                "Type"
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("type")}</div>,
    },
    {
        accessorKey: "difficulty",
        header: ({ column }) => {
            return (
                "Difficulty"
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("difficulty")}</div>,
    },
]

export function DataTableDemo() {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 5,
    });

    const table = useReactTable({
        columns,
        data,
        state: {
            sorting,
            pagination,
        },
        onSortingChange: setSorting,
        onPaginationChange: setPagination,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        manualPagination: false, 
        pageCount: Math.ceil(data.length / pagination.pageSize),
    });

    return (
        <div className="space-y-4">
            <Table className="w-full px-4">
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableHead key={header.id} className="p-2 text-left border-b-2  border-gray-400 border-dotted">
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody className="">
                    {table.getRowModel().rows.map((row) => (
                        <TableRow className="p-4 rounded-full hover:bg-green" key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <TableCell key={cell.id} className="p-4">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                    Page {table.getState().pagination.pageIndex + 1} of{" "}
                    {table.getPageCount()}
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

