import * as React from "react"
import { Moon, Sun } from "lucide-react"

// import { Button } from "@/components/ui/button"

export default function ModeToggle() {
  const [theme, setThemeState] = React.useState<
    "light" | "dark" | "system"
  >("light")

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setThemeState(isDarkMode ? "dark" : "light")
  }, [])

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }, [theme])
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setThemeState(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }
  return (
    <button onClick={toggleTheme}  >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
