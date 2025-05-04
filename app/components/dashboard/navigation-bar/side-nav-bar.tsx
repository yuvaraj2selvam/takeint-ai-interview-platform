import Link from "next/link";
import { TabsList, TabsTrigger } from "../../ui/tabs";


export const Tabitems = [
    { value: "Dashboard", key: "dashboard" }, // Overview of all activities, stats, recommendations
    { value: "Live Interviews", key: "liveinterview" }, // Predefined company-specific interviews (Amazon, Google, etc.)
    { value: "Mock Interviews", key: "mockinterview" },  // Practice with AI-generated random questions
    { value: "Create Interview", key: "createinterview" }, // Manually create custom interview flows
    { value: "Interview Sessions", key: "interviewsession" }, // View & manage all ongoing and past interview sessions
    { value: "Feedback & Scores", key: "feedbackscores" },
];

export function AppSidebar() {
    return (
        <div className="w-2/3 max-w-[300px] transform translate-x-0 opacity-100 transition-all duration-[2s] ease-in-out fixed lg:hidden z-50 h-full items-center py-10 flex flex-col top-0 left-0 bg-white">
            <Link className="flex items-center" href={"/"}>
                <h3 className='text-2xl border-[1px] border-black rounded-2xl px-1.5 py-2 font-semibold flex items-center'><span className='font-bold text-4xl'>T</span>akeInt</h3>
            </Link>
            <TabsList className='gap-2.5 bg-transparent  h-full mt-5 px-1 flex-col items-start py-6 rounded-r-full rounded-l-full'>
                {
                    Tabitems.map((item, index) => <TabsTrigger className='py-1 text-sm px-3 rounded-2xl' key={index} value={item.key}>{item.value}</TabsTrigger>)
                }
            </TabsList>
        </div>
    )
}
