

type headerProps = {
    Header: string
}

export default function CategoryHeader({Header}: headerProps) {
    return (
        <header className="h-[40vh] bg-black flex justify-center items-center overflow-hidden mb-15">
            <h1 className="h1-custom text-white mt-20">{Header}</h1>
        </header>
    )
}
