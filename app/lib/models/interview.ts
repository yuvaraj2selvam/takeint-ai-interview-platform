import mongoose, {Schema} from "mongoose";

const InterviewSchema = new Schema(
    {
        role: { type: String, required: true },
        type: { type: String, required: true },
        level: { type: String, required: true },
        techstack:[{ type: String, required: true }],
        questions: [{ type: String, required: true }],
        userid: { type: String, required: true },
    },
    { timestamps: true }
);

export const Interview=mongoose.models?.Interview || mongoose.model("Interview", InterviewSchema);
