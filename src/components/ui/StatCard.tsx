"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";

interface StatCardProps {
  title: string;
  value: number;
  prefix?: string;
  suffix?: string;
  trend?: number; // Positive or negative percentage
  icon: React.ElementType;
  delay?: number;
}

export default function StatCard({
  title,
  value,
  prefix = "",
  suffix = "",
  trend,
  icon: Icon,
  delay = 0,
}: StatCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1000; // 1 second
    const steps = 60;
    const stepValue = value / steps;
    const stepTime = Math.abs(Math.floor(duration / steps));
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  const isPositive = trend && trend > 0;
  const isNegative = trend && trend < 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow duration-200 group"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-text-secondary text-sm font-medium">{title}</h3>
        <div className="h-10 w-10 rounded-full bg-background flex items-center justify-center border border-border group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-5 w-5 text-accent" />
        </div>
      </div>

      <div className="flex items-baseline">
        <span className="text-3xl font-bold font-mono tracking-tight text-text-primary">
          {prefix}
          {Math.round(count).toLocaleString("fr-FR")}
          {suffix}
        </span>
      </div>

      {trend !== undefined && (
        <div className="mt-4 flex items-center text-sm">
          <span
            className={clsx(
              "font-medium px-2 py-0.5 rounded-full text-xs mr-2",
              isPositive && "bg-success/10 text-success",
              isNegative && "bg-error/10 text-error",
              !isPositive && !isNegative && "bg-background text-text-secondary"
            )}
          >
            {isPositive ? "+" : ""}
            {trend}%
          </span>
          <span className="text-text-secondary text-xs">vs mois précédent</span>
        </div>
      )}
    </motion.div>
  );
}
