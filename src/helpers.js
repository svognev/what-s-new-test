export const isValidId = (versions, id) => {
  return versions.some(({number}) => {
    return number.replace(".", "-") === id;
  })
}

export const replaceLangLinks = (id) => {
  const linksArray = document.getElementsByClassName(`changeLangLink`);
  for (let i = 0; i < linksArray.length; i++) {
    if (linksArray[i].href.includes("/de")) {
      linksArray[i].href = `${window.PUBLIC_URL}/#/de/${id}`;
    } else {
      linksArray[i].href = `${window.PUBLIC_URL}/#/en/${id}`;
    }
  }
}

export const breakIntoLines = (stringToBreak, maxLength, stringsNum) => {
  const stringsArr = stringToBreak.split(" ");
  let newStringsArr = Array(stringsNum).fill("");
  for (let i = 0, j = 0; i < stringsArr.length; i++) {
    if (newStringsArr[j].length + stringsArr[i].length + 1 <= maxLength) {
      newStringsArr[j] += ` ${stringsArr[i]}`
    } else {
      if (j < stringsNum - 1) {
        j++;
        newStringsArr[j] += stringsArr[i];
      } else {
        newStringsArr[j] += ` ${stringsArr.slice(i).join(" ")}`;
        break;
      }
    }
  }
  return newStringsArr;
}