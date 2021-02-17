import React, {useEffect , useState} from 'react';
import './App.css';
import Recipe from '../src/recipe';
 

function App() {

  const APP_ID = "3fe679ee";
  const App_KEY = "2fb0d0280958d13376b57a7a48226bc8	";

  const [recipes , setRecipes] = useState([]); 
  const [search , setSearch] = useState("");
  const [query , setQuery] = useState('chicken')
 
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch (
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${App_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits) ;
    console.log(data.hits);
  } 

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
 
  return (
    <div className="App">

        <form className="search-form" onSubmit={getSearch}>
         <input className="search-bar" type="text" value= {search} onChange={updateSearch} />
         <button className="search-button" type="submit" >
          Submit
           </button> 
        </form>
        <div className="resipes"> 
      {recipes.map(recipe => (
        <Recipe
            key={recipe.recipe.label}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image} 
                ingredients = {recipe.recipe.ingredients}
          />
      ))}
      </div>
      </div>
  );
};
         

export default App
