import React, { useState, useEffect } from "react";
import "../styles/Home.css";

const Home = () => {
  // Utilizamos useState para mantener el estado de la aplicación
  const [tokenPrice, setTokenPrice] = useState(0);
  const [tokenPriceChange, setTokenPriceChange] = useState(0);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [walletBalance, setWalletBalance] = useState(0);

  // Utilizamos useEffect para realizar una solicitud a la API cuando se monte el componente
  useEffect(() => {
    async function fetchData() {
      // Realizamos una solicitud a la API para obtener el precio del token
      const response = await fetch("/api/getTokenPrice");
      const data = await response.json();
      setTokenPrice(data.price);
      setTokenPriceChange(data.priceChange);
    }
    fetchData();
  }, []);

  // Una función que se ejecuta cuando el usuario realiza una compra
  function handleBuy() {
    // Realizamos una solicitud a la API para realizar la compra
    fetch("/api/buy", { method: "POST" }).then((response) => {
      // Actualizamos el historial de transacciones y el balance de la cartera del usuario
      setTransactionHistory((prevTransactions) => [
        ...prevTransactions,
        "Compra",
      ]);
      setWalletBalance((prevBalance) => prevBalance - tokenPrice);
    });
  }

  // Una función que se ejecuta cuando el usuario realiza una venta
  function handleSell() {
    // Realizamos una solicitud a la API para realizar la venta
    fetch("/api/sell", { method: "POST" }).then((response) => {
      // Actualizamos el historial de transacciones y el balance de la cartera del usuario
      setTransactionHistory((prevTransactions) => [
        ...prevTransactions,
        "Venta",
      ]);
      setWalletBalance((prevBalance) => prevBalance + tokenPrice);
    });
  }

  return (
    <div>
      {/* Utilizamos la clase 'header' para el encabezado de la aplicación */}
      <header className="header">
        <h1>Aplicación de criptomonedas</h1>
      </header>
      {/* Utilizamos la clase 'main' para el contenido principal de la aplicación */}
      <main className="main">
        {/* Utilizamos la clase 'buy' para el botón de compra */}
        <button className="buy" onClick={handleBuy}>
          Comprar
        </button>
        {/* Utilizamos la clase 'sell' para el botón de venta */}
        <button className="sell" onClick={handleSell}>
          Vender
        </button>
        {/* Utilizamos la clase 'h1' para el título del precio del token */}
        <h1>Precio del token: ${tokenPrice.toFixed(2)}</h1>
        {/* Utilizamos la clase 'h2' para el subtítulo de la variación del precio */}
        <h2>Variación del precio: {tokenPriceChange.toFixed(2)}%</h2>
        {/* Utilizamos la clase 'ul' para el historial de transacciones */}
        <ul>
          {transactionHistory.map((transaction) => (
            // Utilizamos la clase 'li' para cada elemento del historial de transacciones
            <li className="li">{transaction}</li>
          ))}
        </ul>
        {/* Utilizamos la clase 'h3' para el balance de la cartera del usuario */}
        <h3>Balance de la cartera: ${walletBalance.toFixed(2)}</h3>
      </main>
    </div>
  );
};

export default Home;
