import { AnchorProps, Props } from './_type';

export const isAnchor = (props: Props): props is AnchorProps => {
  return props.as === 'a' || !!props.href;
};

// 전달받은 prop 을 data-{prop} 형태로 변경
export const parseDataValue = <Value>(obj: Record<string, Value>) => {
  return Object.entries(obj).reduce<Record<string, string>>(
    (acc, [key, value]) => ({
      ...acc,
      ...(value ? { [`data-${String(key)}`]: String(value) } : {}),
    }),
    {}
  );
};
