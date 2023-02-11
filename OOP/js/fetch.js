// API => application
// REST => Representational State Transfer
// language base interface => read a file , write a file
// REST API => client <== REST API (HTTP / HTTPS) ==> Server
// REST API Async Way
/// async HTTP/ HTTPS => XHR ,fetch

//setTimeout(); // 3 ==> times up
//setInterval(); // 3 ===> runs with every 3 sec

// ajax => async javascript xml (JSON), XHR => XML HTTP Request
// perform the action without refresh of page

// if i want to collect  data of promise => await
async function checkStatus(status, response) {
  if (status !== 200) {
    return Promise.reject("Something went wrong.");
  }
  return response;
}

async function ajax() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users"); // await => halt other dependant promises
    await checkStatus(response.status);
    let result = await response.json(); // to get a data
    console.log(result, response);
  } catch (error) {
    console.log(error);
  }
}

function ajax() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return checkStatus(response.status, response);
    })
    .then((response) => {
      return response.json(); // to get a data
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    }); // await => halt other dependant promises
}

// http, complex operation , mongodb
