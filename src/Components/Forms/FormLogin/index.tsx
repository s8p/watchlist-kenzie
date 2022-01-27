import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormsHeader from "../FormsComponents/FormsHeader";
import { FormsInput } from "../FormsComponents/FormsInput";
import { Container, SmallContainer } from "./style";
import FormsButton from "../FormsComponents/FormsButton";
import { Link } from "react-router-dom";
import { useAuth } from "Context/Auth";
import { useHistory } from "react-router";

interface UserData {
  email: string;
  password: string;
}

const FormLogin = () => {
  const { singIn } = useAuth();
  const history = useHistory();
  const formSchema = yup.object().shape({
    email: yup.string().required("Email Obrigatorio").email("Email Invalido"),
    password: yup.string().required("Senha Obrigatoria"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(formSchema) });

  function submitLogin(data: UserData) {
    singIn(data, history);
  }

  return (
    <Container>
      <FormsHeader />
      <SmallContainer>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(submitLogin)}>
          <FormsInput
            placeholder="Email"
            {...register("email")}
            errorMessage={errors.email?.message}
          />
          <FormsInput
            placeholder="Password"
            {...register("password")}
            errorMessage={errors.password?.message}
          />
          <FormsButton>Sing In</FormsButton>
        </form>
        <div className="links_login">
          <p>
            Create a new <Link to="/login">acount</Link>
          </p>
          <Link to="/login">About Us</Link>
        </div>
      </SmallContainer>
    </Container>
  );
};

export default FormLogin;
