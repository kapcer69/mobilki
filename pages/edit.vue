<template>
  <Header />
  <div class="content">
    <h2 class="title">Dodaj/edytuj</h2>
    <form class="edit">
      <div class="edit-group">
        <label for="date">Wybierz datę:</label>
        <input type="date" name="date" id="date" class="input" />
      </div>
      <select name="category" id="category" class="input">
        <option value="">Wybierz kategorię</option>
        <option value="wazne">Ważne komunikaty</option>
        <option value="z_zycia_szkoly">Z życia szkoły</option>
      </select>
      <input type="text" placeholder="Opis" class="input" />

      <div class="btn-group">
        <button type="button" class="btn btn-secondary">Anuluj</button>
        <button type="submit" class="btn">Ok</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/variables";
.content {
  padding: 3rem;
}

.title {
  margin-bottom: 2rem;
}

.edit {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 50%;

  &-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}

.btn {
  width: 100%;
  text-transform: uppercase;
}

.btn-group {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
}

@media (max-width: 650px) {
  .edit {
    max-width: none;
  }
}
</style>
