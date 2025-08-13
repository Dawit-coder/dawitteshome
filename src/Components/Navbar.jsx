import { Link } from "react-scroll"

const Navbar = () => {
  return (
    <nav>
        <div className="text-white relative left-8 top-3">
            Dawit.
        </div>
        <div className='bg-white/30 text-amber-50 absolute right-10 w-60 rounded-2xl border-none'> 
            <ul className='flex justify-center gap-4 m-3'>
                  <li>
                    <Link
                    to="Projects"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    className="cursor-pointer"
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
                    className="cursor-pointer"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                    to="Contacts"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    className="cursor-pointer"
                    >
                      Contacts
                    </Link>
                  </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
