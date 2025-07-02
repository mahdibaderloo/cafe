import supabase from "./supabase.js";
import { toast } from "./toast.js";

export async function addOrder(
  order,
  totalPrice,
  username,
  mobile,
  isTakeaway
) {
  const { data, error } = await supabase
    .from("orders")
    .insert([
      {
        order,
        total_price: totalPrice,
        username,
        mobile,
        is_takeaway: isTakeaway,
      },
    ])
    .select();

  if (error) {
    toast("خطا در ثبت سفارش", "error");
    console.log(error);
    return null;
  } else {
    toast("سفارش شما ثبت شد", "success");
    return data;
  }
}

export async function getOrders() {
  let { data, error } = await supabase.from("orders").select("*");

  if (error) {
    throw new Error("Orders could not be loaded");
  }

  return data;
}

export async function getOrder(id) {
  let { data, error } = await supabase.from("orders").select("*").eq("id", id);

  if (error) {
    throw new Error("Order could not be loaded");
  }

  return data;
}
