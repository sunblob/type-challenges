type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Esidisi'>; // expected to be `false`

type Includes<T extends any[], U extends string> = T extends [infer F, ...infer Rest]
  ? F extends U
    ? true
    : Includes<Rest, U>
  : false;
