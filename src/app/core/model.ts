

export class Curso {
  codigo: number;
  nome: string;
}

export class Usuario {
  codigo: number;
  email: string;
  senha: string;
  admin: boolean;
}

export class CursoAlunoDTO {
  codigoCurso: number;
  codigoAluno: number;
}