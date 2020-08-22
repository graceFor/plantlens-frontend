import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Logo from "Components/Logo";
import { Link } from "react-router-dom";
import $ from "jquery";

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Form = styled.form`
  margin: 0px auto;
`;
const TextContainer = styled.div`
  display: flex;
  margin-top: 9%;
  justify-content: center;
  margin-bottom: 20px;
`;
const Text = styled.div`
  font-size: 35px;
  display: flex;
  margin-top: 27px;
  margin-left: 17px;
`;

const AskSignup = styled.p`
  color: #4d1212;
  text-align: center;
`;

const GotoLogin = styled.span`
  color: red;
`;

function initTooltip() {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
}
function setSignupTooltipTitleByName(name, title_txt) {
  $(`[name="${name}"]`).attr("title", title_txt);
}
function setSignupTooltipTitleForTermLabels(title_txt) {
  $(".term-label").attr("title", title_txt);
}
function setSignupTooltip() {
  initTooltip();
  setSignupTooltipTitleByName("username", "이름을 입력하세요");
  setSignupTooltipTitleByName("cellphone", "010-0000-0000 형식으로 <br> 전화번호 입력하세요");
  setSignupTooltipTitleByName("email", "이메일을 입력하세요");
  setSignupTooltipTitleByName("pwd", "비밀번호를 입력하세요");
  setSignupTooltipTitleByName("pwd_confirm", "비밀번호를 한번 더 입력하세요");
  setSignupTooltipTitleForTermLabels("필수 약관입니다");
}

function setValidation() {
  $('input:not("[type=submit]")').each((i, e) => {
    const inputHandler = function () {
      if ($(this).val().length > 0) {
        $(this).addClass("is-valid");
        $(this).removeClass("is-invalid");
      } else {
        $(this).addClass("is-invalid");
        $(this).removeClass("is-valid");
      }
    };
    $(e).click(inputHandler);
    $(e).keyup(inputHandler);
  });
  $('input[name=""]');
}

const SignupPresenter = () => {
  useEffect(() => {
    setSignupTooltip();
    setValidation();
  });
  return (
    <Container>
      <Helmet>
        <title>Sign Up | Nevermind</title>
      </Helmet>
      <TextContainer>
        <Logo width="90px" height="80px"></Logo>
        <Text>회원가입</Text>
      </TextContainer>
      <Form className="mt-3">
        <div className="mb-3">
          <label htmlFor="validationServer01">Name</label>
          <input
            type="text"
            name="username"
            className="mt-2 form-control"
            aria-describedby="validatedInputGroupPrepend"
            data-toggle="tooltip"
            data-placement="right"
            data-html="true"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="validationServer01">Cell_Phone</label>
          <input
            type="text"
            name="cellphone"
            className="mt-2 form-control"
            aria-describedby="validatedInputGroupPrepend"
            data-toggle="tooltip"
            data-placement="right"
            data-html="true"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="validationServer01">E-mail</label>
          <input
            type="text"
            name="email"
            className="mt-2 form-control"
            aria-describedby="validatedInputGroupPrepend"
            data-toggle="tooltip"
            data-placement="right"
            data-html="true"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="validationServer01">Password</label>
          <input
            type="password"
            name="pwd"
            className="mt-2 form-control"
            aria-describedby="validatedInputGroupPrepend"
            data-toggle="tooltip"
            data-placement="right"
            data-html="true"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="validationServer01">Confirm Password</label>
          <input
            type="password"
            name="pwd_confirm"
            className="mt-2 form-control"
            aria-describedby="validatedInputGroupPrepend"
            data-toggle="tooltip"
            data-placement="right"
            data-html="true"
            required
          />
        </div>

        <div className="custom-control custom-checkbox mb-2 was-validated">
          <input
            type="checkbox"
            className="custom-control-input"
            id="agree_nevermind_term_of_use"
            required
          />
          <label
            className="mt-2 pt-1 custom-control-label term-label"
            htmlFor="agree_nevermind_term_of_use"
            data-toggle="tooltip"
            data-placement="right"
            data-html="true"
          >
            Plant Lens 이용을 위한 필수 이용약관&nbsp;
          </label>
        </div>

        <div className="custom-control custom-checkbox mb-3 was-validated">
          <input
            type="checkbox"
            className="custom-control-input"
            id="agree_privacy_policy"
            required
          />
          <label
            className="mt-2 pt-1 custom-control-label term-label"
            htmlFor="agree_privacy_policy"
            data-toggle="tooltip"
            data-placement="right"
            data-html="true"
          >
            개인정보 처리 방침&nbsp;
          </label>
        </div>
        <div className="d-flex justify-content-center">
          <Link to={"Login"}>
            <button type="button" className="mt-1 btn btn-outline-dark">
              Submit
            </button>
          </Link>
        </div>
      </Form>
      <AskSignup className="my-3">
        이미 가입하셨나요?&nbsp;
        <Link to={"Login"}>
          <GotoLogin>로그인하기</GotoLogin>
        </Link>
      </AskSignup>
    </Container>
  );
};

export default SignupPresenter;
