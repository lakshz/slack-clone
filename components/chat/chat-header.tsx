import { Hash } from "lucide-react";
import React from "react";
import { MobileToggle } from "@/components/mobile-toggle";
import { UserAvatar } from "@/components/ui/user-avatar";
import { SockerIndicator } from "@/components/socket-indicator";

interface ChatHeaderProps {
  workspaceId: string;
  name: string;
  type: "channel" | "conversation";
  imageUrl?: string;
}

export const ChatHeader = ({
  workspaceId,
  name,
  type,
  imageUrl,
}: ChatHeaderProps) => {
  return (
    <div className="text-md font-semibold px-5 flex items-center h-14 border-b border-b-neutral-200 dark:border-b-neutral-700 ">
      <MobileToggle workspaceId={workspaceId} />
      {type === "channel" && (
        <Hash className="w-5 h-5 mr-1 text-neutral-700 dark:text-neutral-100" />
      )}
      {type === "conversation" && (
        <UserAvatar src={imageUrl} className="mr-2 md:w-7 md:h-7" />
      )}
      <p className="text-md text-neutral-700 dark:text-neutral-100">{name}</p>
      <div className="ml-auto flex items-center">
        <SockerIndicator />
      </div>
    </div>
  );
};
