import React from "react";
import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { CableIcon, ImageIcon, TypeIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import EditorCanvas from "@/components/editor-canvas";

interface ComponentButtonProps {
  icon: React.ReactNode;
  tooltipText: string;
}

const ComponentButton: React.FC<ComponentButtonProps> = ({
  icon,
  tooltipText,
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon">
          {icon}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{tooltipText}</TooltipContent>
    </Tooltip>
  );
};

export default function DefaultPage() {
  return (
    <div className="h-screen flex overflow-clip">
      <div className="max-w-[250px] w-full border-r flex flex-col p-3 gap-4">
        <div className="flex flex-col gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={"outline"}>New Overlay</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Overlay</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-2 justify-center">
                <Label className="text-nowrap">Overlay Name</Label>
                <Input />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant={"outline"}>Cancel</Button>
                </DialogClose>
                <Button>Create</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label className="text-[13px] text-muted-foreground relative left-[7px]">
                Overlays
              </Label>
              <Sidebar />
            </div>
          </div>
        </div>

        <Separator orientation="horizontal" />

        <div className="flex flex-col gap-4">
          <div className="flex gap-1 flex-wrap">
            <ComponentButton icon={<TypeIcon />} tooltipText="Text" />
            <ComponentButton icon={<ImageIcon />} tooltipText="Image" />
            <ComponentButton icon={<CableIcon />} tooltipText="Serial Data" />
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-[13px] text-muted-foreground relative left-[7px]">
              Components
            </Label>
            <Sidebar />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full p-2 bg-[#0F0F10]">
        <EditorCanvas />
      </div>
    </div>
  );
}
