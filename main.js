const axios = require("axios");

let url = "url";

axios.get(url).then((res)=>{
    console.log(res.data);
});