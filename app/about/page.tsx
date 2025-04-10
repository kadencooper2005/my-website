"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const bgClass = isDark ? "bg-black" : "bg-white";
  const textClass = "text-green-500";
  const borderClass = isDark ? "border-gray-800" : "border-gray-300";
  const secondaryText = isDark ? "text-gray-400" : "text-gray-600";

  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden ${bgClass} ${textClass}`}
    >
      <div className="flex flex-col items-center justify-between max-w-screen-xl mx-auto px-6 py-10 text-center font-mono min-h-screen">
        <main className="flex-grow flex flex-col justify-center items-center space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">
            I can create cool things.
          </h1>
          <p className={`text-lg ${secondaryText}`}>
            Clean code. Powerful ideas. Minimalist execution.
          </p>

          {/* Go Home Button */}
          <Link href="/" passHref>
            <Button
              variant="outline"
              className={`border-green-500 text-green-500 hover:bg-green-500 transition-colors ${
                isDark ? "hover:text-white" : "hover:text-white"
              }`}
            >
              Go Home
            </Button>
          </Link>
        </main>

        <footer className={`w-full border-t pt-6 ${borderClass}`}>
          <div className="flex justify-center space-x-6">
            <Link
              href="https://www.linkedin.com/in/kaden-cooper-840192276/"
              target="_blank"
            >
              <Button
                variant="outline"
                className={`border-green-500 text-green-500 hover:bg-green-500 transition-colors ${
                  isDark ? "hover:text-white" : "hover:text-white"
                }`}
              >
                LinkedIn
              </Button>
            </Link>

            <Link href="https://profile.indeed.com/" target="_blank">
              <Button
                variant="outline"
                className={`border-green-500 text-green-500 hover:bg-green-500 transition-colors ${
                  isDark ? "hover:text-white" : "hover:text-white"
                }`}
              >
                Indeed
              </Button>
            </Link>

            <Link href="mailto:kadencooper608@gmail.com">
              <Button
                variant="outline"
                className={`border-green-500 text-green-500 hover:bg-green-500 transition-colors ${
                  isDark ? "hover:text-white" : "hover:text-white"
                }`}
              >
                Gmail
              </Button>
            </Link>
          </div>

          <p className={`mt-4 text-sm ${secondaryText}`}>
            &copy; {new Date().getFullYear()} Kaden Cooper
          </p>
        </footer>
      </div>
    </div>
  );
}
