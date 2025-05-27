import supabase from "./supabase.js";

export async function getItems() {
  const { data, error } = await supabase.from("items").select("*");

  if (error) {
    console.error(error);
    throw new Error("Items could not be loaded");
  }

  return data;
}
