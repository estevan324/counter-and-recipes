import Recipe from "@/interfaces/Recipe";
import React from "react";

interface CardProps {
  recipe: Recipe;
}

export default function Card({ recipe }: CardProps) {
  return (
    <div className="w-lg rounded overflow-hidden shadow-lg bg-slate-100 pt-4">
      <img
        className="rounded-t-lg mx-auto object-cover object-center h-64 w-64"
        src={recipe.link_imagem}
        alt={recipe.receita}
      />
      <div className="px-6 pt-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 capitalize">
          {recipe.tipo}
        </span>
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-center">
          {recipe.receita}
        </h5>
        <div className="text-gray-700 text-justify">
          <small>{recipe.ingredientes}</small>
        </div>
      </div>
    </div>
  );
}
