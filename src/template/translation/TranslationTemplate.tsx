"use client";

import { getTranslationValues } from "@/src/lib/translation_server/GetTranslationValue";
import { useStoreContext } from "@/src/store/TranslationListProvider";
import React, { useEffect, useRef, useState } from "react";

interface Translation {
  id: string;
  translation_id: string;
  english: string;
  french: string;
  german: string;
  russian: string;
  spanish: string;
}

type Language = "english" | "french" | "german" | "spanish" | "russian";

const TranslationTemplate = () => {
  const store = useStoreContext();
  const divRef = useRef<HTMLDivElement>(null);
  const [translationIds, setTranslationIds] = useState<string[]>([]);
  const [translationValues, setTranslationValues] = useState<Translation[]>([]);

  const languageArrya: Language[] = [
    "english",
    "french",
    "german",
    "spanish",
    "russian",
  ];
  const lan: Language = languageArrya[1];

  const translationValue = async (ids: string[]) => {
    try {
      const translationValue = await getTranslationValues(ids, lan);
      setTranslationValues(translationValue);
    } catch (error) {
      console.error(error);
    }
  };

  const getTextForId = (id: string) => {
    const translation = translationValues.find(
      (value) => value.translation_id === id
    );
    return translation ? translation[lan] : "";
  };

  useEffect(() => {
    if (divRef.current) {
      const ids = Array.from(divRef.current.querySelectorAll("*"))
        .map((element) => element.id)
        .filter((id): id is string => id !== "");

      if (JSON.stringify(translationIds) !== JSON.stringify(ids)) {
        setTranslationIds(ids);
        if (ids.length > 0) {
          store.addTranslationList(ids);
          translationValue(ids);
        }
      }
    }
  }, [store]);

  return (
    <div ref={divRef}>
      <p id="T003">{getTextForId("T003")}</p>
      <p id="T002">{getTextForId("T002")}</p>
      <p id="T003">{getTextForId("T003")}</p>
      <p id="T004">{getTextForId("T004")}</p>
      <div id="T005">{getTextForId("T005")}</div>
      <br />
      <span id="T006">{getTextForId("T006")}</span>
    </div>
  );
};

export default TranslationTemplate;
