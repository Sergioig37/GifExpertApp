import React from 'react'

export const Gifs = ({id, title, url}) => {

  return (
    <>
       
        <div key={id}>
            <h3>{title}</h3>
            <img src={url} alt="" />
        </div>
       
    </>
  )
}
