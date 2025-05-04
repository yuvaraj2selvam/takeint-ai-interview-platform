"use client";

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';


const mockInterviewQuestions = [
    {
        label: "What type of interview would you like to practice?",
        name: "type",
        type: "input",
        placeholder: "e.g., Technical, Behavioral, System Design",
    },
    [{
        label: "What role are you focusing on?",
        name: "role",
        type: "input",
        placeholder: "e.g., Frontend Developer, Data Scientist",
    },
    {
        label: "Which tech stack would you like to focus on?",
        name: "techStack",
        type: "input",
        placeholder: "e.g., React, Node.js, Python",
    }],
    [{
        label: "How many years of experience do you have?",
        name: "experience",
        type: "select",
        options: ["0-1 years", "1-3 years", "3-5 years", "5-8 years", "8+ years"],
    },
    {
        label: "Preferred difficulty level?",
        name: "difficulty",
        type: "select",
        options: ["Easy", "Medium", "Hard"],
    }],
    [{
        label: "Number of questions?",
        name: "numberOfQuestions",
        type: "select",
        options: ["5", "8", "10", "15"],
    },
    {
        label: "Mock Interview Title",
        name: "mockTitle",
        type: "input",
        placeholder: "e.g., Google Frontend Tech Mock",
    }],
];


const CreateInterviewForm = () => {
    return (
        <Card className="flex flex-col w-full max-w-4xl z-10 p-4 md:p-8 bg-transparent border-none shadow-none">
            <CardHeader className="p-0 mb-4">
                <CardTitle className="text-dark text-xl md:text-2xl text-center md:text-left">
                    Customize your mock interview to suit your needs.
                </CardTitle>
            </CardHeader>

            <CardContent className="p-0">
                <form className="flex flex-col gap-6">
                    {mockInterviewQuestions.map((item, index) => {
                        if (Array.isArray(item)) {
                            return (
                                <section
                                    key={index}
                                    className="flex flex-col gap-4 md:flex-row md:gap-6 w-full"
                                >
                                    {item.map((question, subIndex) => (
                                        <div
                                            key={`${index}-${subIndex}`}
                                            className="flex flex-col w-full md:flex-1 gap-2"
                                        >
                                            <Label htmlFor={question.name}>{question.label}</Label>
                                            {question.type === "input" ? (
                                                <Input
                                                    type="text"
                                                    name={question.name}
                                                    className="text-sm"
                                                    placeholder={question.placeholder}
                                                    required
                                                />
                                            ) : (
                                                question.type === "select" &&
                                                Array.isArray(question.options) && (
                                                    <Select required>
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectGroup >
                                                                {question.options.map((option, i) => (
                                                                    <SelectItem key={i} value={option}>
                                                                        {option}
                                                                    </SelectItem>
                                                                ))}
                                                            </SelectGroup>
                                                        </SelectContent>
                                                    </Select>
                                                )
                                            )}
                                        </div>
                                    ))}
                                </section>
                            );
                        } else {
                            const question = item;
                            return (
                                <section
                                    key={index}
                                    className="flex flex-col gap-2 w-full"
                                >
                                    <Label htmlFor={question.name}>{question.label}</Label>
                                    {question.type === "input" ? (
                                        <Input
                                            type="text"
                                            name={question.name}
                                            className="text-sm"
                                            placeholder={question.placeholder}
                                            required
                                        />
                                    ) : (
                                            question.type === "select"
                                            && 'options' in question
                                            && Array.isArray(question.options)
                                            && Array.isArray(question.options) && (
                                            <Select required>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder={question.options[0]} />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        {question.options.map((option, i) => (
                                                            <SelectItem key={i} value={option}>
                                                                {option}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        )
                                    )}
                                </section>
                            );
                        }
                    })}

                    <Button
                        type="submit"
                        className="p-4 text-base md:text-lg font-medium hover:bg-green transition-all duration-300 hover:text-black w-full md:w-auto"
                    >
                        Create Interview
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};


export default CreateInterviewForm