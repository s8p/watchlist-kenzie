import FormRegister from "Components/Forms/FormRegister";
import Loading from "Components/Loading";
import { useAuth } from "Context/Auth";
import { Container } from "./style";

const Register = () => {
  const { loadLogin } = useAuth();
  return (
    <>
      {loadLogin ? (
        <Loading />
      ) : (
        <Container>
          <div className="opacity_container"></div>
          <FormRegister />
        </Container>
      )}
    </>
  );
};

export default Register;
