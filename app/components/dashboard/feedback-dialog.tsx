import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";



export function DialogDemo({ feedBack }: { feedBack: string }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">View</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle />
                    <DialogDescription>
                        {feedBack}
                    </DialogDescription>
                </DialogHeader>

            </DialogContent>
        </Dialog>
    )
}
