'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faUser } from '@fortawesome/free-solid-svg-icons';


export default function Header() {
  const pathname = usePathname();
  const linkList = [
    {
      href: '/',
      icon: faCubes,
      text: 'Projects',
    },
    {
      href: '/about',
      icon: faUser,
      text: 'About',
    },
  ];

  return (
    <header>
      <nav className="
        fixed 
        flex flex-col justify-center
        bg-dark-dark
        w-full h-[55px] min-h-0 top-auto bottom-0
        md:w-[80px]
        md:h-full md:min-h-[500px]
        md:top-0 md:left-0 md:bottom-auto
      ">
        <ul className="
          flex flex-row
          md:flex-column
        ">
          <li className="
            flex-shrink-0 my-2.5
            w-[55px]
            md:w-full
          ">
            {linkList.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.text} href={link.href} className={`${isActive ? 'text-text-active' : 'text-text-muted'}
                  p-2.5 text-sm font-light block w-full text-center relative
                  group hover:text-text-active
                `}>
                  <FontAwesomeIcon style={{ width: "19px"}} icon={link.icon} fixedWidth className={`
                    text-[22px] absolute left-1/2 top-1/2 
                    transform -translate-x-1/2 -translate-y-1/2 transition-all duration-350 ease-out
                    group-hover:opacity-40 group-hover:-translate-x-[75%] group-hover:-translate-y-[50%]
                    ${isActive ? 'opacity-40 -translate-x-[75%]' : ''}
                  `} />
                  <span className={`
                    block opacity-0 transition-all duration-350 ease-out
                    group-hover:opacity-100 group-hover:translate-x-[10%]
                    ${isActive ? 'opacity-100 translate-x-[10%]' : ''}
                  `}>{link.text}</span>  
                </Link> 
            );
            })}
          </li> 
        </ul>
      </nav>
    </header>
  );
};