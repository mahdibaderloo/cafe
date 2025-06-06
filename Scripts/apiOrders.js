import supabase from "./supabase.js";

export async function addOrder(order, totalPrice) {
  const { data, error } = await supabase
    .from("orders")
    .insert([{ order, total_price: totalPrice }])
    .select();

  if (error) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      color: "#351f08",
      background: "#fff",
      width: "80%",
      fontSize: 16,
    });
    Toast.fire({
      icon: "error",
      title: "خطا در ثبت سفارش",
      iconColor: "#351f08",
    });

    return null;
  } else {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      color: "#351f08",
      background: "#fff",
      width: "80%",
      fontSize: 16,
    });
    Toast.fire({
      icon: "success",
      title: "سفارش شما ثبت شد",
      iconColor: "#351f08",
    });

    return data;
  }
}
