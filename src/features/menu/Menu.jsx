import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";

import MenuItem from "./MenuItem";

function Menu() {
  const recipes = useLoaderData();
  
  return <ul className="flex flex-col  divide-y-2 mx-4">
    {recipes.map(recipe => <MenuItem key={recipe.id} recipe={recipe} />)}
  </ul>
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const menu = await getMenu();
  console.log(menu);
  return menu;
}
export default Menu;
