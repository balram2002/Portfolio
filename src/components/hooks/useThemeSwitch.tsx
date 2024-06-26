import React, { useEffect, useState } from 'react'

const useThemeSwitch = () => {

    const preferDarkQuery = "(prefer-color-scheme: dark)";
    const [mode, setMode] = useState<any>("dark");

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPreference = window.localStorage.getItem("theme");

        const handleChange = () => {
            if (userPreference) {
                let check = userPreference === "dark" ? "dark" : "light";
                setMode(check);
                if (check === "dark") {
                    document.documentElement.classList.add("dark")
                } else {
                    document.documentElement.classList.remove("dark")
                }
            } else {
                let check = mediaQuery.matches ? "dark" : "light";
                setMode(check);
                window.localStorage.setItem("theme", check);

                if (check === "dark") {
                    document.documentElement.classList.add("dark")
                } else {
                    document.documentElement.classList.remove("dark")
                }
            }
        }

        handleChange();

        mediaQuery.addEventListener("change", handleChange)

        return () => mediaQuery.removeEventListener("change", handleChange)
    }, [])

    useEffect(() => {
        if (mode === "dark") {
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.remove("dark");
        }
    }, [mode])

    return [mode, setMode]
}

export default useThemeSwitch