import Logo from "../Components/Logo";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <header className="flex flex-row items-start justify-between pt-6 pb-4 px-10 z-50 sticky top-0 bg-white drop-shadow-xl">
            <Logo />
            <Navbar />
        </header>
    )
}