import Button from "../Button";
import { useFormikContext } from "formik";

export default function Submit({ Wrapper = Button, disabled, ...others }) {
  const { handleSubmit, isValid } = useFormikContext();
  return (
    <Wrapper
      {...others}
      type="submit"
      disabled={!isValid || disabled}
      onClick={handleSubmit}
    />
  );
}
