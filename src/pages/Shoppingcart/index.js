import React from 'react';
import './styles.css';
import apiDataUnder10 from '../../api/abaixo-10-reais.json';
import apiDataOver10 from '../../api/acima-10-reais.json';


export default function Shoppingcart() {
    
    let params = new URLSearchParams(document.location.search.substring(1));
    let cart = params.get("cartTotal");

    let apiData = apiDataOver10;
    console.log(apiData)
    
   if (cart==="under10") {
      let apiData = apiDataUnder10;
      console.log(apiData)
   }
   
    return (
      <div className='container'>
        <div className='header'>
          <strong>Meu carrinho</strong>
          <hr size="1" width="100%"></hr>             
        </div>
          <ul className='itemslist'>
            {apiData.items.map(item => (
              <li key={item.id}>
                <div className='showitem'>
                  <img src={item.imageUrl} alt={item.name} />
                    <div className='description'>
                      <h1>{item.name}</h1>
                      <h2>R$ {item.listPrice/100}</h2>
                      <h1>R$ {item.sellingPrice/100}</h1>
                    </div>
                </div>
              </li>
            ))}
          </ul>
          <hr size="1" width="100%"></hr>  
          <div className='totalcart'>
            <p className='total'>Total</p>
            <p className='value'>R$ {apiData.value/100}</p>
          </div>

      </div>
    )
}
