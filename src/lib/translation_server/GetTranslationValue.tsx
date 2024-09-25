"use server";

import { pool } from "@/src/lib/translation_server/postgres";

export const getTranslationValues = async (ids: string[], lan: string) => {
  try {
    if (ids.length === 0) return [];
    const query = `
        SELECT translation_id, ${lan} FROM translation 
        WHERE translation_id = ANY($1::text[])
      `;

    const result = await pool.query(query, [ids]);
    return result.rows;
  } catch (error) {
    console.error("error", error);
    return [];
  }
};
