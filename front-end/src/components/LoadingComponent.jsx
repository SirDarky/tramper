import React from 'react'

const LoadingComponent = () => {
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
                <h1 style={{ marginTop: "1rem" }}>Loading...</h1>
            </div>
        </div>
    )
}

export default LoadingComponent