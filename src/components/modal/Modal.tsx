import { IComponent } from '@/types/global.types';
import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import Button from '../button/Button';

interface IModal extends IComponent {
  isOpen: boolean;
  onClose: () => void;
  header: string;
}

const Modal: FC<IModal> = ({ isOpen, onClose, children, header }) => {
  const destination = typeof window !== 'undefined' && document.getElementById('modal-root');

  if (!isOpen || !destination) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white dark:bg-slate-200 rounded-md shadow-lg lg:w-[32rem] md:w-[29rem] w-[25rem] p-5 relative text-text-light">
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h2 className="text-xl font-bold">{header}</h2>
        <Button onClick={onClose} className="text-gray-600">
          &times;
        </Button>
      </div>
      <div className="modal-body">
        {children}
      </div>
    </div>
  </div>,
    destination
  );
};

export default Modal;
