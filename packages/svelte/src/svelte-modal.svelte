<svelte:options customElement="svelte-modal" />

<script lang="ts">
  import { Dialog, DialogOverlay, DialogTitle, Transition, TransitionChild } from 'svelte-headlessui';

  export let isOpen = false;
  export let title = 'Svelte Modal';
  export let description = 'This is a modal dialog built with svelte-headlessui.';

  function close() {
    isOpen = false;
  }

  function open() {
    isOpen = true;
  }
</script>

<div class="container">
  <button type="button" class="open-button" on:click={open}>
    Open Svelte Modal
  </button>

  <Transition show={isOpen}>
    <Dialog on:close={close} class="modal-overlay">
      <TransitionChild
        enter="transition-opacity ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <DialogOverlay class="backdrop" />
      </TransitionChild>

      <div class="modal-container">
        <div class="modal-wrapper">
          <TransitionChild
            enter="transition-all ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition-all ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div class="modal-panel">
              <div class="modal-header">
                <DialogTitle class="modal-title">{title}</DialogTitle>
              </div>

              <div class="modal-body">
                <p class="modal-description">{description}</p>

                <div class="modal-content">
                  <p>
                    This modal demonstrates svelte-headlessui integration:
                  </p>
                  <ul>
                    <li>✅ Svelte-native Headless UI</li>
                    <li>✅ Automatic accessibility (ARIA attributes)</li>
                    <li>✅ Focus trap management</li>
                    <li>✅ ESC key to close</li>
                    <li>✅ Click outside to close</li>
                    <li>✅ Smooth transitions</li>
                  </ul>
                </div>
              </div>

              <div class="modal-actions">
                <button type="button" class="close-button" on:click={close}>
                  Close
                </button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </Transition>
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

  /* Modal Overlay */
  :global(.modal-overlay) {
    position: relative;
    z-index: 50;
  }

  /* Backdrop */
  :global(.backdrop) {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  /* Transitions */
  :global(.transition-opacity) {
    transition-property: opacity;
  }

  :global(.transition-all) {
    transition-property: all;
  }

  :global(.ease-out) {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  :global(.ease-in) {
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  }

  :global(.duration-300) {
    transition-duration: 300ms;
  }

  :global(.duration-200) {
    transition-duration: 200ms;
  }

  :global(.opacity-0) {
    opacity: 0;
  }

  :global(.opacity-100) {
    opacity: 1;
  }

  :global(.scale-95) {
    transform: scale(0.95);
  }

  :global(.scale-100) {
    transform: scale(1);
  }

  /* Modal Container */
  .modal-container {
    position: fixed;
    inset: 0;
    overflow-y: auto;
  }

  .modal-wrapper {
    display: flex;
    min-height: 100%;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    text-align: center;
  }

  /* Modal Panel */
  .modal-panel {
    width: 100%;
    max-width: 28rem;
    transform: scale(1);
    overflow: hidden;
    border-radius: 12px;
    background-color: white;
    padding: 1.5rem;
    text-align: left;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  /* Modal Header */
  .modal-header {
    margin-bottom: 1rem;
  }

  :global(.modal-title) {
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
    .modal-panel {
      max-width: 90vw;
      padding: 1.25rem;
    }

    :global(.modal-title) {
      font-size: 1.25rem;
    }
  }
</style>
