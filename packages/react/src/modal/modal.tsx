import { useState, useEffect, Fragment } from 'react';
import r2wc from '@r2wc/react-to-web-component';
import { Dialog, Transition } from '@headlessui/react';
import styles from './modal.module.css';
import cssText from './modal.module.css?inline';

interface ModalComponentProps {
  isOpen?: boolean;
  title?: string;
  description?: string;
}

function ModalComponent({
  isOpen: initialIsOpen = false,
  title = 'React Modal',
  description = 'This is a modal dialog built with Headless UI for React.'
}: ModalComponentProps) {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  // isOpen propが変更されたら状態を更新
  useEffect(() => {
    setIsOpen(initialIsOpen);
  }, [initialIsOpen]);

  // CSSをグローバルに注入（一度だけ）
  useEffect(() => {
    const styleId = 'react-modal-styles';
    if (!document.getElementById(styleId)) {
      const styleElement = document.createElement('style');
      styleElement.id = styleId;
      styleElement.textContent = cssText;
      document.head.appendChild(styleElement);
    }
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className={styles.container}>
      <button
        type="button"
        onClick={openModal}
        className={styles.openButton}
      >
        Open React Modal
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className={styles.modalOverlay} onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter={styles.backdropEnter}
            enterFrom={styles.backdropEnterFrom}
            enterTo={styles.backdropEnterTo}
            leave={styles.backdropLeave}
            leaveFrom={styles.backdropLeaveFrom}
            leaveTo={styles.backdropLeaveTo}
          >
            <div className={styles.backdrop} aria-hidden="true" />
          </Transition.Child>

          <div className={styles.modalContainer}>
            <div className={styles.modalWrapper}>
              <Transition.Child
                as={Fragment}
                enter={styles.panelEnter}
                enterFrom={styles.panelEnterFrom}
                enterTo={styles.panelEnterTo}
                leave={styles.panelLeave}
                leaveFrom={styles.panelLeaveFrom}
                leaveTo={styles.panelLeaveTo}
              >
                <Dialog.Panel className={styles.modalPanel}>
                  <div className={styles.modalHeader}>
                    <Dialog.Title as="h3" className={styles.modalTitle}>
                      {title}
                    </Dialog.Title>
                  </div>

                  <div className={styles.modalBody}>
                    <Dialog.Description className={styles.modalDescription}>
                      {description}
                    </Dialog.Description>

                    <div className={styles.modalContent}>
                      <p>
                        This modal demonstrates Headless UI integration in a React Web Component.
                        It features:
                      </p>
                      <ul>
                        <li>✅ Automatic accessibility (ARIA attributes)</li>
                        <li>✅ Focus trap management</li>
                        <li>✅ ESC key to close</li>
                        <li>✅ Click outside to close</li>
                        <li>✅ Smooth transitions</li>
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

// @r2wc/react-to-web-componentを使ってWeb Componentを作成
const ReactModalElement = r2wc(ModalComponent, {
  props: {
    isOpen: 'boolean',
    title: 'string',
    description: 'string',
  }
});

// Web Componentとして定義
if (!customElements.get('react-modal')) {
  customElements.define('react-modal', ReactModalElement);
}

export default ModalComponent;
export { ReactModalElement };
