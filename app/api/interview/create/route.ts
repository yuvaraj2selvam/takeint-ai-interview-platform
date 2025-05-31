import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { prisma } from "@/prisma/prisma";

export async function POST(req: Request, res: Response) {
  const {
    name,
    type,
    role,
    techStack,
    difficultyLevel,
    experience,
    noOfQuestions,
    userId,
  } = await req.json();

  try {
    const { text: GeneratedQuestions } = await generateText({
      model: google("gemini-2.0-flash-001"),
      prompt: `Prepare questions for a job interview.
            The job role is ${role}.
            The job experience Years is ${experience}.
            The tech stack used in the job is: ${techStack}.
            The Prefered Level of Difficulty is:${difficultyLevel}
            The focus between behavioural and technical questions should lean towards: ${type}.
            The amount of questions required is: ${noOfQuestions}.
            Please return only the questions, without any additional text.
            The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters which might break the voice assistant.
            Return the questions formatted like this:
            ["Question 1", "Question 2", "Question 3"]
        
            Thank you! <3
    `,
    });

    const interviewData = {
      name: name as string,
      role: role as string,
      type: type as string,
      techStack: (techStack as string).split(","),
      experience: experience as string,
      noOfQuestions: noOfQuestions,
      difficultyLevel: difficultyLevel as string,
      userId: userId as string,
      interviewText: GeneratedQuestions,
    };

    await prisma.interview.create({
      data: {
        ...interviewData,
      },
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ success: false, error: error }, { status: 500 });
  }
}
