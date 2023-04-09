type Result2 = Concat<[1], [2]>; // expected to be [1, 2]

type Concat<T extends any[], U extends any[]> = [...T, ...U];

const arr = [];

// console.log(arr['concat']([1, 2, 3]))
