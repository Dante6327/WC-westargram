import "./Login.scss";
import React, { useEffect, useState } from "react";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [verifyLogin, setVerifyLogin] = useState(false);
  useEffect(() => {
    verifyAddress();
  }, [id, pw, verifyLogin]);
  const handleChangeId = (e) => {
    setId(e.target.value);
  };

  const handleChangePw = (e) => {
    setPw(e.target.value);
  };

  const verifyAddress = () => {
    if (id.length > 5 && id.includes("@") && pw.length > 5) {
      setVerifyLogin(true);
    } else {
      setVerifyLogin(false);
    }
  };

  return (
    <>
      <main className="boxLogin">
        <article className="boxContainer">
          <section className="boxCloseBtnArea">
            <button className="btnClose" />
          </section>
          <section className="boxTitle">
            <h1 className="txtTitle">Westagram</h1>
          </section>
          <section className="boxLoginInfo">
            <form className="boxLoginForm">
              <div className="boxId">
                <input
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  className="inputId"
                  onChange={handleChangeId}
                  value={id}
                />
              </div>
              <div className="boxPw">
                <input
                  type="password"
                  placeholder="비밀번호"
                  className="InputPw"
                  onChange={handleChangePw}
                  value={pw}
                />
              </div>
              <div className="boxIsSaveLoginInfo">
                <input type="checkbox" className="inputIsSaveCheckBox" />
                <span className="txtIsSaveComment">로그인 정보 저장하기</span>
              </div>
              <div className="boxLoginBtn">
                <input
                  type="submit"
                  className={["btnLogin", verifyLogin].join(" ")}
                  value="로그인"
                />
              </div>
              <div className="boxForgetPassword">
                <span className="txtForgetPassword">
                  비밀번호를 잊으셨나요?
                </span>
              </div>
            </form>
          </section>
        </article>
      </main>
    </>
  );
};

export default Login;
