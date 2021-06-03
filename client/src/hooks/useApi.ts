import { AxiosResponse } from "axios";

import httpHelpers from "../helpers/http-helpers";

export function useApi() {
  const token = localStorage.getItem("auth-token");

  function apiGet<T>(
    endpoint: string,
    params?: any,
  ): Promise<AxiosResponse<T>> {
    return httpHelpers.get<T>(
      // `http://localhost:9000/api${endpoint}`,
      `https://gameboardgroup.com/api${endpoint}`,
      {
        params,
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      },
    );
  }

  function apiPost<T>(endpoint: string, data: any): Promise<AxiosResponse<T>> {
    return httpHelpers.post<T>(
      // `http://localhost:9000/api${endpoint}`,
      `https://gameboardgroup.com/api${endpoint}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      },
    );
  }

  return { apiGet, apiPost };
}
