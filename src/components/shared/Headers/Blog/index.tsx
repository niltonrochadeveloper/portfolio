import { HStack } from "@/components/Core";
import { NavBar } from "@/components/shared";
import useAuthHandler from "@/hooks/auth";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoHomeOutline, IoMailOutline, IoCodeSlashOutline, IoMedalOutline, IoLogIn, IoLogOut, IoNewspaperOutline, IoChevronForward } from "react-icons/io5";

const HeaderBlog = (props: any) => {

  const { auth: {authenticated, }, setSignIn, resetAuth } = useAuthHandler()

  const nav = [
    { id: 1, name: 'Home', href: '/', icon: IoHomeOutline },
    { id: 2, name: 'Sobre', href: '/sobre/', icon: IoCodeSlashOutline },
    { id: 3, name: 'Portfólio', href: '/portfolio/', icon: IoMedalOutline },
    { id: 4, name: 'Contato', href: '/contato/', icon: IoMailOutline },
    { id: 5, name: 'Blog', href: '/blog/', icon: IoNewspaperOutline },
  ]

    return (
      <div className="container pb-4 pt-8 px-12 flex items-center justify-between h-16">
        <Image className="w-3/3" src={"/images/logotipo.png"} width={32} height={32} alt="foto perfil" />
        <div className="w-1/3">
          <NavBar nav={nav} />
        </div>
        <button className="w-3/3" onClick={authenticated ? resetAuth : () => props.setOpen(true)}>
                    <HStack space={4} className="items-center p-2 text-center justify-center w-20">
                    <span className="text-sm font-medium">{authenticated ? 'Logout' : 'Login' }</span>
                    {!authenticated && <IoChevronForward />}
                </HStack>
            </button>
      </div>
    )
}

export default HeaderBlog;