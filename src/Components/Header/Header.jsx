import Counter from "./Counter";
import SearchBar from "./SearchBar";
import Nav from "./Nav";

export default function Header() {
  return (
    <>
      <div className="fixed w-full z-50 bg-white">
        <div className="shadow ">
          <div className="container mx-auto px-4 ">
            <div className="w-[100%] pt-6 flex justify-around items-center ">
              <img src="./public/images/logo.png" alt="logo" />
              {/* searchBar components */}
              <SearchBar />
              {/* Counter Components  */}
              <Counter />
            </div>
            {/* Component Nav */}
            <Nav />
          </div>
        </div>
      </div>
    </>
  );
}
