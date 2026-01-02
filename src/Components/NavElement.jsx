export default function NavElement({link, label}) {
    return (
        <>
        <a
            className="hover:bg-[#30C7B8] py-1 px-2 rounded-md transition duration-200 ease-in-out hover:text-white"
            href={link}
          >
            {label}
          </a>
        </>
    );
}
