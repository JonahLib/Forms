export const shouldRenderHint = (error?: string, hint?: string): boolean => {
  return !error && !!hint;
};
