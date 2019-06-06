export const isValidId = (versions, id) => {
  return versions.some(({number}) => {
    return number.replace(".", "-") === id;
  })
}

export const replaceLangLinks = (id) => {
  const linksArray = document.getElementsByClassName(`changeLangLink`);
  for (let i = 0; i < linksArray.length; i++) {
    if (linksArray[i].href.includes("/de")) {
      linksArray[i].href = `${window.PUBLIC_URL}/de/${id}`;
    } else {
      linksArray[i].href = `${window.PUBLIC_URL}/en/${id}`;
    }
  }
}