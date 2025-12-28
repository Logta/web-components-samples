<svelte:options customElement="svelte-dropdown" />

<script lang="ts">
  interface DropdownOption {
    label: string;
    value: string;
  }

  let {
    options = $bindable<string | DropdownOption[]>([]),
    selected = $bindable(''),
    placeholder = $bindable('Select an option'),
    disabled = $bindable(false)
  } = $props();

  let isOpen = $state(false);
  let parsedOptions = $state<DropdownOption[]>([]);

  $effect(() => {
    // options propの変更を監視し、parsedOptionsを更新
    if (typeof options === 'string') {
      try {
        const parsed = JSON.parse(options);
        parsedOptions = Array.isArray(parsed) ? parsed : [];
      } catch (e) {
        console.error('Failed to parse options JSON:', e);
        parsedOptions = [];
      }
    } else if (Array.isArray(options)) {
      parsedOptions = options;
    } else {
      parsedOptions = [];
    }
  });

  function handleToggle() {
    if (!disabled) {
      isOpen = !isOpen;
    }
  }

  function handleSelect(option: DropdownOption) {
    if (!disabled) {
      selected = option.value;
      isOpen = false;
    }
  }

  function getSelectedLabel() {
    const selectedOpt = parsedOptions.find(opt => opt.value === selected);
    return selectedOpt ? selectedOpt.label : placeholder;
  }
  
  // 外側クリックでドロップダウンを閉じる処理
  let dropdownElement: HTMLDivElement;
  $effect(() => {
    if (isOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
          isOpen = false;
        }
      };
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }
  });
</script>

<div class="dropdown" bind:this={dropdownElement}>
  <button
    class="dropdown__button {disabled ? 'dropdown__button--disabled' : ''}"
    onclick={handleToggle}
    {disabled}
    type="button"
  >
    <span class="{!parsedOptions.find(opt => opt.value === selected) ? 'dropdown__placeholder' : ''}">
      {getSelectedLabel()}
    </span>
    <span class="dropdown__arrow {isOpen ? 'dropdown__arrow--open' : ''}"></span>
  </button>
  {#if isOpen}
    <div class="dropdown__menu">
      {#each parsedOptions as option}
        <div
          class="dropdown__item {option.value === selected ? 'dropdown__item--selected' : ''}"
          onclick={() => handleSelect(option)}
        >
          {option.label}
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .dropdown {
    position: relative;
    display: inline-block;
    width: 100%;
    max-width: 300px;
  }

  .dropdown__button {
    width: 100%;
    padding: 0.5rem 2.5rem 0.5rem 1rem;
    font-size: 1rem;
    background-color: white;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.2s ease-in-out;
    position: relative;
  }

  .dropdown__button:hover {
    border-color: #9ca3af;
  }

  .dropdown__button:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  .dropdown__button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .dropdown__arrow {
    position: absolute;
    right: 1rem;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #6b7280;
    transition: transform 0.2s ease-in-out;
  }

  .dropdown__arrow--open {
    transform: rotate(180deg);
  }

  .dropdown__menu {
    position: absolute;
    top: calc(100% + 0.25rem);
    left: 0;
    right: 0;
    background-color: white;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    max-height: 300px;
    overflow-y: auto;
    z-index: 10;
  }

  .dropdown__item {
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }

  .dropdown__item:hover {
    background-color: #f3f4f6;
  }

  .dropdown__item--selected {
    background-color: #eff6ff;
    color: #3b82f6;
    font-weight: 500;
  }

  .dropdown__placeholder {
    color: #9ca3af;
  }
</style>
