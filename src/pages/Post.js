import { useFormik } from "formik";
import { memo } from "react";

import Button from "../components/Button";
import CustomInput from "../components/CustomInput";
import CreatePost from "../api/CreatePost";
import Card from "../components/Card";

function Post() {
  const { addPost } = CreatePost();
  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
    },
    onSubmit: async (values) => {
      addPost(values);
    },
  });

  //
  return (
    <Card>
      <form onSubmit={formik.handleSubmit}>
        <CustomInput
          name={"title"}
          label={"Label"}
          value={formik.values.title}
          onChange={formik.handleChange}
          isRequired
        />
        <CustomInput
          name={"body"}
          label={"body"}
          value={formik.values.body}
          onChange={formik.handleChange}
        />
        <Button type="submit" name={"submit"} />
      </form>
    </Card>
  );
}

export default memo(Post);
