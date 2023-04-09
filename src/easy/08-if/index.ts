type A = If<true, 'a', 'b'>; // expected to be 'a'
type B = If<false, 'a', 'b'>; // expected to be 'b'

type If<T extends boolean, Good, Bad> = T extends true ? Good : Bad;
