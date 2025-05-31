"use server";

import { z } from "zod";
import { FormState } from "../components/auth/auth-form";
import { auth } from "../(auth-pages)/auth";

const CreateInterviewSchema = z.object({
  name: z.string().trim().min(2),
  type: z.string().trim().min(2),
  role: z.string().trim().min(2),
  techStack: z.string().trim().min(2),
  experience: z.string().trim().min(2),
  difficultyLevel: z.string().trim().min(2),
  noOfQuestions: z.number().nonnegative(),
  userId: z.string().nonempty(),
});

export async function handleFormAction(
  prevState: FormState,
  formData: FormData
) {
  try {
    const Session = await auth();
    const userId = Session?.user?.id;

    const data = {
      name: formData.get("name"),
      type: formData.get("type"),
      role: formData.get("role"),
      techStack: formData.get("techStack"),
      experience: formData.get("experience"),
      difficultyLevel: formData.get("difficultyLevel"),
      noOfQuestions: formData.get("numberOfQuestions")
        ? parseInt(formData.get("numberOfQuestions") as string)
        : null,
      userId: userId,
    };
    await CreateInterviewSchema.parseAsync(data);

    const createInterviewRes = await fetch(
      "http://localhost:3000/api/interview/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (createInterviewRes.ok) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (e) {
    return { success: false };
  }
}
