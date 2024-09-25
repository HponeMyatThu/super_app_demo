"use client";

import { useStoreContext } from "@/src/store/TranslationListProvider";
import React, { useEffect, useRef, useState } from "react";

const TranslationTemplate = () => {
  const store = useStoreContext();
  const divRef = useRef<HTMLDivElement>(null);
  const [translationIds, setTranslationIds] = useState<string[]>([]);

  useEffect(() => {
    if (divRef.current) {
      const ids = Array.from(divRef.current.querySelectorAll("*"))
        .map((element) => element.id)
        .filter((id): id is string => id !== "");
      setTranslationIds(ids);
    }

    if (translationIds.length > 0) {
      store.addTranslationList(translationIds);
    }
  }, [store]);

  return (
    <div ref={divRef}>
      <p id="T001">{"Hello"}</p>
      <p id="T002">{"Goodbye"}</p>
      <p id="T003">{"Thank you"}</p>
      <p id="T004">{"Yes"}</p>
      <div id="T005">{"Nested element"}</div>
      <br />
      <span id="T006">{"Another element"}</span>
    </div>
  );
};

export default TranslationTemplate;
