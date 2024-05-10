"use client";

import { cn } from "@/lib/utils";
import { Code2Icon, ImageIcon, LayoutDashboard, MessagesSquare, Music, Settings2, VideoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,  // Icon from lucide-react
    href: "/dashboard",
    color: "text-blue-500"
  },
  {
    label: "conversation",
    icon: MessagesSquare,  // Icon from lucide-react
    href: "/dashboard",
    color: "text-violet-500"
  },
  {
    label: "Image Generation",
    icon: ImageIcon,  // Icon from lucide-react
    href: "/dashboard",
    color: "text-red-500"
  },
  {
    label: "Video Generation",
    icon: VideoIcon,  // Icon from lucide-react
    href: "/dashboard",
    color: "text-yellow-500"
  },
  {
    label: "Music Generation",
    icon: Music,  // Icon from lucide-react
    href: "/dashboard",
    color: "text-orange-500"
  },
  {
    label: "Code Generation",
    icon: Code2Icon,  // Icon from lucide-react
    href: "/dashboard",
    color: "text-green-500"
  },
  {
    label: "Settings",
    icon: Settings2,  // Icon from lucide-react
    href: "/dashboard",
  },

]

const sidebar = () => {
  return (
  <div className="flex flex-col space-y-4 py-4 h-full bg-[#111827] text-white">
    <div className="px-3 py-3 flex-1">
        <Link href="/dashboard"  className="flex items-center pl-3 mb-14">
            <div className="relative w-10 h-10 mr-4">
              <Image fill alt="Logo" src="/logo.png" />
            </div>
            <h1 className="text-2xl font-bold">Jarvis</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route)=>(
            <Link
            href={route.href}
            key={route.href}
            className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer
             hover:text-white hover:bg-white/10 rounded-lg transition"
            >
            
              <div className="flex items-center">
                <route.icon className={cn("h-5 w-5 mr-3",route.color)}/>
                  {route.label}
              </div>
            </Link>
          ))}
        </div>
    </div>
  </div>
  );
};

export default sidebar;
