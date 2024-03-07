import React from 'react'

const Block = (props) => {
    return (

        <div className="container card" style={{ "width": "15rem", 'height': '180px' }}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">lets get started &rarr;</a>
            </div>
        </div>

    )
}

export default Block
