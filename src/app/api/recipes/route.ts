import api from "@/configs/api";
import Recipe from "@/interfaces/Recipe";
import { AxiosResponse } from "axios";
import { NextResponse } from "next/server";

export const GET = async () => {
  const recipes: AxiosResponse<Recipe[]> = await api.get("/receitas/todas");

  return NextResponse.json(recipes.data);
};
