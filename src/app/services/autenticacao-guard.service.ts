import {CanActivate} from '@angular/router';
import {Injectable} from '@angular/core';
import {AutenticacaoService} from './autenticacao.service';

@Injectable()
export class AutenticacaoGuardService implements CanActivate {

  constructor(private autenticacao: AutenticacaoService) {}

  canActivate(): boolean {
    return this.autenticacao.autenticado();
  }



}
