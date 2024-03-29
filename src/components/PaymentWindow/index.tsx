import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { setMovieOrderList, setSeriesOrderList } from '../../api/firebase';
import { movieDetailType } from '../../types/movieType';
import { seriesDetailType } from '../../types/seriesType';
import './style.scss';

const PaymentWindow = ({ closeModal, paymentData }: any) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtn = (e: React.MouseEvent<HTMLElement> | any) => {
    if (modalRef.current == e.target) {
      closeModal();
    } else if (e.target.textContent == '취소') {
      closeModal();
    }
  };

  const setPaymentData = () => {
    paymentData.forEach((item: movieDetailType | seriesDetailType) => {
      if ('userMovieState' in item) {
        setMovieOrderList([item]);
      }
      if ('userSeriesState' in item) {
        setSeriesOrderList([item]);
      }
    });
  };

  return (
    <div className='paymentContainer' onClick={closeBtn} ref={modalRef}>
      <div className='paymentWrap'>
        <div className='payment__text'>
          <h2>결제하시겠습니까?</h2>
        </div>
        <div className='payment__button'>
          <Link to='/OrderList' onClick={setPaymentData}>
            <button>결제</button>
          </Link>
          <button onClick={closeBtn}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentWindow;
