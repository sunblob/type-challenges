// type DeepReadonly<T> = T extends never ? T : { readonly [key in keyof T]: DeepReadonly<T[key]> };
type DeepReadonly<T> = {
  readonly [k in keyof T]: T[k] extends Record<any, any> ? (T[k] extends Function ? T[k] : DeepReadonly<T[k]>) : T[k];
};

import type { Equal, Expect } from '@/utils';

type cases = [Expect<Equal<DeepReadonly<X1>, Expected1>>, Expect<Equal<DeepReadonly<X2>, Expected2>>];

type X1 = {
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: 'string';
        };
        k: 'hello';
      };
      l: [
        'hi',
        {
          m: ['hey'];
        }
      ];
    };
  };
};

type X2 = { a: string } | { b: number };

type Expected1 = {
  readonly a: () => 22;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: 'string';
        };
        readonly k: 'hello';
      };
      readonly l: readonly [
        'hi',
        {
          readonly m: readonly ['hey'];
        }
      ];
    };
  };
};

type t = DeepReadonly<X1>;
type t2 = DeepReadonly<X2>;

type Expected2 = { readonly a: string } | { readonly b: number };
