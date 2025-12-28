import { useEffect, useRef, useState } from 'react';
import r2wc from '@r2wc/react-to-web-component';
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
  onbuttonclick
}: ButtonProps) {
  const [isDisabled, setIsDisabled] = useState(false);
  const buttonContainerRef = useRef<HTMLDivElement>(null);

  // @r2wc が disabled 属性を正しく渡さないため、直接属性をチェック
  useEffect(() => {
    // Web Component 要素を取得
    const container = buttonContainerRef.current?.closest('react-button');
    if (!container) return;

    // 初期状態をチェック
    setIsDisabled(container.hasAttribute('disabled'));

    // 属性の変更を監視
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'disabled') {
          setIsDisabled(container.hasAttribute('disabled'));
        }
      });
    });

    observer.observe(container, { attributes: true });

    return () => observer.disconnect();
  }, []);

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
    if (!isDisabled && onbuttonclick) {
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
    <div ref={buttonContainerRef}>
      <button
        className={buttonClasses}
        disabled={isDisabled}
        onClick={handleClick}
        type="button"
      >
        {label}
      </button>
    </div>
  );
}

const ReactButtonElement = r2wc(ReactButton, {
  props: {
    label: 'string',
    variant: 'string',
    size: 'string',
    disabled: 'boolean',
    onbuttonclick: 'string',
  }
});

if (!customElements.get('react-button')) {
  customElements.define('react-button', ReactButtonElement);
}

export default ReactButton;
export { ReactButtonElement };
