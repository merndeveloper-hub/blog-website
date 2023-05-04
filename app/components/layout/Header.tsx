import Link from "next/link";
import Logo from "/public/logo.png";
import Image from "next/image";
import Wrapper from "../shared/Wrapper";

const Header = () => {
  return (
<header className="sticky top-0 z-10">
<Wrapper>
      <div className="flex justify-between  bg-white py-5 sticky top-0 items-center">
        {/* Logo */}
        <div>
          
          <Image src={Logo} alt="Panaverse dao logo" />
        </div>

        {/* Navigation */}
        <ul className="flex space-x-8 font-semibold">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/courses"}>
            <li>Courses</li>
          </Link>
        </ul>
      </div>
    </Wrapper>
    </header>
  );
};

export default Header;
