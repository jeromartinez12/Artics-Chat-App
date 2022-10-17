import Image from "next/image";
import Button from "../components/button"
import Metamask from "../components/icons/metamask"
import Logo from '../components/icons/logo'
import { useMoralis } from "react-moralis"

function Login() {

    const { authenticate } = useMoralis();

    return (
        <div className="bg-black  text-white">
            <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full">
                <Logo className="w-60"></Logo>
                <Button onClick={authenticate} ><Metamask/> Login</Button>
            </div>

            <div className="w-full h-scree">
                <Image src="/bg.png"
                layout="fill"
                objectFit="cover"
                />
            </div>
        </div>
    );
}

export default Login;
