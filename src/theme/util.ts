import { THEME_COLOR, ThemeColorPath } from '@/theme/color';

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

/**
 * 객체를 인라인 스타일용 CSS 변수 객체로 변환
 * @param { primaryColor: '#ff0000' }
 * @returns { '--primary-color': '#ff0000' }
 */

/**
 * 객체를 CSS 변수 선언 문자열로 변환
 * prop 으로 전달받은 color path 문자열을 실제 object 의 색상으로 변환하여 반환
 */
export const pathToThemeColor = <P extends ThemeColorPath>(
  path: P
): P extends keyof typeof THEME_COLOR ? (typeof THEME_COLOR)[P] : undefined => {
  return path.split('.').reduce((acc: any, key: string) => acc?.[key], THEME_COLOR);
};
