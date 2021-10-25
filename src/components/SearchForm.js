import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  //Use context
  //Maj Etat searchTerm par le champs de saisie utilisateur
  const {setSearchTerm} = useGlobalContext()

  //Use ref : pour récupérer est stocker la saisie de l'utilisateur
  //Renvoie un objet ref modifiable dont la propriété actuelle est init avec l'arg fourni: ici c'est ''
  // L’objet renvoyé persistera pendant toute la durée de vie composant
  const searchValue = React.useRef('')

  //Fonction pour mèttre a jour l'état de searchTerm
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  //permet de garder la page sans le recharger
  React.useEffect(() => {
    searchValue.current.focus();
  })

  //Empêcher de recharger la page si l'utilisateur clique sur le btn rentre 
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  //Renvoie un formulaire de recherche
  return (
    <section className="section search">
      <form  className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Recherche un cocktail </label>
          <input type="text" id="name" ref={searchValue} onChange={searchCocktail}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm