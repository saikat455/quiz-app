import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "./TextInput";
import Form from "./Form";
import Checkbox from "./Checkbox";
import Button from "./Button";
import { useAuth } from "../contexts/AuthContext";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Passwords don't match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError("Failed to create an account!");
      setLoading(false);
    }
  }

  return (
    <div>
      <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
        <h1>Create an account</h1>
        <TextInput
          type="text"
          placeholder="Enter name"
          icon="person"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextInput
          type="text"
          required
          placeholder="Enter email"
          icon="alternate_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextInput
          type="password"
          required
          placeholder="Enter password"
          icon="lock"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <TextInput
          type="password"
          required
          placeholder="Confirm password"
          icon="lock_clock"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Checkbox
          required
          text="I agree to the terms & Conditions"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />

        <Button disabled={loading} type="submit">
          <span>SUBMIT NOW</span>
        </Button>

        {error && <p className="error">{error}</p>}
        <div className="info">
          Already have an account? <Link to="/login">Login</Link> instead
        </div>
      </Form>
    </div>
  );
};

export default SignUpForm;
