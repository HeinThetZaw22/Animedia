import { supabase } from "@/lib/supabase";

export const getUserData = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select()
      .eq("id", userId)
      .single();

    if (error) return { success: false, message: error.message };
    return { success: true, data };
  } catch (error: any) {
    console.log("Error getting user data", error);
    return { success: false, message: error.message };
  }
};
