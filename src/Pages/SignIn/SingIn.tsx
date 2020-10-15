import React, { useState } from 'react';
import logo from "../../assets/logo.svg"
import {useAuth} from "../../hooks/auth";

import { SignInContainer, Logo, Form, FormTitle, Input, Button } from "./Styles-SingIn";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { signIn } = useAuth();

  return (
    <SignInContainer>
      <Logo>
        <img src={logo} alt="Logo enterprise"/>
        <h3>My wallet</h3>
      </Logo>

      <Form onSubmit={() => signIn(email, password)}>
        <FormTitle>Login</FormTitle>
        <Input
          type="email"
          required placeholder="E-mail"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          type="password"
          required
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="submit">Go to your wallet !</Button>
      </Form>
    </SignInContainer>
  );
};

export default SignIn;
