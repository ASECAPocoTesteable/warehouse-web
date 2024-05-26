import React from 'react';

const DevolutionCard = ({ devolutionId, devolutionStatus }) => {
    return (
        <div style={{ backgroundColor: "white", color: "black", padding: "10px", borderRadius: "10px"}}>
            <p>Devolution ID: {devolutionId}</p>
            <p>Devolution Status: {devolutionStatus}</p>
        </div>
    );
};

export default DevolutionCard;
