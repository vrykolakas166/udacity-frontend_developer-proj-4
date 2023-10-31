function isValidUrl(enteredUrl) {
  console.log("::: Running checkUrl :::", enteredUrl);

  var expression =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  var regex = new RegExp(expression);

  if (enteredUrl === "") {
    return false;
  }

  if (enteredUrl.match(regex)) {
    return true;
  } else {
    return false;
  }
}

export { isValidUrl };
