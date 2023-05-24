import React from 'react'

const Match = ({setState}) => {
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
                zIndex: 9999,
            }}
            >
            <div
                style={{
                backgroundColor: "#fff",
                borderRadius: "0.5rem",
                padding: "1rem",
                color: "#f00",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column"
                }}
            >
                <h1 style={{ marginTop: "1rem" }}>PARABENS VOCÊ DEU MATCH!</h1>
                <button
                onClick={() => setState(0)}
                style={{
                    padding: "0.75rem 1rem",
                    backgroundColor: "#2d3748",
                    borderRadius: "0.25rem",
                    color: "#fff",
                    marginTop: "0.5rem",
                    marginBottom: "1rem",
                    transition: "all 300ms",
                    ":hover": {
                    backgroundColor: "#cbd5e0",
                    color: "#000"
                    }
                }}
                >
                OK!
                </button>
            </div>
        </div>
    )
}

export default Match