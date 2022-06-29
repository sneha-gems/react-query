import axios from "axios";
import { useMutation } from "react-query";

export default function CreatePost() {
  const mutation = useMutation((formData) => {
    return axios.post("https://jsonplaceholder.typicode.com/posts", formData);
  });
  const addPost = async (data) => {
    mutation.mutate(data);
  };

  return {
    addPost,
  };
}
