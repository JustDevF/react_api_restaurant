import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  //Use context
  const {cocktails, loading} = useGlobalContext()
  
  //Si l'état de loading est true on renvoie le composant Loading sinon en renvoi le composant Cocktail avec une liste de cocktail
  if (loading) {
    return <Loading />
  }
  //Le cocktail rechercher est introuvable 
  if (cocktails.length < 1) {
    return (
    <h2 className="section-title">
      Désolé on a pas trouvé le cocktail démandé
    </h2>
  )
  }
  //Return le composant Cocktail contenant la liste de cocktails(...cocktail c-à-d : image, name, id, info, glass transmis en accessoire au composant Cocktail
  return (
    <section className="section">
      <h2 className="section-title">
        Coctails
      </h2>
      <div className="cocktails-center">
        {cocktails.map((cocktail) => {
          return <Cocktail key={cocktail.id} {...cocktail} />
        })}
      </div>
    </section>
  )
}

export default CocktailList