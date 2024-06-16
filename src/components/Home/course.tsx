import { Button } from "@/components/_ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/_ui/dialog";
import { Input } from "@/components/_ui/input";
import { Label } from "@/components/_ui/label";

export function Course() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="border-2 dark:border-white hover:bg-accentDark md:px-6 p-3 md:p-4 border-black w-60 min-w-fit text-sm !shadow-[5px_5px_1px_1px_#000000]">
          checkout tutorials
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Coming soon!</DialogTitle>
          <DialogDescription>
            I'm working on something special, subscribe to my newsletter to be
            notified as soon as i drop the tutorials
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="flex-1 gap-2 grid">
            <Label htmlFor="link" className="sr-only">
              Join newsletter
            </Label>
            <Input id="email" type="email" />
          </div>
          <Button
            type="submit"
            size="sm"
            className="px-3 !shadow-[5px_5px_1px_1px_#000000]"
          >
            <span className="">Join</span>
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              className="!shadow-[5px_5px_1px_1px_#000000]"
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
