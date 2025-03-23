
import { ReactNode } from "react";

interface LayerProps {
    children: ReactNode;
}

export default function Layer({ children }: LayerProps) {
    return (
        <div className="fixed top-0 left-0 w-full h-full darkLayer z-40 flex items-center justify-center">
            {children}
        </div>
    );
}