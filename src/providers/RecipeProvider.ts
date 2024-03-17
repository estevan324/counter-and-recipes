import Recipe from "@/interfaces/Recipe";
import axios, { AxiosResponse } from "axios";

const RecipeProvider = {
  loadRecipes: async () => {
    const res: AxiosResponse<Recipe[]> = await axios.get("/api/recipes");

    return res.data;
  },
};

export default RecipeProvider;
