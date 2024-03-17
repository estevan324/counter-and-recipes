"use client";

import React, { useEffect, useState } from "react";

import Recipe from "@/interfaces/Recipe";
import RecipeProvider from "@/providers/RecipeProvider";
import Card from "./Card";
import { ClipLoader } from "react-spinners";

export default function PostList() {
  const [loading, setLoading] = useState<boolean>(false);
  const [recipes, setRecipes] = React.useState<Recipe[]>([]);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const data = await RecipeProvider.loadRecipes().finally(() => {
        setLoading(false);
      });

      setRecipes(data);
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-6">
        <ClipLoader color="#000" size={40} />
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
      {recipes.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
