<svelte:options customElement="svelte-modal" />

<script lang="ts">
  import { createDialog, melt } from '@melt-ui/svelte';

  let {
    title = $bindable('Svelte Modal'),
    description = $bindable('This is a modal dialog built with Svelte and Melt UI.'),
    onbuttonclick = $bindable('')
  } = $props();

  const {
    elements: { trigger, overlay, content, title: titleEl, description: descriptionEl, close },
    states: { open }
  } = createDialog({
    forceVisible: true,
    portal: null, // Shadow DOM内に留める
    onOpenChange: ({ next }) => {
      // モーダルが開いた時にonbuttonclickを実行
      if (next && onbuttonclick) {
        try {
          const fn = new Function(onbuttonclick);
          fn();
        } catch (e) {
          console.error('Error executing onbuttonclick:', e);
        }
      }
      return next;
    }
  });
</script>

<div class="container">
  <button type="button" class="open-button" use:melt={$trigger}>
    Open Svelte Modal
  </button>

  {#if $open}
    <div use:melt={$overlay} class="overlay"></div>
    <div use:melt={$content} class="modal-content">
      <div class="modal-header">
        <h3 use:melt={$titleEl} class="modal-title">{title}</h3>
      </div>

      <div class="modal-body">
        <slot name="content">
          <!-- デフォルトコンテンツ -->
          <p use:melt={$descriptionEl} class="modal-description">{description}</p>

          <div class="feature-list">
            <p>
              This modal demonstrates Svelte + Melt UI integration:
            </p>
            <ul>
              <li>✅ Melt UI headless components</li>
              <li>✅ Svelte 5 runes ($bindable, $state)</li>
              <li>✅ Automatic accessibility (ARIA)</li>
              <li>✅ Automatic focus trap</li>
              <li>✅ ESC key to close</li>
              <li>✅ Click outside to close</li>
              <li>✅ Smooth animations</li>
            </ul>
          </div>
        </slot>
      </div>

      <div class="modal-actions">
        <button type="button" class="close-button" use:melt={$close}>
          Close
        </button>
      </div>
    </div>
  {/if}
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

  /* Overlay */
  .overlay {
    position: fixed;
    inset: 0;
    z-index: 50;
    background-color: rgba(0, 0, 0, 0.5);
    animation: fadeIn 0.2s ease-out;
  }

  /* Modal Content */
  .modal-content {
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 51;
    transform: translate(-50%, -50%);
    max-width: 28rem;
    width: 90%;
    max-height: 85vh;
    overflow-y: auto;
    border-radius: 12px;
    background-color: white;
    padding: 1.5rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    animation: slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Animations */
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
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
    margin: 0 0 1rem 0;
  }

  .feature-list {
    margin-top: 1rem;
  }

  .feature-list p {
    margin: 0 0 0.75rem 0;
    color: #374151;
    line-height: 1.6;
  }

  .feature-list ul {
    margin: 0;
    padding-left: 1.5rem;
    color: #374151;
    line-height: 1.8;
  }

  .feature-list li {
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
    .modal-content {
      max-width: 90vw;
      padding: 1.25rem;
    }

    .modal-title {
      font-size: 1.25rem;
    }
  }
</style>
