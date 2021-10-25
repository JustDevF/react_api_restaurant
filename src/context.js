import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

//API Cocktail DB url endpoint
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

//Use context
const AppContext = React.createContext()

//Context component
const AppProvider = ({ children }) => {
  //useState pour le composant searchForm
  const [searchTerm, setSearchTerm] = useState('a')
  //useState pour le composant Loading
  const [loading, setLoading] = useState(true)
  //useState pour le composant cocktailList
  const [cocktails, setCocktails] = useState([])

  //Récupération de données de l'API
  //useCallback Fournissez une fonction de rappel et un tableau d’entrées. useCallback renverra une version mémoïsée de la fonction de rappel qui changera uniquement si une des entrées a changé.
  const fetchDrinks = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      //voir les données renvoyées par l'API converties en json
      //console.log(data);
      const {drinks} = data
      if (drinks) {
        const newCocktails = drinks.map((cocktail) => {
          //récupération des propriétés objets de drinks dans different objet 
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass
          } = cocktail
          //on les initialise comme dans le fichier original 
          //{id: "17222", name: "A1", image: "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg", info: "Alcoholic", glass: "Cocktail glass"}
          return {
            id: idDrink, 
            name:strDrink, 
            image:strDrinkThumb, 
            info:strAlcoholic, 
            glass: strGlass}
        })
        //Mise à jour d'état de cocktails
        setCocktails(newCocktails)
      }
      else {
        setCocktails([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [searchTerm])

  //useEffect à chaque changement de valeut de searchTerm
  //UseEffect s'exécute autom une fois 
  useEffect(() => {
    fetchDrinks()
  }, [searchTerm,fetchDrinks])


  return <AppContext.Provider value={{
    setSearchTerm,
    loading,
    cocktails,
  }}>
            {children}
      </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }