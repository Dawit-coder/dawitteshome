import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-xs bg-black/10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with scroll to top functionality */}
        <Link
          to="Hero"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          <img 
            src="images/pawn.png" 
            alt="Logo" 
            className="h-24 w-auto"  
          />
        </Link>

        {/* Navigation Links */}
        <div className='bg-white/20 text-amber-50 rounded-xl border-none px-4 py-1'>
          <ul className='flex justify-center gap-6'>
            <li>
              <Link
                to="Projects"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                className="cursor-pointer hover:text-shadow-cyan-500 transition-colors text-sm font-medium"
                activeClass="text-amber-300 font-bold"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="About"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                className="cursor-pointer hover:text-shadow-cyan-500 transition-colors text-sm font-medium"
                activeClass="text-amber-300 font-bold"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                className="cursor-pointer hover:text-shadow-cyan-500 transition-colors text-sm font-medium"
                activeClass="text-shadow-cyan-500 font-bold"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;