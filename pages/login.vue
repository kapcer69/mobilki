<template>
  <div class="content">
    <img class="logo" src="~/assets/images/layout_set_logo.png" alt="Logo" />
    <form class="login-form">
      <input
        type="text"
        placeholder="login"
        class="login-form-input"
        name="login"
      />
      <input
        type="password"
        placeholder="hasło"
        class="login-form-input"
        name="password"
      />
      <button type="button" class="login-form-btn">Zaloguj się</button>
    </form>
  </div>
</template>

<style lang="scss">
@import "../assets/css/variables";

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 8rem;
  gap: 1rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;

  &-input {
    padding: 0.5rem;
    border: 1px solid black;
    border-radius: 0.3rem;
  }

  &-btn {
    padding: 0.5rem;
    border-radius: 0.3rem;
    border: 0;
    background-color: $primary;
    color: white;
    cursor: pointer;

    &:hover,
    &:focus-visible {
      background-color: rgba(6, 118, 204, 0.8);
    }
  }
}

@media (max-width: 700px) {
  .content {
    flex-direction: column;
    justify-content: center;
    gap: 0;
    padding: 3rem 5rem 0 5rem;
  }

  .login-form {
    margin-bottom: auto;
  }

  .logo {
    margin-bottom: auto;
    min-width: 300px;
  }
}
</style>
