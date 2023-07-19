import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className='surface-section h-full lg:h-auto hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none' style={{width: '230px'}}>
            <div className='flex flex-column h-full'>
              <div className='overflow-y-auto'>
                <ul className='list-none p-3 m-0'>
                  <li>
                    <Link to='/home' className='p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full no-underline'>
                        Home
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
        </div>
    )
};

export default Menu;