import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
  });

  export interface Usuario{ 
    nome: string,
    email: string,
    senha: string,
    id_funcao: string
  }

  export const getItems = async (): Promise<Usuario[]> => {
    try {
      const response = await axiosInstance.get<Usuario[]>('/usuarios');
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  