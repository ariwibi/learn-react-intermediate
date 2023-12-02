import { useState } from "react";
export default function RegisterForm() {
  function useInput(defaultValue) {
    const [value, setValue] = useState(defaultValue);
    const handleValueChange = (event) => setValue(event.target.value);
    return [value, handleValueChange];
  }
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");
  const [confirmPassword, handleConfirmPasswordChange] = useInput("");

  return (
    <form>
      <input value={email} type="email" onChange={handleEmailChange} />
      <input value={password} type="password" onChange={handlePasswordChange} />
      <input
        value={confirmPassword}
        type="password"
        onChange={handleConfirmPasswordChange}
      />
    </form>
  );
}
