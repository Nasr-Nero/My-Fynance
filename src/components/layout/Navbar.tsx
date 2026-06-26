"use client";

import { Bell, Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-8 sticky top-0 z-10 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
      <div className="flex items-center flex-1">
        {/* Placeholder for Breadcrumb or Page Title */}
        <h1 className="text-xl font-bold tracking-tight text-text-primary hidden md:block">
          Vue d'ensemble
        </h1>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="pl-9 pr-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-200 w-64"
          />
        </div>

        <button className="relative p-2 text-text-secondary hover:text-text-primary transition-colors rounded-full hover:bg-card-hover">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-error border-2 border-card" />
        </button>

        <div className="h-8 w-px bg-border mx-2"></div>

        <button className="flex items-center space-x-2 p-1 rounded-full hover:bg-card-hover transition-colors pr-3">
          <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
            <User className="h-4 w-4" />
          </div>
          <span className="text-sm font-medium hidden sm:block">Admin</span>
        </button>
      </div>
    </header>
  );
}
