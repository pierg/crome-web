export default function makeStringOf(list) {
  if (typeof list === "string") return list;

  let str = "";
  for (let i = 0; i < list.length - 1; i++) {
    str += list[i] + ",";
  }

  str += list[list.length - 1];
  return str;
}
