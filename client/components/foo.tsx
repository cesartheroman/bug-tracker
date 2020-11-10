export default function sum(...a: number[]) {
  a.reduce((acc, val) => acc + val, 0);
}
