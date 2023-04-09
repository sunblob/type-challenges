type HelloWorld = string; // expected to be a string

import type { Equal, Expect, NotAny } from '@/utils';

type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];

// type arr = [1,2,3,4,5]

// type Kek<T> = T extends [infer First, ...infer Rest] ? First : []

// type blablabla = Kek<arr>
