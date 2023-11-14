<template>
  <main>
    <Header />
    <div class="content-header">
      <h1 class="title">Ogłoszenia</h1>
      <button class="btn-round" title="Dodaj ogłoszenie">
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

.icon {
  font-size: 50px;
  min-width: 20px;
  max-width: 40px;
}

.color:nth-child(odd) {
  background-color: $secondary;
}

.color:last-child {
  border-bottom: 1px solid $accent;
}
</style>
