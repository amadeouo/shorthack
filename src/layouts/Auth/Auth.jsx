import {Button} from "../../components/Button/Button";
import {AuthInput} from "../../components/AuthInput/AuthInput";

export const Auth = (props) => {
  const {
    isAdminValue
  } = props

  return (
    <div>
      <Button
        value="Войти как студент"
      />
      <Button
        value="Войти как админ"
      />
      <form
        onSubmit={(e) => e.preventDefault()}
      >
        <AuthInput isAdminValue />
      </form>
    </div>
  )
}
