"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "./ui/label";
import { EllipsisIcon, PencilIcon, TrashIcon } from "lucide-react";

interface SidebarItemProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

const Sidebar: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-0.5">
      <SidebarItem
        text="Overlay 1"
        isSelected={selectedItem === "Overlay 1"}
        onClick={() => setSelectedItem("Overlay 1")}
      />
      <SidebarItem
        text="Overlay 2"
        isSelected={selectedItem === "Overlay 2"}
        onClick={() => setSelectedItem("Overlay 2")}
      />
    </div>
  );
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  text,
  isSelected,
  onClick,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      onClick={onClick}
      className={`w-full h-fit py-2 px-2 flex justify-between items-center rounded-md transition-colors duration-200 cursor-pointer ${
        isSelected || isDropdownOpen ? "bg-muted" : "hover:bg-muted"
      }`}
    >
      <Label>{text}</Label>
      <DropdownMenu onOpenChange={(open) => setIsDropdownOpen(open)}>
        <DropdownMenuTrigger
          className={`${
            isDropdownOpen ? "bg-black/30" : ""
          } hover:bg-black/30 rounded-sm transition-colors duration-200 p-1`}
        >
          <EllipsisIcon className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <PencilIcon className="h-4 w-4 mr-1" />
            Rename
          </DropdownMenuItem>
          <DropdownMenuItem>
            <TrashIcon className="h-4 w-4 mr-1" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export { Sidebar };
