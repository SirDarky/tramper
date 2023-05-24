import React, { useState, useEffect } from 'react'
import api from '../../services/api'

const AdicionarFormacao = ({setAdicionar, setLoading, state}) => {
    const [curso, setCurso] = useState("")
    const [empresa, setEmpresa] = useState("")
    const [dataInicio, setDataInicio] = useState()
    const [dataTermino, setDataTermino] = useState()

    function novoFormacao() {
        setLoading(true)
        const newFormacao = {
            empresa: empresa,
            datainicio: dataInicio,
            datatermino: dataTermino,
            curso: curso
        }
        api.post('/user/formacao', newFormacao).then(res=>{
            setTimeout(() => {
                setAdicionar('')
                setLoading(!state)
            }, 2000);
        }).catch((err)=>{
            setTimeout(() => {
                setAdicionar('')
                setLoading(!state)
            }, 2000);
        })
    }
    
    return (
        <div style={{display:"flex", flexDirection:"column", margin:"20px 20px 20px 0", background:"rgba(0, 0, 0, 0.2)", padding:"15px", borderRadius:"20px",  width:"350px", alignItems:"center"}}>
            <div style={{display:"flex", flexDirection:"column",  alignItems:"center"}}>
                <span style={{width:"min-content"}}>Curso:</span>
                <input style={{width:"300px", paddingLeft:"10px"}} type="text" value={curso} onChange={(e)=>{setCurso(e.target.value)}}/>
                <span style={{width:"min-content"}}>Empresa:</span>
                <input style={{width:"300px", paddingLeft:"10px"}} type="text" value={empresa} onChange={(e)=>{setEmpresa(e.target.value)}}/>
            </div>
            <div style={{display:"flex", flexDirection:"row", alignItems:"center", width:"350px", justifyContent:"center"}}>
                <div style={{ display: "flex", flexDirection: "column", marginRight:"10px" }}> 
                    <span>Data de inicio:</span>
                    <input
                        style={{ width: "150px", paddingLeft:"10px" }}
                        type="month"
                        value={dataInicio}
                        onChange={(e) => { setDataInicio(e.target.value) }}
                        min="yyyy-MM"
                        max="yyyy-MM"
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>Data de Termino:</span>
                    <input
                        style={{ width: "150px", paddingLeft:"10px" }}
                        type="month"
                        value={dataTermino}
                        onChange={(e) => { setDataTermino(e.target.value) }}
                        min="yyyy-MM"
                        max="yyyy-MM"
                    />
                </div>
            </div>
            <button style={{width:"65px", margin:"20px 0 5px 0", background:"#14037E", color:"#fff", borderRadius:"10px", border:"0", cursor:"pointer"}} onClick={novoFormacao}>Salvar</button>
        </div>
  )
}


const AdicionarExperiencia = ({setAdicionar, setLoading, state}) => {
    const [cargo, setCargo] = useState("")
    const [empresa, setEmpresa] = useState("")
    const [resumo, setResumo] = useState("")
    const [dataInicio, setDataInicio] = useState()
    const [dataTermino, setDataTermino] = useState()

    function novaExperiencia() {
        const newExp = {
            empresa: empresa,
            cargo: cargo,
            resumo: resumo,
            datainicio: dataInicio,
            datatermino: dataTermino
        }
        api.post('/user/experiencia', newExp).then(res=>{
            setAdicionar('')
            setLoading(!state)
        }).catch((err)=>{
            console.log(err)
            setLoading(!state)
        })
    }
    
    return (
        <div style={{display:"flex", flexDirection:"column", margin:"20px 20px 20px 0", background:"rgba(0, 0, 0, 0.2)", padding:"15px", borderRadius:"20px",  width:"350px", alignItems:"center"}}>
            <div style={{display:"flex", flexDirection:"column",  alignItems:"center"}}>
                <span style={{width:"min-content"}}>Cargo:</span>
                <input style={{width:"300px", paddingLeft:"10px"}} type="text" value={cargo} onChange={(e)=>{setCargo(e.target.value)}}/>
                <span style={{width:"min-content"}}>Empresa:</span>
                <input style={{width:"300px", paddingLeft:"10px"}} type="text" value={empresa} onChange={(e)=>{setEmpresa(e.target.value)}}/>
                <span style={{width:"min-content"}}>Resumo:</span>
                <textarea style={{ width: "300px", height: "200px", paddingLeft: "10px" }} value={resumo} onChange={(e) => { setResumo(e.target.value) }}></textarea>
            </div>
            <div style={{display:"flex", flexDirection:"row", alignItems:"center", width:"350px", justifyContent:"center"}}>
                <div style={{ display: "flex", flexDirection: "column", marginRight:"10px" }}> 
                    <span>Data de inicio:</span>
                    <input
                        style={{ width: "150px", paddingLeft:"10px" }}
                        type="month"
                        value={dataInicio}
                        onChange={(e) => { setDataInicio(e.target.value) }}
                        min="yyyy-MM"
                        max="yyyy-MM"
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>Data de Termino:</span>
                    <input
                        style={{ width: "150px", paddingLeft:"10px" }}
                        type="month"
                        value={dataTermino}
                        onChange={(e) => { setDataTermino(e.target.value) }}
                        min="yyyy-MM"
                        max="yyyy-MM"
                    />
                </div>
            </div>
            <button style={{width:"65px", margin:"20px 0 5px 0", background:"#14037E", color:"#fff", borderRadius:"10px", border:"0", cursor:"pointer"}} onClick={novaExperiencia} >Salvar</button>
        </div>
    )
}



const AdicionarCurso = ({setAdicionar, setLoading, state}) => {
    const [nome, setNome] = useState("")
    const [empresa, setEmpresa] = useState("")
    const [resumo, setResumo] = useState("")
    const [dataInicio, setDataInicio] = useState()
    const [dataTermino, setDataTermino] = useState()

    function novoCurso() {
        const newCurso = {
            empresa: empresa,
            nome: nome,
            resumo: resumo,
            datainicio: dataInicio,
            datatermino: dataTermino
        }
        api.post('/user/cursos', newCurso).then(res=>{
            setAdicionar('')
            setLoading(!state)
        }).catch((err)=>{
            console.log(err)
            setLoading(!state)
        })
    }
    
    return (
        <div style={{display:"flex", flexDirection:"column", margin:"20px 20px 20px 0", background:"rgba(0, 0, 0, 0.2)", padding:"15px", borderRadius:"20px",  width:"350px", alignItems:"center"}}>
            <div style={{display:"flex", flexDirection:"column",  alignItems:"center"}}>
                <span style={{width:"150px"}}>Nome do Curso:</span>
                <input style={{width:"300px", paddingLeft:"10px"}} type="text" value={nome} onChange={(e)=>{setNome(e.target.value)}}/>
                <span style={{width:"min-content"}}>Empresa:</span>
                <input style={{width:"300px", paddingLeft:"10px"}} type="text" value={empresa} onChange={(e)=>{setEmpresa(e.target.value)}}/>
                <span style={{width:"min-content"}}>Resumo:</span>
                <textarea style={{ width: "300px", height: "200px", paddingLeft: "10px" }} value={resumo} onChange={(e) => { setResumo(e.target.value) }}></textarea>
            </div>
            <div style={{display:"flex", flexDirection:"row", alignItems:"center", width:"350px", justifyContent:"center"}}>
                <div style={{ display: "flex", flexDirection: "column", marginRight:"10px" }}> 
                    <span>Data de inicio:</span>
                    <input
                        style={{ width: "150px", paddingLeft:"10px" }}
                        type="month"
                        value={dataInicio}
                        onChange={(e) => { setDataInicio(e.target.value) }}
                        min="yyyy-MM"
                        max="yyyy-MM"
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>Data de Termino:</span>
                    <input
                        style={{ width: "150px", paddingLeft:"10px" }}
                        type="month"
                        value={dataTermino}
                        onChange={(e) => { setDataTermino(e.target.value) }}
                        min="yyyy-MM"
                        max="yyyy-MM"
                    />
                </div>
            </div>
            <button style={{width:"65px", margin:"20px 0 5px 0", background:"#14037E", color:"#fff", borderRadius:"10px", border:"0", cursor:"pointer"}} onClick={novoCurso} >Salvar</button>
        </div>
    )
  }

export {AdicionarFormacao, AdicionarExperiencia, AdicionarCurso}