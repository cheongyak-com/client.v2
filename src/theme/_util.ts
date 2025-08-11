/**
 * camelCase 문자열을 kebab-case 로 변환
 */
export const camelToKebab = (str: string): string => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

/**
 * 주어진 객체를 CSS 변수 선언 문자열로 변환
 * @returns --{kebab-case key}: {value};
 */
type NestedObject = {
  [key: string]: string | number | boolean | NestedObject;
};
export const objectToCssVariables = (themeColor: NestedObject, prefix?: string): Record<string, string> => {
  return Object.entries(themeColor).reduce<Record<string, string>>((acc, [key, value]) => {
    const cssKey = prefix ? `${prefix}-${camelToKebab(key)}` : `--${camelToKebab(key)}`;

    if (typeof value === 'object' && value !== null) {
      Object.assign(acc, objectToCssVariables(value, cssKey));
    } else {
      acc[cssKey] = String(value);
    }

    return acc;
  }, {});
};
