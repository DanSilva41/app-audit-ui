import { LocalModel } from './local.model';

export class UsuarioModel {
    public seq?: number;
    public nome?: string;
    public matricula?: string;
    public indTipoUsuario?: number;
    public username?: string;
    public indAtivo?: boolean;
    public indSexoUsuario?: string;
    public locais?: LocalModel[];
    constructor(
    ) {
        this.locais = new Array<LocalModel>();
    }
}
