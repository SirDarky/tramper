import React from 'react'
import api from '../../services/api'

const InfoVagas = ({vaga, setState, state, setLoading, stateLoading}) => {
    const deletar = ()=>{
        setLoading(true)
        const vagaId = vaga._id;
        api.delete("/empresa/vagas/"+vagaId).then(
            (res)=>{
                setLoading(false)
                setState(!state)
            }
        ).catch(err=>{
            console.log(err)
            setLoading(false)
        })
    }
    return (
        <div style={{background:"rgba(0, 0, 0, 0.2)", padding:"10px", width:"350px", borderRadius:"10px", display:"flex", flexDirection:'column', color:"#fff", marginTop:"10px", marginBottom:"10px"}}>
            <span>Cargo: {vaga.cargo}</span>
            <span>Local da Vaga: {vaga.localVaga}</span>
            <span>Área: {vaga.areaAtuacao}</span>
            <span>Salário: {vaga.salario}</span>
            <button style={{width:"130px"}} onClick={deletar}>Deletar Vaga</button>
        </div>
    )
}

export default InfoVagas