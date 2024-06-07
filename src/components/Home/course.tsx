import { Button } from "@/components/__ui__/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/__ui__/dialog";
import { Input } from "@/components/__ui__/input";
import { Label } from "@/components/__ui__/label";

export function Course() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="border-2 dark:border-white hover:bg-accentDark md:px-6 p-3 md:p-4 border-black w-60 min-w-fit text-sm">
          take a course
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Coming soon!</DialogTitle>
          <DialogDescription>
            I'm working on something special, subscribe to my newsletter to be
            notified as soon as i drop the course
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="flex-1 gap-2 grid">
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
