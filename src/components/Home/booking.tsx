"use client";

import { CopyIcon } from "@radix-ui/react-icons";

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
import { InlineWidget } from "react-calendly";

export function Booking() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-60 text-sm border-2 dark:border-white dark:bg-white  border-black bg-black p-3 md:px-6 dark:text-black text-white md:p-4 mr-6 hover:bg-accentDark hover:text-black">
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
          <div className="grid flex-1 gap-2">
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
            <CopyIcon className="h-4 w-4" />
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
