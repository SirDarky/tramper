import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Tela_Home } from "./pages/Home/Tela_Home";
import { Cadastro_Usuarios } from "./pages/Cadastro_Usuarios/Cadastro_Usuarios";
import { Cadastro_Curriculo_Usuario } from "./pages/Cadastro_Curriculo_Usuario/Cadastro_Curriculo_Usuario";
import { Cadastro_Empresas } from "./pages/Cadastro_Empresas/Cadastro_Empresas";
import { Cadastro_Vaga_Empresa } from "./pages/Cadastro_Vaga_Empresa/Cadastro_Vaga_Empresa";
import { Perfil_Usuario } from "./pages/Perfil_Usuario/Perfil_Usuario";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login/>} />
        <Route path="/Home" element={<Tela_Home />} />
        <Route path="/CadastroUsuarios" element={<Cadastro_Usuarios />} />
        <Route
          path="/CadastroCurriculoUsuario"
          element={<Cadastro_Curriculo_Usuario />}
        />
        <Route path="/CadastroEmpresas" element={<Cadastro_Empresas />} />
        <Route
          path="/CadastroVagaEmpresa"
          element={<Cadastro_Vaga_Empresa />}
        />
        <Route path="/PerfilUsuario" element={<Perfil_Usuario/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
