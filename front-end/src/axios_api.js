import axios from "axios";
 
componentDidMount() {
  axios.get('http://blitz.cs.niu.edu/PurchaseOrder/')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}
