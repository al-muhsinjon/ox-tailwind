import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState, useEffect } from "react";
// import  from "react";
import { FaUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdVpnKey } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import auth from "../services/auth";

const Login = () => {
  // const navigate= useNavigate()
  // navigate('/login')
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [subdomain, setSubdomain] = useState("");

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    token === null || token === "undefined" ? navigate("/login") : navigate("/");
  }, []);
  const loginFun = (userName, password, subdomain) => {
    auth
      .login(userName, password, subdomain)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        if (data.code !== 401) {
          navigate("/home");
          window.location.reload();
          // console.log(data);
        } else {
          setPassword("");
          setUserName("");
          setSubdomain("");
        }
      });
  };

  return (
    <>
      <div className="w-full h-[100vh] gradient flex flex-col justify-center items-center">
        <div className="md:w-[50%]  p-3 bg-white rounded-lg  md:p-6">
          <div className="flex flex-col gap-4">
            <div>
              <TextInput
                id="subdomain"
                type="text"
                placeholder="Cубдомен"
                required={true}
                shadow={true}
                icon={IoMdCart}
                value={subdomain}
                onChange={(e) => setSubdomain(e.target.value)}
              />
            </div>
            <div>
              <TextInput
                id="password2"
                type="text"
                placeholder="Имя пользователя"
                required={true}
                shadow={true}
                value={userName}
                icon={FaUser}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <TextInput
                id="repeat-password"
                type="password"
                placeholder="Пароль"
                required={true}
                shadow={true}
                value={password}
                icon={MdVpnKey}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="agree" />
              <Label htmlFor="agree">Запомнить меня</Label>
            </div>

            <Button
              type="submit"
              onClick={() => loginFun(userName, password, subdomain)}
            >
              РЕГИСТРАЦИЯ
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
