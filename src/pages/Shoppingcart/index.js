import React from 'react';
import './styles.css';
import apidataunder10 from '../../api/abaixo-10-reais.json';
import apidataover10 from '../../api/acima-10-reais.json';


export default function Shoppingcart() {
    
    let params = new URLSearchParams(document.location.search.substring(1));
    let cart = params.get("cartTotal");

    let dadosdaapi = apidataover10;
    console.log(dadosdaapi)
    
   if (cart=="under10") {
      let dadosdaapi = apidataunder10;
      console.log(dadosdaapi)
   }
   
    return (
        <div className='container'>
            <div className='header'>
                <strong>Meu carrinho</strong>
                <hr size="1" width="100%"></hr>             
            </div>
            <ul>
               <li> Produtos </li>
               <li> Produtos </li>
               <li> Produtos </li>
               {console.log(dadosdaapi)}
               {/*dadosdaapi.itemMetadata.items.map(item => (
                    <li key={item.id}>
                        <strong>{item.name}</strong>

                    </li>
               ))*/}
            </ul>

            <p>
                    Aqui é o carrinho {cart}
            </p>
        </div>
    )
}

 

/*
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>



    return (        
        <header>
            <div>
                <strong>Meu carrinho</strong>                
            </div>
        </header>

        <p>{teacher.bio}</p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ {teacher.cost}</strong>
            </p>
            <a 
                target="_blank"
                onClick={createNewConnection} 
                href={`https://wa.me/${teacher.whatsapp}`} 
            >
            <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </a>
        </footer>
        
    );
*/