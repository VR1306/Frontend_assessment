export const accessNestedFields = (obj, name) => {
  const keys = name
    .split(".")
    ?.map((key) => (isNaN(Number(key)) ? key : Number(key)));
  switch (keys.length) {
    case 1:
      return obj?.[keys?.[0]];
    case 2:
      return obj?.[keys?.[0]]?.[keys?.[1]];
    case 3:
      return obj?.[keys?.[0]]?.[keys?.[1]]?.[keys?.[2]];
    default: return null
  }
};