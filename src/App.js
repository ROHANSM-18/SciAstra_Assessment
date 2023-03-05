import { useState, useNavigate } from "react"
import $ from "jquery"
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [pass, setPass] = useState("")
  const [email, setEmail] = useState("")
  const [mob, setMob] = useState("")
  const [addr, setAddr] = useState("")
  const [result, setResult] = useState("")

  const handleChange = (e) => {
    setName(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = $(e.target);
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form.serialize(),
      success(data) {
        setResult(data)
      },
    })
  }

  return (
    <div className="App">
      <center><h1>Signup</h1></center>
      <div id="meh">
      <form
        id="signup"
        action="http://localhost:8000/server.php"
        method="post"
        onSubmit={(event) => handleSubmit(event)}
      >
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(event) => handleChange(event)}
        />
        <br />
        <label htmlFor="pass">Password: </label>
        <input
          type="password"
          id="pass"
          name="pass"
          value={pass}
          onChange={(event) => handleChange(event)}
        />
        <br />
        <label htmlFor="mob">Mobile: </label>
        <input
          type="text"
          id="mob"
          name="mob"
          value={mob}
          onChange={(event) => handleChange(event)}
        />
        <br />
        <label htmlFor="addr">Address: </label>
        <input
          type="text"
          id="addr"
          name="addr"
          value={addr}
          onChange={(event) => handleChange(event)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
}

export default App