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
  name: string;
}

const FormRegister = () => {
  const { registerUser } = useAuth();
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup.string().required("Required Field"),
    email: yup.string().required("Required Field").email("Invalid Email"),
    password: yup
      .string()
      .required("Required Field")
      .min(6, "Minimun of 6 digits"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(formSchema) });

  function submitRegister(data: UserData) {
    registerUser(data, history);
  }
  return (
    <Container>
      <FormsHeader />
      <SmallContainer>
        <h1>Register</h1>
        <form onSubmit={handleSubmit(submitRegister)}>
          <FormsInput
            placeholder="Name"
            {...register("name")}
            errorMessage={errors.name?.message}
            type="text"
          />
          <FormsInput
            placeholder="Email"
            {...register("email")}
            errorMessage={errors.email?.message}
            type="email"
          />
          <FormsInput
            placeholder="Password"
            {...register("password")}
            errorMessage={errors.password?.message}
            type="password"
          />
          <FormsButton>Sing Up</FormsButton>
        </form>
        <div className="links_login">
          <p>
            Already have an <Link to="/login">acount?</Link>
          </p>
          <Link to="/aboutus">About Us</Link>
        </div>
      </SmallContainer>
    </Container>
  );
};

export default FormRegister;
