<template>
  <header class="header">
    <picture class="logo">
      <source
        media="(max-width:650px)"
        srcset="../assets/images/layout_set_logo-mobile.png"
      />
      <img src="~/assets/images/layout_set_logo.png" alt="Logo" />
    </picture>
    <button class="account-btn">
      Admin
      <Icon class="icon" name="material-symbols:account-circle" />
    </button>
  </header>
</template>

<style lang="scss">
.header {
  display: flex;
  padding: 3rem 3rem;
  justify-content: space-between;
  align-items: center;
}

.account-btn {
  display: flex;
  gap: 0.4rem;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 0;
  background-color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;

  &:hover,
  &:focus-visible {
    background-color: #cacaca;
  }
}

@media (max-width: 650px) {
  .header {
    gap: 2rem;
  }

  .logo {
    min-width: 100px;
  }
}
</style>
