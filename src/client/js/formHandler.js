import { doSentimentAnalysis } from "./sentimentAnalysis";

async function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let enteredUrl = document.getElementById("txtUrl").value;

  if (enteredUrl === "") {
    alert("Url field is not empty");
    return;
  }

  console.log("::: Form Submitted :::");
  try {
    if (Client.isValidUrl(enteredUrl)) {
      const data = await doSentimentAnalysis(enteredUrl);
      if (data) {
        document.querySelector("#results").innerHTML = JSON.stringify(
          data,
          undefined,
          2
        );
        document.querySelector("form").style.backgroundColor = "#28a745";
        document.querySelector("form").style.color = "#fff";
      } else {
        document.querySelector("form").style.backgroundColor = "#dc3545";
        document.querySelector("form").style.color = "#fff";
        alert("Somethings wrong. Please try again later !");
      }
    } else {
      document.querySelector("#txtUrl").style.backgroundColor = "#dc3545";
      document.querySelector("#txtUrl").style.color = "#fff";
      alert("Url is not valid.");
    }
  } catch (error) {
    alert(error);
  }
}

export { handleSubmit };
