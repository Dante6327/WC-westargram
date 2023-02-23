import './Login.scss';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [verifyLogin, setVerifyLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id.length > 5 && id.includes('@') && pw.length > 5) {
      setVerifyLogin(true);
    } else {
      setVerifyLogin(false);
    }
  }, [id, pw]);

  const saveUserId = e => {
    setId(e.target.value);
  };

  const saveUserPw = e => {
    setPw(e.target.value);
  };

  const Login = e => {
    e.preventDefault();

    if (verifyLogin) {
      navigate('/main');
    }
  };

  return (
    <>
      <main className="login">
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
                  onChange={saveUserId}
                  value={id}
                />
              </div>
              <div className="boxPw">
                <input
                  type="password"
                  placeholder="비밀번호"
                  className="InputPw"
                  onChange={saveUserPw}
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
                  className={['btnLogin', verifyLogin].join(' ')}
                  value="로그인"
                  onClick={Login}
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
