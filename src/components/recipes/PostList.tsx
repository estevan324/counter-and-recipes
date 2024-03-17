import Recipe from "@/interfaces/Recipe";
import RecipeProvider from "@/providers/RecipeProvider";
import React from "react";
import Card from "./Card";

async function getData() {
  const response = await RecipeProvider.loadRecipes();

  return response;
}

export default async function PostList() {
  const recipes: Recipe[] = await getData();

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
      {recipes.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
