import React from "react";


function Login() {
  return (
    <form action="http://localhost:4000/auth/google">
      <button type="submit">login</button>
    </form>
  );
}

export default Login;
