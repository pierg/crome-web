export default function deleteSubArrays(table) {
  let result = [];
  let valid;
  for (let i in table) {
    valid = true;
    for (let j in table) {
      if (i !== j) {
        if (table.hasOwnProperty(j)) {
          if (table.hasOwnProperty(i)) {
            if (isSubArray(table[j], table[i])) {
              valid = false;
            }
          }
        }
      }
    }
    if (valid && table.hasOwnProperty(i)) {
      result.push(table[i]);
    }
  }
  return result;
}

function isSubArray(master, sub) {
  return master.join("|").includes(sub.join("|"));
}
