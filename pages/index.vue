<template>
  <main>
    <Header />
    <div class="content-header">
      <h1>Ogłoszenia</h1>
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

<style lang="scss" scoped>
@import "../assets/css/variables";

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
}

.color:nth-child(odd) {
  background-color: $secondary;
}

.color:last-child {
  border-bottom: 1px solid $accent;
}
</style>
