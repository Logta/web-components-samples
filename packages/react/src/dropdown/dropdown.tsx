import React, { useState, useEffect, useRef } from 'react';
import r2wc from '@r2wc/react-to-web-component';
import styles from './dropdown.module.css';
import cssText from './dropdown.module.css?inline';

export interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  options?: string; // JSON string
  selected?: string;
  placeholder?: string;
  disabled?: boolean; // @r2wc handles boolean attributes
  onChange?: (value: string, option: DropdownOption) => void;
}

function ReactDropdown({
  options = '[]',
  selected = '',
  placeholder = 'Select an option',
  disabled = false,
  onChange
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(selected);
  const [parsedOptions, setParsedOptions] = useState<DropdownOption[]>([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // @r2wc が disabled 属性を正しく渡さないため、直接属性をチェック
  useEffect(() => {
    // Web Component 要素を取得
    const container = dropdownRef.current?.closest('react-dropdown');
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

  // デバッグ用ログ
  useEffect(() => {
    console.log('ReactDropdown disabled state:', { disabled, isDisabled });
  }, [disabled, isDisabled]);

  // CSSをグローバルに注入（一度だけ）
  useEffect(() => {
    const styleId = 'react-dropdown-styles';
    if (!document.getElementById(styleId)) {
      const styleElement = document.createElement('style');
      styleElement.id = styleId;
      styleElement.textContent = cssText;
      document.head.appendChild(styleElement);
    }
  }, []);

  // Update parsedOptions when options prop changes
  useEffect(() => {
    let newOptions: DropdownOption[] = [];

    try {
      const parsed = JSON.parse(options);
      newOptions = Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.error('Failed to parse options JSON:', e);
      newOptions = [];
    }

    // 内容が実際に変更された場合のみ更新（無限ループ防止）
    setParsedOptions(prev => {
      if (JSON.stringify(prev) === JSON.stringify(newOptions)) {
        return prev;
      }
      return newOptions;
    });
  }, [options]);

  // selected propが変更されたら状態を更新
  useEffect(() => {
    setSelectedValue(selected);
  }, [selected]);

  // disabled propの変更を監視（デバッグ用）
  useEffect(() => {
    console.log('disabled prop changed:', { disabled, isDisabled });
  }, [disabled, isDisabled]);

  // Handle click outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // 次のフレームでイベントリスナーを追加（現在のクリックイベントが処理された後）
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = (e: React.MouseEvent) => {
    if (!isDisabled) {
      e.stopPropagation(); // 外部のクリックイベントリスナーに伝播しない
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (e: React.MouseEvent, option: DropdownOption) => {
    if (!isDisabled) {
      e.stopPropagation(); // 外部のクリックイベントリスナーに伝播しない
      setSelectedValue(option.value);
      setIsOpen(false);
      if (onChange) {
        onChange(option.value, option);
      }
    }
  };

  const selectedOption = parsedOptions.find(opt => opt.value === selectedValue);
  const displayLabel = selectedOption ? selectedOption.label : placeholder;
  const isPlaceholder = !selectedOption;

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button
        className={`${styles.button} ${isDisabled ? styles.buttonDisabled : ''}`}
        onClick={handleToggle}
        disabled={isDisabled}
        type="button"
      >
        <span className={isPlaceholder ? styles.placeholder : ''}>
          {displayLabel}
        </span>
        <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`} />
      </button>
      {isOpen && (
        <div className={styles.menu}>
          {parsedOptions.map((option) => (
            <div
              key={option.value}
              className={`${styles.item} ${option.value === selectedValue ? styles.itemSelected : ''}`}
              onClick={(e) => handleSelect(e, option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const ReactDropdownElement = r2wc(ReactDropdown, {
  props: {
    options: 'string',
    selected: 'string',
    placeholder: 'string',
    disabled: 'boolean',
  }
});

if (!customElements.get('react-dropdown')) {
  customElements.define('react-dropdown', ReactDropdownElement);
}

export default ReactDropdown;
export { ReactDropdownElement };
