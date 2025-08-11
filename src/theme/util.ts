import { THEME_COLOR, ThemeColorPath } from '@/theme/color';

/**
 * prop 으로 전달받은 color path 문자열을 실제 object 의 색상으로 변환하여 반환
 */
export const pathToThemeColor = <P extends ThemeColorPath>(path: P): string => {
  return path.split('.').reduce((acc: any, key: string) => acc?.[key], THEME_COLOR);
};