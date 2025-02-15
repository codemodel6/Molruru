import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { LoginDataProps, signUp } from "../../firebase/signUp";
import { FontSize, MainColor, WhiteColor } from "../CSS/Color/ColorNote";
import { centerColumn } from "../CSS/Global/GlobalDisplay";
import { GlobalButton } from "../CSS/Global/GlobalItem";
import { toast } from "react-toastify";

const SignUpFormWrapper = styled.div`
  ${centerColumn}
  width: 100%;
  height: 90%;

  .SignUpFormTitle {
    ${centerColumn}
    width: 70%;
    height: 7%;
    margin-bottom: 5%;
    font-size: ${FontSize.large};
  }

  .SignUpFormBlock {
    ${centerColumn}
    width: 100%;
    height: 100%;
  }

  .SignUpFormIdInput {
    ${centerColumn}
    width: 70%;
    height: 7%;
    border: 2px solid ${MainColor.Main100};
    border-radius: 10px;
    padding: 1%;
    font-size: ${FontSize.xsmall};
  }

  .SignUpFormPwInput {
    ${centerColumn}
    width: 70%;
    height: 7%;
    border: 2px solid ${MainColor.Main100};
    border-radius: 10px;
    padding: 1%;
    font-size: ${FontSize.xsmall};
  }

  .SignUpFormValidationArea {
    ${centerColumn}
    width: 70%;
    height: 5%;
    background-color: ${WhiteColor.White100};
  }

  .SignUpFormToolBlock {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    height: 110px;
  }
`;

interface SignUpFormProps {
  handleLoginToggle: () => void;
  modalState: boolean;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  handleLoginToggle,
  modalState,
}) => {
  // 회원가입에 보낼 데이터 state
  const [singUpObj, setSingUpObj] = useState<LoginDataProps>({
    email: "",
    password: "",
  });

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 훅 기능 : modal이 꺼지면 입력한 데이터를 초기화한다
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  useEffect(() => {
    if (!modalState)
      setSingUpObj({
        email: "",
        password: "",
      });
  }, [modalState]);

  // 입력 필드 핸들러
  const handleSingUpInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setSingUpObj((prev) => ({ ...prev, [name]: value }));
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : React Query를 사용한 회원가입 Mutation
                UserCredential : signUp 함수가 성공했을 때 반환하는 타입
                                 Firebase Authentication의 createUserWithEmailAndPassword 메서드가 
                                 성공적으로 값을 반환했을 때 UserCredential 객체를 반환
                Error          : signUp 함수가 실패했을 때 반환되는 에러의 타입
                LoginDataProps : signUp 함수를 호출할 때 필요한 입력 변수의 타입
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const signUpMutation = useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      console.log("회원가입 성공:", data.user);
      toast.success("회원가입 성공");
    },
    onError: (error) => {
      console.error("회원가입 실패:", error);
      toast.error("회원가입 실패. 다시 시도해주세요.");
    },
  });

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 입력한 form을 파이어베이스 서버에 전달
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // 새로고침 방지
    event.preventDefault();
    // 예외처리 함수 실행
    const validation = handleSignUpValidation();
    if (!validation) return;

    // 회원가입 mutation 실행
    signUpMutation.mutate(singUpObj);
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 회원가입 예외처리
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleSignUpValidation = () => {
    // email 체크
    const emailRegExp = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/;
    // password 체크
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    if (!emailRegExp.test(singUpObj.email)) {
      toast.warning("아이디는 이메일 형식을 입력해야합니다.");
      return false;
    }
    if (!passwordRegExp.test(singUpObj.password)) {
      toast.warning(
        "비밀번호는 8~15자 이상의 영문, 숫자, 특수문자 조합이 필요합니다."
      );
      return false;
    }

    return true;
  };

  return (
    <SignUpFormWrapper>
      <form className="SignUpFormBlock" onSubmit={handleSubmit}>
        <span className="SignUpFormTitle">SignUp</span>
        <input
          type="email"
          name="email"
          className="SignUpFormIdInput"
          value={singUpObj.email}
          placeholder="E-mail"
          onChange={handleSingUpInputChange}
          required
        ></input>
        <span className="SignUpFormValidationArea"></span>
        <input
          type="password"
          name="password"
          className="SignUpFormPwInput"
          value={singUpObj.password}
          placeholder="Password"
          onChange={handleSingUpInputChange}
          required
        ></input>
        <span className="SignUpFormValidationArea"></span>
        <div className="SignUpFormToolBlock">
          <GlobalButton type="submit" width="100%" height="50px">
            회원가입
          </GlobalButton>
          <GlobalButton
            type="button"
            width="100%"
            height="50px"
            onClick={handleLoginToggle}
          >
            로그인 화면으로
          </GlobalButton>
        </div>
      </form>
    </SignUpFormWrapper>
  );
};

export default SignUpForm;
