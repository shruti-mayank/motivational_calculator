import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    getQuote()
  }, []);

  const getQuote = () => {
    let url = `https://favqs.com/api/qotd`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quote;
        // console.log(dataQuotes);
        setQuote(dataQuotes.body);
      })
  }

  const handleClick = () => {
    getQuote();
  }

  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-8 offset-lg-2">
                <div id="quote" className="py-2 mt-2 rounded">
                    <button className="btn btn-block py-1 px-3 my-2" onClick={handleClick} id="new-quote">New Quote</button>
                    <div id="text"><p>{quote}</p></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quotes;