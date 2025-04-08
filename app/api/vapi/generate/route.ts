import {generateText} from "ai";
import {google} from "@ai-sdk/google";
import {connectDB} from "@/app/lib/mongoose";
import {Interview} from "@/app/lib/models/interview";

export async function  POST (req:Request, res:Response) {
    const { type, role, level, techstack, amount, userid } = await req.json();
    try {
        const { text: questions } = await generateText({
            model: google("gemini-2.0-flash-001"),
            prompt: `Prepare questions for a job interview.
            The job role is ${role}.
            The job experience level is ${level}.
            The tech stack used in the job is: ${techstack}.
            The focus between behavioural and technical questions should lean towards: ${type}.
            The amount of questions required is: ${amount}.
            Please return only the questions, without any additional text.
            The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters which might break the voice assistant.
            Return the questions formatted like this:
            ["Question 1", "Question 2", "Question 3"]
        
            Thank you! <3
    `,
        });

        const interviewData = {
            role: role,
            type: type,
            level: level,
            techstack: techstack.split(","),
            questions: JSON.parse(questions),
            userId: userid,
        };

        await connectDB();
        await Interview.insertOne(interviewData);0

        return Response.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("Error:", error);
        return Response.json({ success: false, error: error }, { status: 500 });
    }
}