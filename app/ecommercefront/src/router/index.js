import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import loginView from "../views/loginView.vue";
import cadastroView from "../views/cadastroView.vue";
import carrinhoView from "../views/CarrinhoView.vue";
import MeusdadosView from "../views/MeusDadosView.vue";
import ListagemEndeView from "../views/ListagemEndeView.vue";
import cadastroendeview from "../views/cadastroEndeView.vue";
import editarEndeView from "../views/EditarEndeView.vue";
import produtoview from "../views/produtoView.vue";
import favoritoview from "../views/FavoritoView.vue";
import paginacaoview from "../views/PaginacaoView.vue"
import avaliacoesview from "../views/AvaliacoesView.vue"
import pedidosview from "../views/PedidoView.vue"
import moreinfosorder from "../views/MoreInfosOrder.vue"



const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: loginView,
  },
  {
    path: "/cadastro",
    name: "cadastro",
    component: cadastroView,
  },
  {
    path: "/carrinho",
    name: "carrinho",
    component: carrinhoView,
  },
  {
    path: "/perfil",
    name: "perfil",
    component: MeusdadosView,
  },
  {
    path: "/produtos",
    name: "produtos",
    component: paginacaoview
  },
  {
    path: "/endereco",
    name: "endereco",
    component: ListagemEndeView,
  },
  {
    path: "/endereco/:id",
    name: "enderecoEditar",
    component: editarEndeView,
  },
  {
    path: "/endereco/CadastrarNovoEndereco",
    name: "novoEndereco",
    component: cadastroendeview,
  },
  {
    path: "/produto/:id",
    name: "produto",
    component: produtoview,
  },
  {
    path: "/favoritos",
    name: "favoritos",
    component: favoritoview,
  },
  {
    path: "/avaliacoes",
    name: "avaliacoes",
    component:avaliacoesview
  },
  {
    path: "/pedidos",
    name: "pedidos",
    component: pedidosview
  },
  {
    path:"/pedidos/:id",
    name:"pedido",
    component: moreinfosorder
  }
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
