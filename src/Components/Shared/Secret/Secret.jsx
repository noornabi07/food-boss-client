import React from 'react';

const Secret = () => {

    const handleTestData = () =>{
        const items = {name: 'noornabi', email: 'nurnobi@gmail.com', work: 'teacher'}
        console.log(items)
        fetch('http://localhost:5000/test', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(items)
        })
    }

    return (
        <div>
            
            <button onClick={handleTestData}  className="btn btn-accent mt-20 text-center">Accent</button>
        </div>
    );
};

export default Secret;