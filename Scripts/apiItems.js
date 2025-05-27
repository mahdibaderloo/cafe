import supabase from "./supabase.js";

export async function getItems() {
  const { data, error } = await supabase.from("items").select("*");

  if (error) {
    console.error(error);
    throw new Error("Items could not be loaded");
  }

  return data;
}

export async function updateItem(item) {
  const { id, image, product, price, desc } = item;

  console.log("Updating item:", item);

  const { data, error } = await supabase
    .from("items")
    .update({ image, product, price, desc })
    .eq("id", id)
    .select();

  if (error) {
    console.error("Update error:", error);
    throw new Error(error.message);
  }

  console.log("Update success:", data);
  return data;
}
