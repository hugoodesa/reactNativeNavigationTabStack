/* eslint-disable prettier/prettier */

export type Cesta = {
  id: number;
  titulo: string;
  descricao: string;
  valor: number;
};

export type Produtor = {
  id: number;
  distancia: number;
  nome: string;
  quantidadeEstrelas: number;
  cestas: Cesta[];
};

export const cestas: Cesta[] = [
  {id: 1, titulo: 'cesta tomate', descricao: 'Baita cesta 01', valor: 30.99},
  {id: 2, titulo: 'cesta beterraba', descricao: 'Baita cesta 02', valor: 20.5},
  {id: 3, titulo: 'cesta limões', descricao: 'Baita cesta 03', valor: 10.22},
];

export const getProdutores: Produtor[] = [
  {id: 1, distancia: 5, nome: 'Farm 01', quantidadeEstrelas: 1, cestas},
  {id: 2, distancia: 5, nome: 'Farm 02', quantidadeEstrelas: 2, cestas},
  {id: 3, distancia: 5, nome: 'Farm 03', quantidadeEstrelas: 4, cestas},
  {id: 4, distancia: 5, nome: 'Farm 04', quantidadeEstrelas: 5, cestas},
  {id: 5, distancia: 5, nome: 'Farm 05', quantidadeEstrelas: 2, cestas},
];
