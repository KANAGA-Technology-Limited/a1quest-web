import React from 'react';
import ReactModal from 'react-modal';
import styles from './style.module.css';

const customStyles: ReactModal.Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'auto',
    width: '900px',
    maxWidth: '90vw',
    maxHeight: '95vh',
    height: 'auto',
    backgroundColor: '#fff',
    color: '#000',
    transition: 'all 0.3s',
    border: 'none',
    borderRadius: 12,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    overscrollBehavior: 'contain',
    zIndex: 20,
  },
};

function CustomModal({
  title,
  isOpen,
  onRequestClose,
  children,
  shouldCloseOnOverlayClick = true,
  width,
  height,
  maxWidth,
  maxHeight,
  showTitle = true,
  borderRadius,
  backgroundColor,
  resizeBody = true,
  paddingTop = 16,
  padding = 32,
  childrenClass,
  ...rest
}: {
  title?: string;
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
  shouldCloseOnOverlayClick?: boolean;
  width?: string;
  maxWidth?: string;
  height?: string;
  borderRadius?: number;
  paddingTop?: number;
  padding?: number;
  backgroundColor?: string;
  maxHeight?: string;
  showTitle?: boolean;
  resizeBody?: boolean;
  childrenClass?: string;
} & ReactModal.Props) {
  React.useEffect(() => {
    // Check if modal is open and prevent body from scrolling
    if (typeof window !== 'undefined' && resizeBody) {
      const body = document.body;
      ReactModal.setAppElement('#modals');

      if (isOpen) {
        // Disable scroll
        body.style.overflow = 'hidden';
        body.style.height = '100vh';
      } else {
        body.style.overflowY = 'auto';
        body.style.height = 'auto';
      }
    }
  }, [isOpen, resizeBody]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      // appElement={document.getElementById('modals')!}
      style={{
        // @ts-ignore
        content: {
          ...customStyles.content,
          width: width || customStyles.content?.width,
          maxWidth: maxWidth || customStyles.content?.maxWidth,
          height: height || customStyles.content?.height,
          maxHeight: maxHeight || customStyles.content?.maxHeight,
          borderRadius: borderRadius || customStyles.content?.borderRadius,
          backgroundColor: backgroundColor || customStyles.content?.backgroundColor,
          padding: padding,
          paddingTop: paddingTop,
          opacity: isOpen ? 1 : 0,
        },
        overlay: customStyles.overlay,
      }}
      closeTimeoutMS={500}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      {...rest}
    >
      {showTitle && (
        <div
          className={styles.modalTitleContainer}
          style={{
            justifyContent: title ? 'space-between' : 'flex-end',
          }}
        >
          {title && <h1>{title}</h1>}
          <button
            onClick={onRequestClose}
            style={{
              backgroundColor: 'transparent',
            }}
          >
            &#x2715;
          </button>
        </div>
      )}

      <div className={childrenClass}>{children}</div>
    </ReactModal>
  );
}

export default CustomModal;
