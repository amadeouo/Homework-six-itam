function wrap<T>(value: T): { value: T} {
  return { value };
}

console.log(wrap(true))