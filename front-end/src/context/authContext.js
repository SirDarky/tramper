import { createContext, useContext, useState } from "react";
import api from "../services/api";
import apiPhoto from "../services/apiPhoto";

export const AuthContext = createContext();
AuthContext.displayName = "UserAuth"

export default function AuthProvider({ children }){
    const [authentication, setAuthentication] = useState(false)
    const [tokenLocal, setTokenLocal] = useState("")
    const [usuario, setUsuario] = useState("")
    const [tipoUser, setTipoUser] = useState(false)

    return(
        <AuthContext.Provider
            value={{authentication, setAuthentication, tokenLocal, setTokenLocal, tipoUser, setTipoUser, usuario, setUsuario}}
        >
            {children}
        </AuthContext.Provider>
    )
}

//Hook personalizado
export function useAuthContext(){
    const { setAuthentication, setTokenLocal, setTipoUser, tokenLocal, tipoUser, authentication, usuario, setUsuario } = useContext(AuthContext);
    
    function RealizarNewLoginCliente(data) {
        const token = data.token;
        const user = data.tipoUser;
        const usuario = data.usuario.nome;
        localStorage.setItem("token", token);
        localStorage.setItem("tipouser", user);
        localStorage.setItem("usuario", usuario);
        api.defaults.headers['Authorization'] = `${token}`
        apiPhoto.defaults.headers['Authorization'] = `${token}`
        setTokenLocal(localStorage.getItem("token"))
        setTipoUser(user)
        setAuthentication(true)
        setUsuario(usuario)
    }

    function VerificarAntigoLogin() {
        if(localStorage.getItem("token") && localStorage.getItem("tipouser") && localStorage.getItem("usuario")){
            const token = localStorage.getItem('token')
            const tipoUsuario = localStorage.getItem("tipouser")
            const nome = localStorage.getItem("usuario")
            api.defaults.headers['Authorization'] = `${token}`
            apiPhoto.defaults.headers['Authorization'] = `${token}`
            setTokenLocal(token)
            setTipoUser(tipoUsuario)
            setAuthentication(true)
            setUsuario(nome)
            return true
        }
        return false
    }

    function Deslogar() {
        if (localStorage.getItem("token") && localStorage.getItem("tipouser")) {
            localStorage.removeItem("token")
            localStorage.removeItem("tipouser")
            localStorage.removeItem("usuario")
            api.defaults.headers.common['Authorization'] = ``
            apiPhoto.defaults.headers.common['Authorization'] = ``
            setTipoUser("")
            setTokenLocal("")
            setUsuario("")
            setAuthentication(false)
        }
    }

    function ChecarLogin() {
        if(VerificarAntigoLogin()){
            const objetoLogin = {tokenLocal, tipoUser, authentication, usuario};
            return objetoLogin;
        }else{
            return false;
        }
    }

    return{
        Deslogar,
        VerificarAntigoLogin,
        RealizarNewLoginCliente,
        ChecarLogin,
        authentication,
        usuario,
        tipoUser,
        tokenLocal
    }
}