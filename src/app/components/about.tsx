import React from "react";

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

export function Booking() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className=" border-2 border-black bg-white px-6 text-black p-4 rounded-full mr-6 hover:bg-slate-100">
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

export default function AboutMe() {
  return (
    <section className="grid h-full place-content-center w-full">
      <div className="bg-black text-white  rounded-2xl flex p-20">
        <div className="w-1/2">
          <p className="uppercase">about me</p>
          <h1 className="leading-snug	text-4xl md:text-4xl text-white dark:text-white motion-safe:animate-hero-text-reveal py-10">
            20 minutes to transform your idea into the next startup success
          </h1>

          <h4 className="pb-10">
            Having worked with products that have raised more than 100million
            dollars in funding, I understand what it takes to make your product
            a success
          </h4>
          <Booking />
        </div>
        <div className=" bg-black h-96 w-1/2">
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
