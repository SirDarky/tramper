import React from 'react'

const DetailsVaga = ({vaga, setState}) => {
    return (
        <div
            style={{
                position: "fixed",
                top: "0",
                right: "0",
                bottom: "0",
                left: "0",
                backgroundColor: "rgba(0, 0, 0, 0.75)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999
            }}
            >
            <div
                style={{
                backgroundColor: "#fff",
                borderRadius: "0.5rem",
                padding: "1rem",
                color: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                width:"500px"
                }}
            >
                <h1 style={{ marginTop: "1rem" }}>Cargo: {vaga.cargo}</h1>
                <h1 style={{ marginTop: "1rem" }}>Requisitos: {vaga.requisito}</h1>
                <h1 style={{ marginTop: "1rem" }}>Descrição: {vaga.descricao}</h1>
                <h1 style={{ marginTop: "1rem" }}>Beneficios: {vaga.beneficios}</h1>
                <h1 style={{ marginTop: "1rem" }}>Salario: {vaga.salario}</h1>
                <h1 style={{ marginTop: "1rem" }}>Local da Vaga: {vaga.localVaga}</h1>
                <button onClick={()=>{setState(false)}}>Fechar</button>
            </div>
        </div>
    )
}

export default DetailsVaga