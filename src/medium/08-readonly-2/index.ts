type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> & {
  readonly [key in K]: T[key];
};

import type { Alike, Expect } from '@/utils';

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'description'>, Expected>>
];

// @ts-expect-error
type error = MyReadonly2<Todo1, 'title' | 'invalid'>;

type t = MyReadonly2<Todo1, 'title' | 'description' | 'completed'>;

const test: t = {
  title: 'asdas',
  description: 'sada',
  completed: false,
};

// @ts-expect-error
test.completed = true;

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}
