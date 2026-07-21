import { LoginResponse } from '@/interfaces/autenticacao/responses';
import { LoginRequest } from '@/interfaces/autenticacao/resquests';
import { api } from '../api';
import { authBase } from '.';

export async function login(body: LoginRequest): Promise<LoginResponse> {
  return (await api.post<LoginResponse>(`${authBase}/logar`, body)).data;
}
