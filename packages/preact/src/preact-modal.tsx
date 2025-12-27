import { useState, useEffect, useRef } from 'preact/hooks';
import register from 'preact-custom-element';
import styles from './preact-modal.module.css';
import cssText from './preact-modal.module.css?inline';

interface ModalComponentProps {
  isOpen?: boolean;
  title?: string;
  description?: string;
}

function ModalComponent({
  isOpen: initialIsOpen = false,
  title = 'Preact Modal',
  description = 'This is a modal dialog built with Preact and native HTML <dialog> element.'
}: ModalComponentProps) {
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // isOpen propが変更されたら状態を更新
  useEffect(() => {
    setIsOpen(initialIsOpen);
  }, [initialIsOpen]);

  // CSSをグローバルに注入（一度だけ）
  useEffect(() => {
    const styleId = 'preact-modal-styles';
    if (!document.getElementById(styleId)) {
      const styleElement = document.createElement('style');
      styleElement.id = styleId;
      styleElement.textContent = cssText;
      document.head.appendChild(styleElement);
    }
  }, []);

  // isOpenの変更に応じてdialogを開閉
  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [isOpen]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleBackdropClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();

    // ダイアログ要素自体がクリックされた場合（コンテンツ外）
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    ) {
      closeModal();
    }
  }

  return (
    <div className={styles.container}>
      <button
        type="button"
        onClick={openModal}
        className={styles.openButton}
      >
        Open Preact Modal
      </button>

      <dialog
        ref={dialogRef}
        onClose={closeModal}
        onClick={handleBackdropClick}
        className={styles.dialog}
      >
        <div className={styles.modalPanel}>
          <div className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>{title}</h3>
          </div>

          <div className={styles.modalBody}>
            <p className={styles.modalDescription}>{description}</p>

            <div className={styles.modalContent}>
              <p>
                This modal demonstrates Preact + native &lt;dialog&gt; integration:
              </p>
              <ul>
                <li>✅ Preact lightweight (3KB)</li>
                <li>✅ Native &lt;dialog&gt; accessibility</li>
                <li>✅ Automatic focus trap</li>
                <li>✅ ESC key to close (native)</li>
                <li>✅ Click outside to close</li>
                <li>✅ ::backdrop pseudo-element</li>
              </ul>
            </div>
          </div>

          <div className={styles.modalActions}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

// preact-custom-elementを使ってWeb Componentを作成
register(ModalComponent, 'preact-modal', ['isOpen', 'title', 'description'], { shadow: false });

export default ModalComponent;
