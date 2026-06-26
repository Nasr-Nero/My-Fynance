"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, TrendingUp, Receipt, LogOut } from "lucide-react";
import clsx from "clsx";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Produits", href: "/produits", icon: Package },
  { name: "Ventes", href: "/ventes", icon: TrendingUp },
  { name: "Dépenses", href: "/depenses", icon: Receipt },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 border-r border-border bg-card h-screen fixed top-0 left-0 flex flex-col shadow-[2px_0_12px_rgba(0,0,0,0.02)] z-10">
      <div className="h-16 flex items-center px-6 border-b border-border">
        <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center mr-3 shadow-md">
          <span className="text-white font-bold text-lg leading-none">M</span>
        </div>
        <span className="font-semibold text-lg text-text-primary tracking-tight">My Fynance</span>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "group flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-all duration-200",
                isActive
                  ? "bg-accent/10 text-accent"
                  : "text-text-secondary hover:bg-card-hover hover:text-text-primary"
              )}
            >
              <item.icon
                className={clsx(
                  "mr-3 flex-shrink-0 h-5 w-5 transition-colors duration-200",
                  isActive ? "text-accent" : "text-text-secondary group-hover:text-text-primary"
                )}
                aria-hidden="true"
              />
              {item.name}
              {isActive && (
                <span className="absolute left-0 w-1 h-6 bg-accent rounded-r-full" />
              )}
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-border">
        <button className="flex items-center w-full px-3 py-2.5 text-sm font-medium rounded-xl text-text-secondary hover:bg-card-hover hover:text-error transition-all duration-200 group">
          <LogOut className="mr-3 h-5 w-5 text-text-secondary group-hover:text-error transition-colors duration-200" />
          Déconnexion
        </button>
      </div>
    </div>
  );
}
