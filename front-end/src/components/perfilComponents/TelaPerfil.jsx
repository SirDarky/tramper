import React, { useEffect, useState } from 'react'
import TelaPerfilCss from "./TelaPerfil.css"
import { CardBio, CardCurso, CardExperiencia, CardFormacao } from './Card'
import { AdicionarCurso, AdicionarExperiencia, AdicionarFormacao } from './Adicionar'
import api from '../../services/api'
import LoadingComponent from '../LoadingComponent'
import { useAuthContext } from '../../context/authContext'
import PhotoComponent from './PhotoComponent'
import { linkPhoto } from '../../services/constantes'

const TelaPerfil = () => {
    const [adicionar, setAdicionar] = useState("")
    const [loading, setLoading] = useState(false)
    const [info, setInfo] = useState({})
    const [atualizado, setAtualizado] = useState(false)
    const [upFoto, setUpFoto] = useState(false)
    const { ChecarLogin } = useAuthContext()
    /*
    const info ={
        experiencias: [
            {
                cargo: "Engenheiro de Software",
                empresa: "Your Count",
                resumo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quis aliquam, architecto repudiandae esse officiis repellat eum reiciendis atque similique culpa, incidunt soluta voluptas ea minus odio iusto porro. Nobis.",
                datainicio:"01/2021",
                datatermino: "12/2025"
            },
            {
                cargo: "Estágio em Desenvolvimento Full Stack",
                empresa: "Corpo de Bombeiro",
                resumo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quis aliquam, architecto repudiandae esse officiis repellat eum reiciendis atque similique culpa, incidunt soluta voluptas ea minus odio iusto porro. Nobis.",
                datainicio:"02/2023",
                datatermino: "03/2024"
            }
        ],
        cursos: [
            {
                empresa: 'MicroLins',
                nome: 'Informatica',
                resumo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo voluptates, at rerum, autem iste fuga eveniet eum nihil cumque error maxime reprehenderit eius ullam odio vel laudantium dolorum aliquid?",
                datainicio:"02/2023",
                datatermino: "03/2024"
            }
        ],
        formacao:[
            {
                empresa: 'Fametro',
                curso: 'Engenharia da Computação',
                datainicio:"02/2023",
                datatermino: "03/2024"
            }
        ],
        resumo:"Sou legal"
    }
    */
    function UpFoto(params) {
        setUpFoto(!upFoto)
    }

    useEffect(() => {
        setLoading(true)
        api.get('/user').then(res=>{
            res.data.usuario.photopaths = linkPhoto+res.data.usuario.photopaths;
            console.log(res.data.usuario)
            setInfo(res.data.usuario)
        })
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [atualizado])
    
    return (
        <div>
            { loading? <LoadingComponent/>: ""}
            <div className='telaPerfil'>
                <div>
                    <div className='foto'>
                        <img src={info.photopaths} alt="" style={{width: '200px', height:"200px", objectFit: 'cover', borderRadius:"90px", marginTop:"50px"}}/>
                        {upFoto? <PhotoComponent setState={setAtualizado} state={atualizado} tipoUpload={"User"}/> : ""}
                        <div style={{marginTop:"30px", display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <button onClick={UpFoto}><span style={{color:"#000", }}>Trocar foto</span></button>
                            <span style={{color:"#fff", fontSize:"20px"}}>{info.nome}</span>
                            <span style={{color:"#fff", fontSize:"16px"}}>{info.cidade}</span>
                        </div>
                    </div>
                    <div className='perfil'>
                        <div>
                            <div style={{color:"#000", marginBottom:"10px"}}>
                                <CardBio bio={info.resumo}/>
                            </div>
                            <div style={{color:"#000"}}>
                                Experiencia
                                {
                                    info.experiencias && info.experiencias.length>0?info.experiencias.map((exp, index)=>(
                                        <CardExperiencia key={index} experiencia={exp}/>
                                    )):""
                                }
                                <div>
                                    {
                                        adicionar==="experiencia"? <AdicionarExperiencia setAdicionar={setAdicionar} setLoading={setAtualizado} state={atualizado}/> : <button style={{marginLeft:"40px"}} onClick={()=>{setAdicionar('experiencia')}}>Adicionar Experiencia</button>
                                    }
                                    
                                </div>
                            </div>
                            <div>
                                <span>Formação Academica</span>
                                {
                                    info.formacao && info.formacao.length>0? info.formacao.map((exp, index)=>(
                                        <CardFormacao key={index} form={exp}/>
                                    )):""
                                }
                                <div>
                                    {
                                        adicionar==="formacao"? <AdicionarFormacao setAdicionar={setAdicionar} setLoading={setAtualizado} state={atualizado}/> : <button style={{marginLeft:"40px"}} onClick={()=>{setAdicionar('formacao')}} >Adicionar Formação</button>
                                    }
                                </div>
                            </div>
                            <div style={{display:"flex", flexDirection:"column", marginBottom:"20px"}}>
                                <div>Cursos</div>
                                {
                                    info.cursos && info.cursos.length>0? info.cursos.map((exp, index)=>(
                                        <CardCurso key={index} curso={exp}/>
                                    )):""
                                }
                                {
                                    adicionar==="curso"? <AdicionarCurso setAdicionar={setAdicionar} setLoading={setAtualizado} state={atualizado}/> : <button style={{marginLeft:"40px", width:"170px"}} onClick={()=>{setAdicionar('curso')}}>Adicionar Curso</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TelaPerfil