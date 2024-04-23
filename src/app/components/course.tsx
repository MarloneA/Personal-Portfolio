import { CopyIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Course() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="border-2 dark:border-white border-black p-4 px-6 rounded-full w-60 hover:bg-slate-100 ">
          take a course
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Take a course</DialogTitle>
          <DialogDescription>
            I'm working on something special, subscribe to my newsletter to be
            notified as soon as i drop the course
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Join newsletter
            </Label>
            <Input id="email" type="email" />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="">Join</span>
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
