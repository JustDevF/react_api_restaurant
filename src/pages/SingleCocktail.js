import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  //useParams renvoie un objet de paires clé/valeur de paramètres d'URL. Utilisez-le pour accéder aux match.params de la <Route> actuelle
  //récupère l'id d'un seul coctail passé au lien /cocktail/${id} dans le composant coctail
  const {id} = useParams()
 
  //Etat init local 
  const [loading, setLoading] = React.useState(false)
  const [cocktail, setCocktail] = React.useState(null)

  //Récupérer un seul cocktail à partir de son id à chaque fois que l'id de lien change
  React.useEffect(() => {
    setLoading(true)
    //Fonction de récup de données API 
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        //Vérifier s'il existe de données envoyés 
        if (data.drinks) {
          const {
            strDrink:name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instruction,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          ]

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instruction,
            ingredients,
          }

        setCocktail(newCocktail)
        }
        else{
          setCocktail(null)
        }
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    }
    getCocktail()
  }, [id])

  if (loading) {
    return <Loading />
  }

  if (!cocktail) {
    return <h2 className="section-title">
      Zéro coctail à afficher
    </h2>
    }
  
    //récup de donnée d'état actuel
  const {
      name,
      image,
      info,
      category,
      glass,
      instruction,
      ingredients,
    } = cocktail

  return (
    <section className="section cocktail-section">
       {/*Le lien de nav pour retourner à la page d'accueil */}
      <Link to="/" className="btn btn-primary">
        Retour à la page d'accueil
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name}/>
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instruction:</span>
            {instruction}
          </p>
          <p>
            <span className="drink-data">ingredients:</span>
            {ingredients.map((item, index) => {
              return item? <span key={index}>{item}</span> :null
            })}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail