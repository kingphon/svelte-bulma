<script lang="ts">
  export let label: string;
  export let className: string = "";
  export let classes: string = "";
  let isFocus: boolean = false;

  const onClose = () => {
    isFocus = false;
  };

  const onClick = (event: Event) => {
    event.stopPropagation();
    isFocus = !isFocus;
  };
</script>

<svelte:window on:click={onClose} />
<div class="dropdown {classes} {className} {isFocus ? 'is-active' : ''}">
  <div class="dropdown-trigger">
    <button
      class="button"
      aria-haspopup="true"
      aria-controls="dropdown-menu"
      on:click={onClick}
    >
      <span>{@html label}</span>
      <!-- <span class="icon is-small">
        <i class="fa fa-angle-{icon}" aria-hidden="true"></i>
      </span> -->
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu" role="menu">
    <!-- <div class="dropdown-content"> -->
    <slot><!-- dropdown items go here --></slot>
    <!-- </div> -->
  </div>
</div>
