import React from 'react';
import './style.scss';
import { AiOutlineCheck } from 'react-icons/ai';

const ModalCartAlert = () => {
  return (
    <div className='modalCartAlert'>
      <p>
        <div>
          <AiOutlineCheck />
        </div>
        <h2>장바구니에 추가 되었습니다.</h2>
      </p>
    </div>
  );
};

export default ModalCartAlert;
