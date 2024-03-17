import Recipe from "@/interfaces/Recipe";
import axios, { AxiosResponse } from "axios";

export default {
  loadRecipes: async () => {
    const res: AxiosResponse<Recipe[]> = await axios.get(
      `${process.env.HOST}/api/recipes`
    );

    return res.data;
  },
};
