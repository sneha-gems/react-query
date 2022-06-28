import axios from "axios";

export default async function useCreatePost({ data }) {
  const result = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    data
  );

  return result;
}
