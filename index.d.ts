export default function fluent<TObj extends object>(
  object: TObj
): {
  [K in keyof TObj as TObj[K] extends (...args: any[]) => any
    ? K
    : never]: TObj[K] extends (...args: infer A) => any
    ? (...args: A) => TObj
    : never;
};
