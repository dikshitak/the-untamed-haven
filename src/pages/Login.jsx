import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { useLogin } from "../features/authentication/useLogin";
import Spinner from "../ui/Spinner";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  const { login, isLoading } = useLogin();

  if (isLoading) return <Spinner />;

  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
      <Button
        onClick={() =>
          login({
            email: import.meta.env.VITE_EMAIL,
            password: import.meta.env.VITE_PASSWORD,
          })
        }
      >
        Login as Guest
      </Button>
    </LoginLayout>
  );
}

export default Login;
