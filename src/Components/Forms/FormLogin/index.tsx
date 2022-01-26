import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormsHeader from "../FormsComponents/FormsHeader";
import { FormsInput } from "../FormsComponents/FormsInput";
import { Container, SmallContainer } from "./style";
import FormsButton from "../FormsComponents/FormsButton";
import { Link } from "react-router-dom";

interface UserData {
  email: string;
  password: string;
}

const FormLogin = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Email Obrigatorio").email("Email Invalido"),
    password: yup.string().required("Senha Obrigatoria"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(formSchema) });

  const submit = (data: UserData) => {
    console.log(data);
  };
  return (
    <Container>
      <FormsHeader />
      <SmallContainer>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(submit)}>
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
