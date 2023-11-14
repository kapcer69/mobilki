<template>
  <div class="announcement">
    <p class="announcement-date">25 września</p>
    <div class="announcement-content">
      <p>Godziny rektorskie</p>
      <small class="category">Ważne komunikaty</small>
    </div>
    <div class="announcement-actions">
      <button class="btn-round btn-actions" title="Edytuj ogłoszenie">
        <Icon class="icon" name="material-symbols:edit" />
      </button>
      <button class="btn-round btn-actions" title="Usuń ogłoszenie">
        <Icon class="icon" name="material-symbols:close" />
      </button>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/css/variables";

.announcement {
  display: flex;
  align-items: center;
  font-weight: 600;

  &-date {
    padding: 0 4rem;
  }

  &-content {
    border-left: 1px solid $accent;
    padding: 1rem;
  }

  &-actions {
    display: flex;
    margin-left: auto;
    margin-right: 1rem;
  }
}

.category {
  color: rgba(0, 0, 0, 0.5);
}

.btn-actions {
  background-color: inherit;
}

.icon-actions {
  min-width: 20px;
  max-width: 40px;
}
</style>
