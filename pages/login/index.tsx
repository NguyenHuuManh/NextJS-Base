import AppField from "@/components/form/AppField";
import InputField from "@/components/form/InputField";
import { useAuth } from "@/context/authorContext";
import { dispatchLogin } from "@/context/authorContext";
import { Formik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Card,
  FormGroup,
  Label,
  Input,
  Form,
  CardBody,
  Button,
} from "reactstrap";
const Login = () => {
  const [controller, dispatch] = useAuth();
  const route = useRouter();
  const onSubmit = (values) => {
    console.log(values, "===values===");
    dispatchLogin(dispatch, values);
    route.push("/");
  };
  return (
    // <div className="card">
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(values) => onSubmit(values)}
    >
      {({ submitForm }) => (
        <Card
          title="Login"
          style={{ width: "18rem", margin: "auto", marginTop: "1rem" }}
        >
          <CardBody>
            <Form>
              <FormGroup>
                <AppField
                  component={InputField}
                  name="username"
                  label="Tài khoản"
                  placeholder="username placeholder"
                />
              </FormGroup>
              <FormGroup>
                <AppField
                  component={InputField}
                  type="password"
                  name="password"
                  placeholder="password placeholder"
                />
              </FormGroup>
              <FormGroup>
                <AppField
                  name="submit"
                  component={InputField}
                  type="submit"
                  value="Login"
                  onClick={submitForm}
                />
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      )}
    </Formik>
    // </div>
  );
};

export default Login;
