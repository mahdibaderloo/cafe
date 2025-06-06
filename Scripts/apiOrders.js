import supabase from "./supabase.js";

export async function addOrder(order, totalPrice) {
  const { data, error } = await supabase
    .from("orders")
    .insert([{ order, total_price: Number(totalPrice) }])
    .select();

  if (error) {
    console.error("Insert error:", error);
    throw new Error(error.message);
  }

  console.log("Insert success:", data);
  return data;
}
