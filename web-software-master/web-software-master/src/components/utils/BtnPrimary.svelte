<script>
  export let text = 'Insert text';
</script>

<style lang="scss">
  .btn-primary {
    background-color: $primary;
    color: $light;
    font-weight: $bold;
    padding: 1rem 4rem;
    border-radius: 10px;
    
    @media (max-width: 768px) {
      padding: 1rem 2rem;
    }
  }
</style>

<button class="btn-primary">{text}</button>
