var axios = require("axios");

var config = {
  method: "get",
  url: "https://api.ocbc.com:8243/Deposit_Accounts/1.0/*",
  headers: {
    Authorization: "Bearer e0bad364-2eb5-374a-848f-7c34179c724e",
    Cookie:
      "incap_ses_961_1634122=KB+vV6NAeW+47vNewyhWDTcG5GAAAAAAE8aVoF2ih5EdRFGWSJVRHw==; nlbi_1634122=ofqgB1ko/A7YwhSIZPv8YwAAAAD4yVjLWEiXW3mVGZY0viDm; visid_incap_1634122=dbpI8ew/T+iV9osDPojrYAj642AAAAAAQUIPAAAAAADTCfj0brn3rMGlJwvepif3",
  },
};

axios(config)
  .then(function (response) {
      console.log(JSON.stringify(response.data));
      //Do something with the response.data
  })
  .catch(function (error) {
    console.log(error);
  });
