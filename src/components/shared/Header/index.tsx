import { HStack } from "@/components/Core";
import { NavBar } from "@/components/shared";
import useHomeHandler from "@/hooks/home";
import Image from "next/image";
import { IoHomeOutline, IoMailOutline, IoCodeSlashOutline, IoMedalOutline, IoLogIn, IoLogOut } from "react-icons/io5";

const Header = (props: any) => {

  const { handleSign, authenticated } = useHomeHandler()

  const nav = [
    { id: 1,name: 'Home', href: '/', icon: IoHomeOutline },
    { id: 2,name: 'Sobre', href: '/sobre', icon: IoCodeSlashOutline },
    { id: 3,name: 'Portfólio', href: '/portfolio', icon: IoMedalOutline },
    { id: 4,name: 'Contato', href: '/contato', icon: IoMailOutline },
    { id: 5,name: authenticated.isSignIn ? 'Sair' : 'Login', href: '/login', icon: authenticated.isSignIn ? IoLogOut : IoLogIn},
  ]

    return (
        <HStack className="justify-between flex-row-reverse items-center h-16 bg-slate-50 p-4 w-full">
          <HStack className="bg-slate-400 w-80">
              {authenticated.isSignIn && <>
                <Image src={"./images/header/foto.jpg"} width={45} height={"45"} alt={"foto perfil"} />
              <span>{authenticated.name}</span>
              </>}
          </HStack>
          <HStack space={40} className="">
            <NavBar nav={nav} />
          </HStack>
        </HStack>
    )
}

export default Header;