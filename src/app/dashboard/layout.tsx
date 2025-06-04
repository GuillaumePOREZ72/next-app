"use client";

import Link from "next/link";
import Image from "next/image";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from "@/components/ui/sidebar";
import {
  PanelLeftIcon,
  HomeIcon,
  SettingsIcon,
  UserIcon,
  LogOutIcon,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar className="border-r border-gray-200 dark:border-gray-800">
        <SidebarHeader className="p-6 border-b border-gray-200 dark:border-gray-800">
          <Link href="/dashboard" className="flex items-center gap-3">
            <Image
              src="/globe.svg"
              alt="Application Logo"
              width={28}
              height={28}
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Dashboard
            </span>
          </Link>
        </SidebarHeader>
        <SidebarContent className="p-4">
          <SidebarMenu className="space-y-2">
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={true}
                className="w-full justify-start text-left hover:bg-blue-50 dark:hover:bg-blue-950 data-[active=true]:bg-blue-100 dark:data-[active=true]:bg-blue-900"
              >
                <Link
                  href="/dashboard"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg"
                >
                  <HomeIcon className="h-5 w-5" />
                  <span className="font-medium">Vue d'ensemble</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="w-full justify-start text-left hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Link
                  href="/dashboard/profile"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg"
                >
                  <UserIcon className="h-5 w-5" />
                  <span className="font-medium">Profil</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="w-full justify-start text-left hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Link
                  href="/dashboard/settings"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg"
                >
                  <SettingsIcon className="h-5 w-5" />
                  <span className="font-medium">Paramètres</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-4 border-t border-gray-200 dark:border-gray-800">
          <SidebarMenuButton
            asChild
            className="w-full justify-start text-left hover:bg-red-50 dark:hover:bg-red-950 text-red-600 dark:text-red-400"
          >
            <button className="flex items-center gap-3 px-3 py-2 rounded-lg">
              <LogOutIcon className="h-5 w-5" />
              <span className="font-medium">Déconnexion</span>
            </button>
          </SidebarMenuButton>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset className="bg-gray-50 dark:bg-gray-900">
        <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60 px-6">
          <SidebarTrigger className="md:hidden">
            <PanelLeftIcon className="h-5 w-5" />
          </SidebarTrigger>
          <div className="flex-1" />
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Bienvenue dans votre espace
            </span>
          </div>
        </header>
        <main className="flex-1 p-6 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
