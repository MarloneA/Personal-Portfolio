"use client";

import { CopyIcon } from "@radix-ui/react-icons";
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
import { InlineWidget } from "react-calendly";

export function Booking() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="border-2 dark:border-white bg-black hover:bg-accentDark dark:bg-white mr-6 md:px-6 p-3 md:p-4 w-60 min-w-fit text-sm text-white hover:text-black dark:text-black border-black !shadow-[5px_5px_1px_1px_#000000]">
          book a consultation
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Book a meeting</DialogTitle>
          <DialogDescription>
            Please use this calendar to book a session with me.
          </DialogDescription>
        </DialogHeader>
        <InlineWidget url="https://calendly.com/marloneakidiva/30min" />
        <DialogDescription className="text-center">or</DialogDescription>
        <DialogDescription className="text-center">
          Copy this link to book a meeting with me
        </DialogDescription>

        <div className="flex items-center space-x-2">
          <div className="flex-1 gap-2 grid">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="https://calendly.com/marloneakidiva/30min"
              readOnly
            />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <CopyIcon className="w-4 h-4" />
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
