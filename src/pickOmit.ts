interface Usuario {
  id: number;
  nombre: string;
  email: string;
  passwordHash: string; // Dato sensible
  biografia: string;
  esAdmin: boolean;
  creadoEn: Date;
}
type Need = Pick<Usuario, "nombre">
type CrearUsuarioDTO = Omit<Usuario, 'id' | 'creadoEn'>;
//dos nuevos moldes papa