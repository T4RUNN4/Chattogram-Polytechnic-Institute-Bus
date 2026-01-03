import NavElement from "../Components/NavElement";

const Navs = {
  "হোম পেইজ": "/",
  "ট্র্যাক করুন": "/track",
  "সকল রুট": "/bus-routes",
  নিয়মাবলি: "/rules",
  "চালকের তালিকা": "/drivers",
  "হারানো জিনিস": "/lost-and-found",
};

export default function Navbar() {
  return (
    <>
      <div>
        <nav className="text-sm hidden md:flex gap-1 lg:gap-3">
          {Object.keys(Navs).map((key) => (
            <NavElement link={Navs[key]} label={key} />
          ))}
        </nav>
        <nav className="md:hidden">
          <details className="flex flex-col gap-2 text-sm text-right">
            <summary className="border-2 border-black/10 bg-white text-sm px-2.5 py-1.5 rounded-md">
              মেনু
            </summary>
            <div className="flex flex-col items-end justify-center">
              {Object.keys(Navs).map((key) => (
                <NavElement key={key} link={Navs[key]} label={key} />
              ))}
            </div>
          </details>
        </nav>
      </div>
    </>
  );
}
