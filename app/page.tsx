"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const { theme } = useTheme();
  const [typedText, setTypedText] = useState("");
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    const fullText = "Hi there! my name is Kaden.";
    const typingSpeed = 100;
    let index = 0;

    function typeChar() {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
        setTimeout(typeChar, typingSpeed);
      } else {
        setButtonVisible(true);
      }
    }

    typeChar();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[70vh] mx-auto w-[70%] rounded-lg text-center break-words">
      <Avatar className="w-48 h-48">
        <AvatarImage
          src="/photo.jpeg"
          alt="Your avatar"
          className="scale-180 object-cover object-[-40%_10%] w-full h-full"
        />
        <AvatarFallback>KC</AvatarFallback>
      </Avatar>

      <div className="text-green-500 text-4xl font-mono whitespace-pre-wrap mt-4">
        {typedText}
      </div>

      <div
        className={`transition-opacity duration-500 mt-6 ${
          buttonVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Link href="/about" passHref>
          <Button
            variant="outline"
            className="mt-6 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-colors"
          >
            Learn more about me?
          </Button>
        </Link>
      </div>
    </div>
  );
}
