import axios from "axios";

export default async function useList() {
  return axios.get("https://api.github.com/users");
}
