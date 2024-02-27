import { HStack } from "@/components/Core";
import { NavBar } from "@/components/shared";
import useAuthHandler from "@/hooks/auth";
import { useThemeStore } from "@/store/Theme";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoHomeOutline, IoMailOutline, IoCodeSlashOutline, IoMedalOutline, IoLogIn, IoLogOut, IoNewspaperOutline, IoChevronForward, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const HeaderWebsite = (props: any) => {

  const { setTheme, theme } = useThemeStore()
  const { auth: {authenticated, }, setSignIn, resetAuth } = useAuthHandler()

  const nav = [
    { id: 1, name: 'Home', href: '/', icon: IoHomeOutline },
    { id: 2, name: 'Sobre', href: '/sobre/', icon: IoCodeSlashOutline },
    { id: 3, name: 'Portfólio', href: '/portfolio/', icon: IoMedalOutline },
    { id: 4, name: 'Contato', href: '/contato/', icon: IoMailOutline },
    { id: 5, name: 'Blog', href: '/blog/', icon: IoNewspaperOutline },
  ]

    return (
      <div className={`container absolute ${theme === 'light' ? 'bg-white' : 'bg-slate-500'} h-20 gap-6 px-12 flex items-center justify-between`}>
        <NavBar nav={nav} />
        <div className="flex-row flex justify-center w-full items-center gap-2">
          <Image className="w-3/3" src={"/images/logotipo.png"} width={32} height={32} alt="foto perfil" />
          <span className={`${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>Nilton Rocha</span>
          <div className={`rounded-md ${theme === 'light' ? 'border-gray-800 text-gray-800' : 'border-white text-white'} border-2`}>
            <span className={`p-1 text-sm`}>UI</span>
          </div>
        </div>
        <div className="flex-row flex w-full items-center gap-8 justify-end">          
          <IoMoonOutline className={`cursor-pointer ${theme === 'dark' && 'hidden'} text-gray-800 text-lg`} onClick={() => setTheme('dark')} />
          <IoSunnyOutline className={`cursor-pointer ${theme === 'light' && 'hidden'} rounded-full text-white text-lg`} onClick={() => setTheme('light')} />
          
          <div className={`${theme === 'light' ? 'bg-gray-300' : 'bg-slate-400'} w-[1.3px] rounded-full h-6`} />
          <div className={`border-2 rounded-full border-solid ${theme === 'light' ? 'border-gray-800' : 'border-white'}`}>
            <button className="" onClick={authenticated ? resetAuth : () => props.setOpen(true)}>
                    <HStack space={4} className="items-center p-2 w-28 text-center justify-center w-20">
                    <span className={`text-sm font-medium ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>{authenticated ? 'Logout' : 'Login' }</span>
                    {!authenticated && <IoChevronForward className={`${theme === 'light' ? 'text-gray-800' : 'text-white'}`} />}
                </HStack>
            </button>
          </div>
        </div>
      </div>
    )
}

export default HeaderWebsite;