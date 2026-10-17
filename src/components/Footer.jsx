import React from 'react'

function Footer({fruits,school}) {
  return (
    <div>
        {fruits}
    
    {school.name}
    {school.class}
    </div>
  )
}

export default Footer