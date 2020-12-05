import React, { useState, useEffect } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { Redirect, useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const history = useHistory();
  const [token, setToken] = useState({
    token: null,
  });
  const [admin, setAdmin] = useState({
    username: null,
    password: null,
  });

  const handleChange = (value, name) => {
    setAdmin({ ...admin, [name]: value });
  };

  const validation = (array) => {
    axios.post(`http://localhost:1998/api/user/login`, array).then((res) => {
      let usr = res.data;
      setToken(usr);
    });
  };

  const tokenLocal = () => {
    if (token.token !== null) {
      localStorage.setItem("user", token.token);
      history.goBack();
    }
  };

  useEffect(() => {
    tokenLocal();
  }, [token]);

  return localStorage.getItem("user") === null ? (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1 className="text-center">LOGIN</h1>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Username"
                      autoComplete="username"
                      onChange={(event) =>
                        handleChange(event.target.value, "username")
                      }
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      onChange={(event) =>
                        handleChange(event.target.value, "password")
                      }
                    />
                  </CInputGroup>
                  <CButton
                    color="success"
                    onClick={() => validation(admin)}
                    block
                  >
                    Login
                  </CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  ) : (
    <Redirect to="/home" />
  );
};

export default Login;
