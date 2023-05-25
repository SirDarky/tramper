import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Tela_Home } from "./pages/Home/Tela_Home";
import { Cadastro_Usuarios } from "./pages/Cadastro_Usuarios/Cadastro_Usuarios";
import { Cadastro_Curriculo_Usuario } from "./pages/Cadastro_Curriculo_Usuario/Cadastro_Curriculo_Usuario";
import { Cadastro_Empresas } from "./pages/Cadastro_Empresas/Cadastro_Empresas";
import { Cadastro_Vaga_Empresa } from "./pages/Cadastro_Vaga_Empresa/Cadastro_Vaga_Empresa";
import { Perfil_Usuario } from "./pages/Perfil_Usuario/Perfil_Usuario";
import AuthProvider from "./context/authContext";
import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import HomeEmpresa from "./pages/Home/HomeEmpresa";

const Rotas = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/homeEmpresa" element={<HomeEmpresa />} />
          <Route path="/cadastroUsuarios" element={<Cadastro_Usuarios />} />
          <Route path="/cadastroEmpresas" element={<Cadastro_Empresas />} />
          <Route path="/perfilUsuario" element={<Perfil_Usuario/>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Rotas;
