import FormLogin from "Components/Forms/FormLogin";
import Loading from "Components/Loading";
import { useAuth } from "Context/Auth";
import { Container } from "./style";

const Login = () => {
  const { loadLogin } = useAuth();
  return (
    <>
      {loadLogin ? (
        <Loading />
      ) : (
        <Container>
          <div className="opacity_container"></div>
          <FormLogin />
        </Container>
      )}
    </>
  );
};

export default Login;
