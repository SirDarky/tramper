import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import {
    Box,
    Button,
    Card,
    CardMedia,
    InputAdornment,
    TextField,
    createTheme,
  } from "@mui/material";
  import Foto_tela_Cadastro from "../../Img/Foto_cadastro_usuario.jpg";
  import {
    ArrowBack,
    Email,
    Lock,
    Person,
    SensorOccupied,
    HowToReg,
  } from "@mui/icons-material";
  import { ThemeProvider } from "styled-components";
  import MenuItem from "@mui/material/MenuItem";
  import OutlinedInput from "@mui/material/OutlinedInput";
  import LocationOnIcon from "@mui/icons-material/LocationOn";
  import Select from "@mui/material/Select";
  import FormControl from "@mui/material/FormControl";
  import InputLabel from "@mui/material/InputLabel";
  import { areasDeAtuacao, locations } from '../../services/constantes';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT*5 + ITEM_PADDING_TOP,
      width: 250
    },
  },
};

function getStyles(location, selectedLocations, theme) {
  return {
    fontWeight:
      selectedLocations.indexOf(location) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const theme = createTheme({});

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

    const [checkbox, setCheckbox] = useState(false)

    const setarCheck = ()=>{
        if(checkbox===true){
            setCheckbox(false)
        } else {
            setCheckbox(true)
        }
    }
    function novaExperiencia() {
        let newExp = {}
        if(checkbox){
            newExp = {
                empresa: empresa,
                cargo: cargo,
                resumo: resumo,
                datainicio: dataInicio,
                datatermino: "Presente"
            }
        } else{
            newExp = {
                empresa: empresa,
                cargo: cargo,
                resumo: resumo,
                datainicio: dataInicio,
                datatermino: dataTermino
            }
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
                        disabled={checkbox ? true : false}
                    />
                </div>
            </div>
            <div style={{display:'flex', alignItems:"center"}} onClick={setarCheck}>
                <input type="checkbox" checked={checkbox} style={{width:"15px", height:"15px", margin:"0"}}/>
                <label htmlFor="" style={{marginLeft:"5px"}}>Ainda estou neste trabalho</label>
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

const AdicionarVaga = ({setAdicionar, setLoading, state, setAtualizar, atualizar}) => {
    const [cargo, setCargo] = useState("")
    const [selectedLocations, setSelectedLocations] = useState("");
    const [areaAtuacao, setAreaAtuacao] = useState("Desenvolvimento de software")
    const [salario, setSalario] = useState("")
    const [beneficios, setBeneficios] = useState("")
    const [requisito, setRequisito] = useState("")
    const [descricao, setDescricao] = useState("")    

    function novaVaga() {
        setLoading(true)
        const novaVaga = {
            localVaga: selectedLocations,
            areaAtuacao: areaAtuacao,
            cargo: cargo,
            salario: salario,
            beneficios: beneficios,
            requisito:requisito,
            descricao:descricao
        }
        api.post('/empresa/vagas', novaVaga).then(res=>{
            setLoading(false)
            setAdicionar(false)
            setAtualizar(!atualizar)
        }).catch((err)=>{
            console.log(err)
            setLoading(false)
        })
    }

    return (
        <div style={{display:"flex", flexDirection:"column", margin:"20px 20px 20px 0", background:"rgba(0, 0, 0, 0.2)", padding:"15px", borderRadius:"20px",  width:"350px", alignItems:"center"}}>
            <div style={{display:"flex", flexDirection:"column",  alignItems:"center"}}>
                <span style={{width:"min-content"}}>Cargo:</span>
                <input style={{width:"330px", paddingLeft:"10px", height:"30px"}} type="text" value={cargo} onChange={(e)=>{setCargo(e.target.value)}}/>
                <span>Localidade</span>
                <FormControl
                    sx={{width: "330px", height:"30px" }}
                    style={{ backgroundColor: "#FFF", color:"#000" }}
                    InputLabelProps={{
                    style: { color: "#fff" },
                    }}
                >
                    <Select
                    labelId="demo-multiple-location-label"
                    id="demo-multiple-location"
                    value={selectedLocations}
                    onChange={(e)=>{setSelectedLocations(e.target.value)}}
                    input={<OutlinedInput label="Local" />}
                    MenuProps={MenuProps}
                    style={{height:"30px"}}
                    >
                    {locations.map((location) => (
                        <MenuItem
                        key={location}
                        value={location}
                        style={getStyles(location, selectedLocations, theme)}
                        >
                        {location}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
                <span style={{width:"150px"}}>Area de Atuação:</span>
                <select name="" id="" style={{width:"330px", padding:"8px"}} onChange={(e)=>{setAreaAtuacao(e.target.value)}} value={areaAtuacao}>
                    {areasDeAtuacao.map((area, index)=>(
                        <option value={area} key={index}>{area}</option>
                    ))}
                </select>
                <span style={{width:"min-content"}}>Salario:</span>
                <input style={{width:"330px", paddingLeft:"10px", height:"30px"}} type="text" value={salario} onChange={(e)=>{setSalario(e.target.value)}}/>
                <span style={{width:"min-content"}}>Beneficios:</span>
                <textarea style={{width:"330px", paddingLeft:"10px", height:"100px"}} type="text" value={beneficios} onChange={(e)=>{setBeneficios(e.target.value)}}/>
                <span style={{width:"min-content"}}>Requisitos:</span>
                <textarea style={{width:"330px", paddingLeft:"10px", height:"100px"}} type="text" value={requisito} onChange={(e)=>{setRequisito(e.target.value)}}/>
                <span style={{width:"min-content"}}>Descrição:</span>
                <textarea style={{width:"330px", paddingLeft:"10px", height:"100px"}} type="text" value={descricao} onChange={(e)=>{setDescricao(e.target.value)}}/>
            </div>
            <button style={{width:"65px", margin:"20px 0 5px 0", background:"#14037E", color:"#fff", borderRadius:"10px", border:"0", cursor:"pointer"}} onClick={novaVaga} >Salvar</button>
        </div>
    )
}

export {AdicionarFormacao, AdicionarExperiencia, AdicionarCurso, AdicionarVaga}