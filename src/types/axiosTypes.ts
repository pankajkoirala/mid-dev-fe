
import type { AxiosError } from 'axios';
export type ErrorType<TError> = Prettify<{
  success: boolean;
  message:  string;
  error: TError;
  payload: null;

}>;

export type ResponseType<TResponse> = {
  success: boolean;
  message: string;
  payload: TResponse;
  errors:null
};

export type WithPaginationResponseType<TPaginatedResponse> =ResponseType<{
  limit: number;
  total: number;
  skip:number
  products: TPaginatedResponse;
}>;

export type ApiErrorType<TError> = Prettify<AxiosError<ErrorType<TError>>>;

export type Prettify<T> = {
  [key in keyof T]: T[key];
} & unknown;




