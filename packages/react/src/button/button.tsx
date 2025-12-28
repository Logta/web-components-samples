import React, { useEffect } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import reactToWebComponent from 'react-to-webcomponent';
import styles from './button.module.css';
import cssText from './button.module.css?inline';

interface ButtonProps {
  label?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onbuttonclick?: string;
}

function ReactButton({
  label = 'Button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onbuttonclick
}: ButtonProps) {
  // CSSをグローバルに注入（一度だけ）
  useEffect(() => {
    const styleId = 'react-button-styles';
    if (!document.getElementById(styleId)) {
      const styleElement = document.createElement('style');
      styleElement.id = styleId;
      styleElement.textContent = cssText;
      document.head.appendChild(styleElement);
    }
  }, []);

  const handleClick = () => {
    if (!disabled && onbuttonclick) {
      try {
        const fn = new Function(onbuttonclick);
        fn();
      } catch (e) {
        console.error('Error executing onbuttonclick:', e);
      }
    }
  };

  const buttonClasses = [
    styles.button,
    styles[variant],
    size !== 'medium' ? styles[size] : '',
  ].filter(Boolean).join(' ');

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={handleClick}
      type="button"
    >
      {label}
    </button>
  );
}

const ReactButtonElement = reactToWebComponent(ReactButton, React, ReactDOMClient);

if (!customElements.get('react-button')) {
  customElements.define('react-button', ReactButtonElement);
}

export default ReactButton;
export { ReactButtonElement };
