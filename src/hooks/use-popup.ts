"use client";

import { useCallback } from "react";

export const POPUP_TRIGGER_EVENT = "open-popup-form";

export const usePopup = () => {
  const openPopup = useCallback(() => {
    window.dispatchEvent(new CustomEvent(POPUP_TRIGGER_EVENT));
  }, []);

  return { openPopup };
};
