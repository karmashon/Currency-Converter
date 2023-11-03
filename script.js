const apiURL = "https://api.jsonbin.io/v3/b/6543f60954105e766fca90df/latest";
const accessKey = "9297371cdeee64cfa05ec2c5b34bb6a4";

/*const xhr = new XMLHttpRequest();
xhr.open("GET", `${apiURL}?access_key=${accessKey}`);
xhr.send();

xhr.onload = function() {
  if (xhr.status === 200) {
    // Success!
    const responseJSON = JSON.parse(xhr.responseText);
    document.body.innerHTML = "Done";
  } else {
    // Error!
    document.head.innerHTML = "Not done";
  }
};*/

function dropdown()
{

const dropdown = document.querySelector("#dropdown");

const jsonObject = ["T1","T2"]

for (const property in jsonObject) {
  const optionElement = document.createElement("option");
  optionElement.value = property;
  optionElement.textContent = property;
  dropdown.appendChild(optionElement);
}
}
dropdown();

const convertButton = document.getElementById("confirm");

function onlyNum(event)
{
    var key = event.keyCode || event.charCode;
    var eventKey = event.key;

    if (eventKey==="Backspace")
        return true;

    if (eventKey===".")
        return true;

    // Allow certain special keys (e.g., arrow keys, delete, backspace, etc.)
    if (
        event.ctrlKey ||
        event.altKey ||
        key < 48 ||
        (key > 57 && key < 96) ||
        key > 105
    ) {
        return false;
    }

    // Prevent alphabetic characters
    if ((key >= 65 && key <= 90) || (key >= 97 && key <= 122)) {
        return false;
    }
}

function Convert()
{
    const val1 = document.getElementById("drop1").value;
    const val2 = document.getElementById("drop2").value;

    const c1 = parseFloat(val1);
    const c2 = parseFloat(val2);

    const convRate = c2/c1;
    const in1 = document.getElementById("input1");
    const in2 = document.getElementById("input2");
    in2.value= (parseFloat(in1.value)/convRate).toFixed(2);


}