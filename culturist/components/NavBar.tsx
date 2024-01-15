import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {

  const navigation = [
    {text: 'Home', route: '/'},
    {text: 'Events', route: '/events'},
    {text: 'Great Places to Visit', route: '/points'},
    {text: 'Survival Guide', route: '/resources'},
    {text: 'Learn to Speak Like an Aussie', route: '/trivia'}
  ]


  return (
    <div className="navbar" style={{ backgroundColor: '#EBDAC8' }}>


      {/* //{{ backgroundColor: '#e4c49f' }} */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navigation.map((route, index) => (
              <Link href={route.route} key={index}>
                {route.text}
              </Link>
            ))}
            {/* <li>
              <Link href="/aboutUs">
                about Us
              </Link>
            </li> */}
          </ul>
        </div>
        {/* <img src="/images/logo2.png" alt="Culturist Logo" className="h-10 w-50 mr-4" /> */}
        <Image src="/images/logo2.png" alt="Culturist Logo" height={50} width={120} />
        {/* <span style={{ fontSize: '30px' }}>
  Culturist
</span> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* <li className='nav-item'>
            <Link href="/">
              Home
            </Link>
          </li> */}
          {navigation.map((route, index) => (
            <li className='nav-item' key={index}>
              <Link href={route.route}>
                {route.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
      </div>
    </div>
  );
};

export default NavBar;
