/*
 * Public API Surface of shared-forms
 */

export * from './lib/presentation/ui/shared/services/crypto.service';
export * from './lib/application/use-cases/context-usecase.service';

// Entidades
export * from './lib/domain/entities/user-entity';

// ------------------------------------ INICIO - Componentes ------------------------------------
export * from './lib/presentation/ui/shared/components/avatar-imagem/avatar-imagem.component';

// Botões
export * from './lib/presentation/ui/shared/components/inputs/btn-input/btn-input.component';
export * from './lib/presentation/ui/shared/components/inputs/btn-dropdown/btp-dropdown.component';

// Diversos
export * from './lib/presentation/ui/shared/components/modal/modal.component';
export * from './lib/presentation/ui/shared/components/notificador-mensagens/notificador-mensagens.component';
export * from './lib/presentation/ui/shared/components/paginacao/paginacao.component';

// Sub-Formulários
export * from './lib/presentation/ui/shared/components/forms/sub-forms/informacoes-endereco/informacoes-endereco.component';
export * from './lib/presentation/ui/shared/components/forms/sub-forms/informacoes-pessoais/informacoes-pessoais.component';
export * from './lib/presentation/ui/shared/components/forms/sub-forms/informacoes-profissionais/informacoes-profissionais.component';

// Abstract Component
export * from './lib/presentation/ui/shared/components/forms/abstracts-components/forms-abstract.component';
export * from './lib/presentation/ui/shared/components/forms/abstracts-components/pages-create-update-abstract.component';
export * from './lib/presentation/ui/shared/components/forms/abstracts-components/pages-default-abstract.component';
export * from './lib/presentation/ui/shared/components/forms/abstracts-components/pages-delete-abstract.component';
export * from './lib/presentation/ui/shared/components/forms/abstracts-components/pages-list-abstract.component';
// ------------------------------------ FIM - Componentes ------------------------------------

// Forms Builders validators
export * from './lib/presentation/ui/shared/forms-builders-validators/informacoes-endereco';
export * from './lib/presentation/ui/shared/forms-builders-validators/informacoes-pessoais';
export * from './lib/presentation/ui/shared/forms-builders-validators/informacoes-profissionais';

// Diretivas
export * from './lib/presentation/ui/shared/directives/mask.directive';
export * from './lib/presentation/ui/shared/directives/btns/btn-atualizar.directive';
export * from './lib/presentation/ui/shared/directives/btns/btn-cadastrar.directive';
export * from './lib/presentation/ui/shared/directives/btns/btn-deletar.directive';
export * from './lib/presentation/ui/shared/directives/btns/btn-visualizar.directive';
export * from './lib/presentation/ui/shared/directives/btns/btn-voltar.directive';

// Providers
export * from './lib/presentation/ui/shared/providers/usuario/atualizar-usuario-providers.module';
export * from './lib/presentation/ui/shared/providers/usuario/buscar-usuario-por-id-providers.module';
export * from './lib/presentation/ui/shared/providers/usuario/cadastrar-usuario-providers.module';
export * from './lib/presentation/ui/shared/providers/usuario/deletar-usuario-providers.module';
export * from './lib/presentation/ui/shared/providers/usuario/listar-usuarios-providers.module';

// Utils
export * from './lib/presentation/ui/shared/utils/filtro-generico';
export * from './lib/presentation/ui/shared/utils/remove-acentos';

// Interfaces
export * from './lib/domain/interfaces/controllers/usuario/buscar-usuario-por-id-controller.interface';
export * from './lib/domain/interfaces/controllers/usuario/atualizar-usuario-controller.interface';
export * from './lib/domain/interfaces/controllers/usuario/cadastrar-usuario-controller.interface';
export * from './lib/domain/interfaces/controllers/usuario/deletar-usuario-controller.interface';
export * from './lib/domain/interfaces/controllers/usuario/listar-usuario-controller.interface';

// Constantes
export * from './lib/presentation/ui/shared/constants/estados-brasileiros';
export * from './lib/presentation/ui/shared/constants/generos';
export * from './lib/presentation/ui/shared/constants/tema-sistema';
export * from './lib/presentation/ui/shared/constants/tipos-status-usuario';
export * from './lib/presentation/ui/shared/constants/tipos-usuarios';
export * from './lib/presentation/ui/shared/constants/usuarios-formulario-mock';


export const SHARED_STYLES_PATH = './lib/presentation/ui/shared/styles/shared-styles.scss';