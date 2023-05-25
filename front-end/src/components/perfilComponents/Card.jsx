import React from 'react'
function dataAno(date) {
    if(date==="Presente"){
        return "Presente"
    } else{
        const [ano, mes] = date.split('-')
        const nomeMes = new Date(ano, parseInt(mes) - 1).toLocaleString('pt-BR', { month: 'long' });
        const stringFormatada = `${nomeMes}/${ano}`;
        return stringFormatada
    }
}

const CardExperiencia = ({experiencia}) => {
    const dateInicio = dataAno(experiencia.datainicio);
    const dateTermino = dataAno(experiencia.datatermino);

  return (
    <div style={{background:"rgba(0, 0, 0, 0.2)", padding:"10px", width:"350px", borderRadius:"10px", display:"flex", flexDirection:'column', color:"#fff", marginTop:"10px", marginBottom:"10px"}}>
        <span>{experiencia.cargo}</span>
        <span>{experiencia.empresa}</span>
        <span>{experiencia.resumo}</span>
        <span>{dateInicio} - {dateTermino}</span>
    </div>
  )
}
const CardFormacao = ({form}) => {
    const dateInicio = dataAno(form.datainicio);
    const dateTermino = dataAno(form.datatermino);
    return (
        <div style={{background:"rgba(0, 0, 0, 0.2)", padding:"10px", width:"350px", borderRadius:"10px", display:"flex", flexDirection:'column', color:"#fff", marginTop:"10px", marginBottom:"10px"}}>
            <span>{form.curso}</span>
            <span>{form.empresa}</span>
            <span>{form.resumo}</span>
            <span>{dateInicio} - {dateTermino}</span>
        </div>
    )
}

const CardCurso = ({curso}) => {
    const dateInicio = dataAno(curso.datainicio);
    const dateTermino = dataAno(curso.datatermino);
    return (
        <div style={{background:"rgba(0, 0, 0, 0.2)", padding:"10px", width:"350px", borderRadius:"10px", display:"flex", flexDirection:'column', color:"#fff", marginTop:"10px", marginBottom:"10px"}}>
            <span>{curso.nome}</span>
            <span>{curso.resumo}</span>
            <span>{curso.empresa}</span>
            <span>{dateInicio} - {dateTermino}</span>
        </div>
    )
  }
const CardBio = ({bio}) => {
return (
    <div  style={{background:"rgba(0, 0, 0, 0.2)", padding:"10px", width:"350px", borderRadius:"10px", display:"flex", flexDirection:'column', color:"#fff", marginTop:"10px"}}>
        <span>{bio}</span>
    </div>
)
}

export {CardExperiencia, CardFormacao, CardCurso, CardBio} 