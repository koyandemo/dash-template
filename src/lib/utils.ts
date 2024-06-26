import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function classNames(...classes: string[] | Object[]) {
  return classes.filter(Boolean).join(' ');
}

export const debounce = (fn: Function, delay: number) => {
  let id: NodeJS.Timeout;
  return () => {
    if (id) clearTimeout(id);
    id = setTimeout(() => {
      fn();
    }, delay);
  };
};

// export function debounce<F extends (...args: Parameters<F>) => ReturnType<F>>(
//   fn: F,
//   delay: number
// ): (...args: Parameters<F>) => void {
//   let id: NodeJS.Timeout;
//   return (...args) => {
//     if (id) clearTimeout(id);
//     id = setTimeout(() => {
//       fn(...args);
//     }, delay);
//   };
// }
