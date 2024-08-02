import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError("Failed to login!");
      setLoading(false);
    }
  }


  return (
    <div>
      <Form className={{ height: "330px" }} onSubmit={handleSubmit}>
        <h1>Login to your account</h1>

        <TextInput
          type="text"
          placeholder="Enter email"
          icon="alternate_email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextInput
          type="password"
          placeholder="Enter password"
          icon="lock"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" disabled={loading}>
          <span>SUBMIT NOW</span>
        </Button>

        {error && <p className="error">{error}</p>}

        <div className="info">
          Don't have an account? <Link to="/signup">Signup</Link> instead
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
