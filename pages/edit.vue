<script lang="ts" setup>
const { announcementArray, addItem, removeItem, updateItem } =
  useAnnouncementState();
const router = useRouter();

const inputRefs = ref({
  id: announcementArray.value.length + 1,
  date: "",
  category: "",
  description: "",
});

const onSubmit = () => {
  addItem({
    id: inputRefs.value.id,
    date: inputRefs.value.date,
    category: inputRefs.value.category,
    description: inputRefs.value.description,
  });
  router.push("/");
};
</script>

<template>
  <Header />
  <div class="content">
    <h2 class="title">Dodaj/edytuj</h2>
    <form class="edit" @submit.prevent="onSubmit">
      <div class="edit-group">
        <label for="date">Wybierz datę:</label>
        <input type="date" class="input" v-model="inputRefs.date" />
      </div>
      <select class="input" v-model="inputRefs.category">
        <option value="">Wybierz kategorię</option>
        <option value="Ważne komunikaty">Ważne komunikaty</option>
        <option value="Z życia szkoły">Z życia szkoły</option>
      </select>
      <input
        type="text"
        placeholder="Opis"
        class="input"
        v-model="inputRefs.description"
      />

      <div class="btn-group">
        <button
          type="button"
          class="btn btn-secondary"
          @click="router.push('/')"
        >
          Anuluj
        </button>
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
