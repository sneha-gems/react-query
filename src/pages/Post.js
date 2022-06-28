import { useFormik } from "formik";

import Button from "../components/Button";
import CustomInput from "../components/CustomInput";

export default function Post() {
  const formik = useFormik();
  //
  return (
    <>
      <form>
        <CustomInput name={"title"} label={"Label"} />
        <CustomInput name={"body"} label={"body"} />
        <Button type="submit" name={"submit"} />
      </form>
    </>
  );
}
