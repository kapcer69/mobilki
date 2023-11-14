<template>
  <div class="content">
    <picture>
      <source
        media="(max-width:650px)"
        srcset="../assets/images/layout_set_logo-mobile.png"
      />
      <img src="~/assets/images/layout_set_logo.png" alt="Logo" />
    </picture>
    <form class="login-form">
      <input type="text" name="login" id="login" />
      <input type="password" name="password" id="password" />
      <button type="button" class="btn-login">Zaloguj się</button>
    </form>
  </div>
</template>

<style lang="scss">
.content {
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 0 8rem;
  gap: 1rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
