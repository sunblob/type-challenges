type Result = MyExclude<'a' | 'b' | 'c', 'a'>; // 'b' | 'c'

type MyExclude<T, U extends string> = T extends T ? (T extends U ? never : T) : never;
