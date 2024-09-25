"use server";

import { pool } from "@/src/lib/oauth_email/postgres";

export const clearStaleTokens = async () => {
  try {
    await pool.query("DELETE FROM verification_token WHERE expires < NOW();");
  } catch (error) {
    throw error;
  }
};
