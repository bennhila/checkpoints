import "./App.css";
// import OIP from "./OIP.jpg"

function App() {
  return (
    <div className="App">
  <div class="formSize">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"></input>
  </div>
   <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"></input>
  </div>
 <select class="form-select" aria-label="Default select example">
  <option selected>gender</option>
  <option value="2">female</option>
  <option value="3">male</option>
</select> 
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
  <label class="form-check-label" for="defaultCheck1">
  by creating your account , you agree to our terms of use and privacy policy
  </label>
</div>
<button type="button" class="btn btn-success">LET'S GO !</button>
  </div>
    </div>
  );
}
export default App;
