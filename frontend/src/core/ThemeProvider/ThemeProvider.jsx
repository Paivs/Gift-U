"use client";

import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

export default function Provider({ children }) {
  const [mounted, setMounted] = useState(false);
  

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>
  } else {
    return (
      <>
        <ThemeProvider attribute="data-theme" defaultTheme="light">{children}</ThemeProvider>
      </>
    );
  }
}
