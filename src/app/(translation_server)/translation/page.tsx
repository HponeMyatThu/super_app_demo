import { TranslationStoreProvider } from "@/src/store/TranslationListProvider";
import TranslationTemplate from "@/src/template/translation/TranslationTemplate";
import React from "react";

const TranslationPage = () => {
  return (
    <>
      <TranslationStoreProvider>
        <TranslationTemplate />
      </TranslationStoreProvider>
    </>
  );
};

export default TranslationPage;
