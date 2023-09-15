import { useNavigate } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import { useState } from "react";

export default function AdicionarProdutos() {
  document.title = "Editar Produtos";

  //utilizando redirecionamento de ROTAS com useNavigate();
  const navigate = useNavigate();

  //Utilizar o tamanho da lista para gerar o ID do novo produto.
  const id = ListaProdutos.length + 1;

  //Utilizando o HOOK useState()
  const [produto, setProduto] = useState({
    id,
    nome: "",
    desc: "",
    img: "",
    preco: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    ListaProdutos.push(produto);

    //Redirecionando após realizar a edição do produto filtrado.
    navigate("/produtos");
  };

  return (
    <>
      <h1>Adicionar Produto</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Novo Produto</legend>
            <div>
              <label htmlFor="idNome">Nome</label>
              <input
                type="text"
                name="nome"
                id="idNome"
                onChange={handleChange}
                value={produto.nome}
              />
            </div>
            <div>
              <label htmlFor="idDesc">Descrição</label>
              <input
                type="text"
                name="desc"
                id="idDesc"
                onChange={handleChange}
                value={produto.desc}
              />
            </div>
            <div>
              <label htmlFor="idImg">Imagem</label>
              <input
                type="url"
                name="img"
                id="idImg"
                onChange={handleChange}
                value={produto.img}
              />
            </div>
            <div>
              <label htmlFor="idPreco">Preço</label>
              <input
                type="text"
                name="preco"
                id="idPreco"
                onChange={handleChange}
                value={produto.preco}
              />
            </div>
            <div>
              <button>Adicionar</button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}
