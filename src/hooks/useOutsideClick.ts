import { useEffect, useRef } from "react";

export default function useOutsideClick<T extends HTMLDivElement>(handler: () => void) {
    const ref = useRef<T | null>(null);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                handler();
            }
        }

        document.addEventListener("click", handleClick, true);
        return () => document.removeEventListener("click", handleClick, true);
    }, [handler]);

    return { ref };
}
