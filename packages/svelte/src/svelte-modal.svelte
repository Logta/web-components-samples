<svelte:options customElement="svelte-modal" />

<script lang="ts">
  export let isOpen = false;
  export let title = 'Svelte Modal';
  export let description = 'This is a modal dialog built with Svelte and native HTML <dialog> element.';

  let dialog: HTMLDialogElement;

  $: if (dialog) {
    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }

  function close() {
    isOpen = false;
  }

  function open() {
    isOpen = true;
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
      close();
    }
  }
</script>

<div class="container">
  <button type="button" class="open-button" on:click={open}>
    Open Svelte Modal
  </button>

  <dialog bind:this={dialog} on:close={close} on:click={handleBackdropClick}>
    <div class="modal-panel">
      <div class="modal-header">
        <h3 class="modal-title">{title}</h3>
      </div>

      <div class="modal-body">
        <p class="modal-description">{description}</p>

        <div class="modal-content">
          <p>
            This modal demonstrates Svelte + native &lt;dialog&gt; integration:
          </p>
          <ul>
            <li>✅ Svelte reactive ($:)</li>
            <li>✅ Native &lt;dialog&gt; accessibility</li>
            <li>✅ Automatic focus trap</li>
            <li>✅ ESC key to close (native)</li>
            <li>✅ Click outside to close</li>
            <li>✅ ::backdrop pseudo-element</li>
          </ul>
        </div>
      </div>

      <div class="modal-actions">
        <button type="button" class="close-button" on:click={close}>
          Close
        </button>
      </div>
    </div>
  </dialog>
</div>

<style>
  /* Container */
  .container {
    display: inline-block;
  }

  /* Open Button */
  .open-button {
    padding: 0.75rem 1.5rem;
    background-color: #ef4444;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .open-button:hover {
    background-color: #dc2626;
  }

  .open-button:focus {
    outline: 2px solid #ef4444;
    outline-offset: 2px;
  }

  /* Dialog Element */
  :global(dialog) {
    border: none;
    border-radius: 12px;
    padding: 0;
    max-width: 28rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    animation: slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  :global(dialog::backdrop) {
    background-color: rgba(0, 0, 0, 0.5);
    animation: fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Animations */
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Modal Panel */
  .modal-panel {
    padding: 1.5rem;
    background-color: white;
  }

  /* Modal Header */
  .modal-header {
    margin-bottom: 1rem;
  }

  .modal-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
    margin: 0;
  }

  /* Modal Body */
  .modal-body {
    margin-top: 0.5rem;
  }

  .modal-description {
    font-size: 0.875rem;
    color: #6b7280;
    margin-bottom: 1rem;
  }

  .modal-content {
    margin-top: 1rem;
  }

  .modal-content p {
    margin: 0 0 0.75rem 0;
    color: #374151;
    line-height: 1.6;
  }

  .modal-content ul {
    margin: 0;
    padding-left: 1.5rem;
    color: #374151;
    line-height: 1.8;
  }

  .modal-content li {
    margin-bottom: 0.25rem;
  }

  /* Modal Actions */
  .modal-actions {
    margin-top: 1.5rem;
    display: flex;
    gap: 0.75rem;
    justify-content: flex-end;
  }

  .close-button {
    padding: 0.625rem 1.25rem;
    background-color: #ef4444;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .close-button:hover {
    background-color: #dc2626;
  }

  .close-button:focus {
    outline: 2px solid #ef4444;
    outline-offset: 2px;
  }

  /* Responsive */
  @media (max-width: 640px) {
    :global(dialog) {
      max-width: 90vw;
    }

    .modal-panel {
      padding: 1.25rem;
    }

    .modal-title {
      font-size: 1.25rem;
    }
  }
</style>
