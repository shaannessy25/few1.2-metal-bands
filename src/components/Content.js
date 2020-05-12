import React from 'react'
import Counter from './Like'




function Content(props) {
    const { name, id, fans, formed, origin, split } = props
    return (
        <div>
            <h2> {name} </h2>
            <h4>{id}</h4>
            <h4>Formed: {formed}</h4>
            <h4>{fans}</h4>
            <h4>Country: {origin}</h4>
            <h3>Split: {split}</h3>
            <Counter />
        </div>
    )
}




export default Content;