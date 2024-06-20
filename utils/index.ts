export function classNames(...classes: string[] | Object[]) {
  return classes.filter(Boolean).join(' ');
}
