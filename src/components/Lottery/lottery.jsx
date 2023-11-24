import React, { useState } from 'react';
import './lottery.css';


const Lottery = () => {
  const [prizeResults, setPrizeResults] = useState([]);
  const [userNumber, setUserNumber] = useState('');
  const [randomized, setRandomized] = useState('');

  const generateRandomPrizes = () => {
    const Prize1 = Math.floor(Math.random() * 900) + 100
    const newPrizeResults = 
    [
      { prize: "รางวัลที่ 1", number: Prize1 },
      { prize: "รางวัลที่ 2", number: Math.floor(Math.random() * 900) + 100 },
      { prize: "รางวัลที่ 2", number: Math.floor(Math.random() * 900) + 100 },
      { prize: "รางวัลที่ 2", number: Math.floor(Math.random() * 900) + 100 },
      { prize: "รางวัลใกล้เคียงรางวัลที่ 1", number: Prize1+1 },
      { prize: "รางวัลใกล้เคียงรางวัลที่ 1", number: Prize1-1 },
      { prize: "รางวัลเลขท้าย 2 ตัว", number: Math.floor(Math.random() * 90) + 10 }
    ];

    setPrizeResults(newPrizeResults);
    setRandomized(true);
  };

  const checkPrizes = () => {
    const userLotteryNumber = userNumber;
    // console.log("🚀 ~ file: App.jsx:28 ~ checkPrizes ~ userLotteryNumber:", userLotteryNumber)
    const lastTwoNums = userNumber.substring(1);
    // console.log("🚀 ~ file: App.jsx:30 ~ checkPrizes ~ lastTwoNums:", lastTwoNums)
    for (let index = 0; index < prizeResults.length; index++) {
      // console.log(prizeResults[index].number);
      
    }
    const userPrizes = prizeResults.filter(result => result.number == userLotteryNumber);
    // console.log("🚀 ~ file: App.jsx:31 ~ checkPrizes ~ userPrizes:", userPrizes)
    const userPrizes2 = prizeResults.filter(result=> result.number == lastTwoNums);
    // console.log("🚀 ~ file: App.jsx:33 ~ checkPrizes ~ userPrizes2:", userPrizes2)
    

    let message = "เสียใจด้วยคุณไม่ถูกรางวัล";

    if (userPrizes.length > 0 || userPrizes2.length > 0) {
      message = "ยินดีด้วย! คุณได้รับรางวัล:\n";
      userPrizes.forEach(prize => {
        message += `${prize.prize} - ${prize.number}\n`;
      });
      userPrizes2.forEach(prize => {
        message += `${prize.prize} - ${prize.number}\n`;
      });
    }

    alert(message);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4-kk ">รางวัลล็อตเตอรี่ Diversition</h1>

      <div className="mb-3-kk">
        <label htmlFor="lotteryNumber" className="form-label-kk"> เลขล็อตเตอรี่ :</label>
        <div className='input-kk'>
        <input
          type="number"
          id="lotteryNumber"
          className="form-control-kk"
          min="100"
          max="999"
          value={userNumber}
          onChange={(e) => setUserNumber(e.target.value)}
        />
        </div>
      </div>

      <button
        type="button"
        className="btn btn-primary-kk"
        onClick={checkPrizes}
        disabled={!randomized}
      >
        เช็ครางวัล
      </button>

      <button
        type="button"
        className="btn btn-success-kk"
        onClick={generateRandomPrizes}
      >
        สุ่มเลขรางวัล
      </button>

      <div className="mt-4-kk">
        <h2>ผลการสุ่มเลขรางวัล</h2>
        <table className="table-kk">
          <thead>
            <tr>
              <th scope="col">รางวัลที่</th>
              <th scope="col">เลขรางวัล</th>
            </tr>
          </thead>
          <tbody>
            {prizeResults.map((result, index) => (
              <tr key={index}>
                <td>{result.prize}</td>
                <td>{result.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Lottery;
