import React from 'react'

function Body({arr}) {
    
  return (
    <div>
        {
            arr.map(({title,price})=>{
               return (
                <article>
                    <p>title:{title}</p>
                    <p>price:{price}</p>
                </article>
               )
               
            })
        }
    </div>
  )
}

export default Body