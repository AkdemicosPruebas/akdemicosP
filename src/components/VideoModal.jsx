import React, { useState } from 'react';
import Modal from 'react-modal';

// Establece el root element para el modal
Modal.setAppElement('#root');

const VideoModal = ({ videoUrl }) => {
  // Estado para abrir y cerrar el modal
  const [isOpen, setIsOpen] = useState(false);

  // Funciones para abrir y cerrar el modal
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      {/* Botón para abrir el modal */}
      <button onClick={openModal}>Ver Video</button>

      {/* Modal con el video */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-content">
          <button onClick={closeModal} className="close-btn">X</button>
          <iframe
            width="100%"
            height="400"
            src={videoUrl}
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Modal>

    </div>
  );
};

export default VideoModal;
