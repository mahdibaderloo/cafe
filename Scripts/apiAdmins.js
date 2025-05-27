import supabase from "./supabase.js";

export async function isValidAdmin(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return false;
  } else {
    getAdmin(data);
    return true;
  }
}

export async function getAdmin() {
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error("❌ خطا در گرفتن کاربر:", error.message);
    return;
  }

  const user = data.user;
  if (!user) {
    console.error("❌ کاربر لاگین نکرده");
    return;
  }

  console.log("✅ کاربر فعلی:", user);

  // کوئری روی ستون user_id انجام میشه
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("username, email, image, role")
    .eq("user_id", user.id)
    .maybeSingle();

  if (profileError) {
    console.error("❌ خطا در گرفتن پروفایل:", profileError.message);
  } else if (!profile) {
    console.warn("⚠️ پروفایل یافت نشد");
  } else {
    console.log("🧑‍💻 پروفایل:", profile);
    // اینجا میتونی نمایش بدی یا توی UI بفرستی
  }
}
