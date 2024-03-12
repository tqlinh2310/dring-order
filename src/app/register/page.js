"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessagePass, setErrorMessagePass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);

    if (!email.trim()) {
      setErrorMessage("Email không được để trống");
      return;
    }

    if (!password?.length || password.length < 5) {
      setErrorMessagePass("password phải tối thiểu 5 ký tự");
      return;
    }

    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setUserCreated(true);
      setErrorMessagePass("");
      setErrorMessage("");
    } else {
      setError(true);
    }
    setCreatingUser(false);
  }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Đăng ký</h1>
      {userCreated && (
        <div className="my-4 text-center">
          Đăng ký thành công.
          <br />
          Bạn có thể{" "}
          <Link className="underline" href={"/login"}>
            Đăng nhập &raquo;
          </Link>
        </div>
      )}
      {error && (
        <div className="my-4 text-center">
          lỗi đã xảy ra.
          <br />
          Vui lòng thử lại sau
        </div>
      )}
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          // disabled={creatingUser}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <input
          type="password"
          placeholder="password"
          value={password}
          // disabled={creatingUser}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        {errorMessagePass && <p className="text-red-500">{errorMessagePass}</p>}
        <button
          type="submit"
          // disabled={creatingUser}
        >
          Đăng ký
        </button>

        <div className="text-center my-4 text-gray-500 border-t pt-4">
          đã có tài khoản?{" "}
          <Link className="underline" href={"/login"}>
            Login tại đây &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
}
