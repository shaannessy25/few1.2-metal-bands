import React from 'react'
import data from '../metal.json'
import Content from './Content'



function Band() {
    let count = 0
    const band = data.map((band, i) => {
        count += 1
        return (
            <Content
                key={`${band.ID}`} 
                name={band.band_name}
                fans={band.fans}
                formed={band.formed}
                origin={band.origin}
            />

            )
      })

      return(
        <div>
            <h1>{count} bands</h1>
            { band }
       </div>
      )
    }
export default Band;