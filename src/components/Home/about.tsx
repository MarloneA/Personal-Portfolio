import React from "react";

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

export function Booking() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="border-2 bg-white hover:bg-slate-100 mr-6 px-6 p-4 border-black rounded-full text-black">
          let's chat about your ideas
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Book a consultation</DialogTitle>
          <DialogDescription>
            Please use this link to book a consultation with me.
          </DialogDescription>
        </DialogHeader>
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

export default function AboutMe() {
  return (
    <section className="place-content-center grid w-full h-full">
      <div className="flex bg-black p-20 rounded-2xl text-white">
        <div className="w-1/2">
          <p className="uppercase">about me</p>
          <h1 className="py-10 text-4xl text-white md:text-4xl dark:text-white leading-snug">
            20 minutes to transform your idea into the next startup success
          </h1>

          <h4 className="pb-10">
            Having worked with products that have raised more than 100million
            dollars in funding, I understand what it takes to make your product
            a success
          </h4>
          <Booking />
        </div>
        <div className="bg-black w-1/2 h-96">
          <iframe
            width="720"
            height="385"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
