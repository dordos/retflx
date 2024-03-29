import React, { useEffect, useState } from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

const MovieAverage = ({ movieAverage, seriesVerage }: any): JSX.Element => {
  const [starAverage, setStarAverage] = useState([
    <BsStar size='20' color='#888888' />,
    <BsStar size='20' color='#888888' />,
    <BsStar size='20' color='#888888' />,
    <BsStar size='20' color='#888888' />,
    <BsStar size='20' color='#888888' />,
  ]);

  const star = (average: number) => {
    const [first, second] = ((average / 10) * 5).toFixed(1).split('.');
    const averageCopy = [...starAverage];
    for (let i = 0; i < Number(first); i++) {
      averageCopy[i] = <BsStarFill size='20' color='#e22232' />;
    }
    if (Number(second) >= 5) {
      averageCopy[Number(first)] = <BsStarHalf size='20' color='#e22232' />;
    }
    return setStarAverage(averageCopy);
  };

  useEffect(() => {
    star(movieAverage | seriesVerage);
  }, [movieAverage]);

  return (
    <React.Fragment>
      {starAverage.map((item, idx) => (
        <React.Fragment key={idx}>{item}</React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default MovieAverage;
