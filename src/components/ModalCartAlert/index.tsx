import React from 'react';
import './style.scss';
import { HiCheckCircle } from 'react-icons/hi';

const ModalCartAlert = () => {
  return (
    <div className='modalCartAlert'>
      <div>
        <div>
          <HiCheckCircle />
        </div>
        <h2>장바구니에 추가 되었습니다.</h2>
      </div>
    </div>
  );
};

export default ModalCartAlert;
