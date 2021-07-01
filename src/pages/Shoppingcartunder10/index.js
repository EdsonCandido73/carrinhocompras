import React from 'react';
import './styles.css';
import apiDataUnder10 from '../../api/abaixo-10-reais.json';

export default function Shoppingcartover10() {
      
    let apiData = apiDataUnder10;
    console.log(apiData)  

    function checkShipping() {
      if((apiData.value/100) > 10) {
        return (
          <label className='checkshipping'>Parabéns, sua compra tem frete grátis !</label>
        )
      }
    }
      
    return (
      <div className='container'>
        <div className='header'>
          <strong>Meu carrinho</strong>
          <hr size="2" width="100%" color='#c4c4c4'></hr>    
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
          <hr size="2" width="100%" color='#c4c4c4'></hr>          
            <div className='totalcart'>
              <p className='total'>Total</p>
              <p className='value'>R$ {apiData.value/100}</p>           
            </div> 
            <div className='checklabel'>
              {checkShipping()}
            </div>            
          <hr size="2" width="100%" color='#c4c4c4'></hr> 
          <button className='final'>Finalizar compra</button> 
      </div>
    )
}
