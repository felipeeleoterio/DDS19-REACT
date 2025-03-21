import React from 'react'
import ney from "../assets/ney.jpg"

const Images = () => {
  console.log(ney)
    return (
    <div>
        <h1>Imagens</h1>
        <h2>Subtìtulo de imagens</h2>
        {/* Imagem na pasta pública */}
        <img src='./flu.jpg' width={500} height={500}></img>
        {/* Imagem vindo da pasta assets */}
        <img src={ney} width={900} height={500}></img>
    </div>
  )
}

export default Images