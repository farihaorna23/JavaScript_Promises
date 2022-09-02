/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */
let p = document.getElementById("error");
let list = document.getElementById("list");

console.log(p, list);

function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      console.log(potentialFail);
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

let promiseResult = getList();
console.log(promiseResult);

promiseResult
  .then(arr => {
    for (let i = 0; i < arr.length; i++) {
      let newList = document.createElement("li");
      newList.textContent = arr[i];
      console.log(newList);
      list.appendChild(newList);
    }
  })
  .catch(obj => {
    p.textContent = obj.message;
  });
// TODO: Handle the resolved or rejected states of the promise

// TODO: If the promise resolves with the list of hobbits
// Render the list of hobbits as list items within the unordered list with id="list" (check the index.html file)

// TODO: If the promise rejects with the failure object
// Display the failure message in the paragraph element with id="error" (check index.html file)
