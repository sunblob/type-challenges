type ExampleType = Promise<string>;

type Kek = MyAwaited<ExampleType>; // string

// promise in promise
type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T;
