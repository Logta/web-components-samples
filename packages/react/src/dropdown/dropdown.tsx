import React, { useState, useEffect, useRef } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import reactToWebComponent from 'react-to-webcomponent';
import styles from './dropdown.module.css';
import cssText from './dropdown.module.css?inline';

export interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  options?: string | DropdownOption[]; // JSON string or array
  selected?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string, option: DropdownOption) => void;
}

function ReactDropdown({
  options = [],
  selected = '',
  placeholder = 'Select an option',
  disabled = false,
  onChange
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(selected);
  const [parsedOptions, setParsedOptions] = useState<DropdownOption[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

    if (typeof options === 'string') {
      try {
        const parsed = JSON.parse(options);
        newOptions = Array.isArray(parsed) ? parsed : [];
      } catch (e) {
        console.error('Failed to parse options JSON:', e);
        newOptions = [];
      }
    } else if (Array.isArray(options)) {
      newOptions = options;
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
    if (!disabled) {
      e.stopPropagation(); // 外部のクリックイベントリスナーに伝播しない
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (e: React.MouseEvent, option: DropdownOption) => {
    if (!disabled) {
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
        className={`${styles.button} ${disabled ? styles.buttonDisabled : ''}`}
        onClick={handleToggle}
        disabled={disabled}
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

const ReactDropdownElement = reactToWebComponent(
  ReactDropdown,
  React,
  ReactDOMClient,
  {
    props: {
      options: 'string', // HTML属性として文字列を受け取る
      selected: 'string',
      placeholder: 'string',
      disabled: 'boolean',
    }
  }
);

if (!customElements.get('react-dropdown')) {
  customElements.define('react-dropdown', ReactDropdownElement);
}

export default ReactDropdown;
export { ReactDropdownElement };
