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
    return;
  }

  const user = data.user;
  if (!user) {
    return;
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", user.id)
    .single();

  if (profileError) {
    console.error("❌ خطا در گرفتن کاربر:", profileError.message);
  } else {
    return profile;
  }
}
