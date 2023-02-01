import axios from "axios";
import { LoaderFunctionArgs } from "@remix-run/router/utils";
import { defer } from "react-router-dom";

const getPhoto = async ({ request }: LoaderFunctionArgs) => {
  const { data } = await axios.get(`${process.env.REACT_APP_BASE_API_URL}/photos/?_limit=10`, {
    signal: request.signal,
  });

  return data;
};

export const photoLoader = (args: LoaderFunctionArgs) => {
  return defer({ photos: getPhoto(args) });
};
