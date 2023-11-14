<template>
  <main>
    <Header />
    <div class="content-header">
      <h1 class="title">Ogłoszenia</h1>
      <button class="btn" title="Dodaj ogłoszenie">
        <Icon class="icon" name="material-symbols:add" />
      </button>
    </div>
    <Announcement class="color" />
    <Announcement class="color" />
    <Announcement class="color" />
    <Announcement class="color" />
  </main>
</template>

<style lang="scss">
@import "../assets/css/variables";

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
}

.btn {
  border: 0;
  background-color: #fff;
  cursor: pointer;
  border-radius: 50%;
  aspect-ratio: 1 / 1;

  &:hover,
  &:focus-visible {
    background-color: #cacaca;
  }
}

.icon {
  font-size: 50px;
  min-width: 40px;
}

.color:nth-child(odd) {
  background-color: $secondary;
}

.color:last-child {
  border-bottom: 1px solid $accent;
}
</style>
