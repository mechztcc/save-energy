<template>
  <Loader v-if="status == 'pending'" />
  
  <div class="flex flex-col justify-center h-full">
    <img class="h-10 mb-4" src="~/assets/imgs/undraw_tree.svg" alt="" />
    <h3 class="text-2xl text-center">
      Bem-vindo ao
      <b
        class="bg-gradient-to-r from-green-300 to-green-400 text-transparent bg-clip-text"
      >
        Saving Energy
      </b>
    </h3>
    <span class="text-center text-zinc-500">
      Preencha o formulário abaixo para acessar o sistema
    </span>

    <form class="px-10 md:px-20">
      <label class="block text-gray-700 text-start mt-10"><b>E-mail</b></label>
      <input
        v-model="email"
        type="email"
        class="w-full border p-2 rounded-lg"
        :class="{ 'border-red-500': errors.email }"
      />
      <p v-if="errors.email" class="text-red-500 text-sm mt-1">
        {{ errors.email }}
      </p>

      <label class="block text-gray-700 mt-5"><b>Senha</b></label>
      <input
        v-model="password"
        placeholder="******"
        type="password"
        class="w-full border p-2 rounded-lg"
        :class="{ 'border-red-500': errors.password }"
      />
      <p v-if="errors.email" class="text-red-500 text-sm mt-1">
        {{ errors.password }}
      </p>
      <div class="flex w-full justify-end mt-2">
        <span class="text-end text-zinc-600">Esqueceu a senha?</span>
      </div>

      <button
        type="button"
        @click="onSubmit()"
        class="py-3 px-5 from-zinc-700 to-zinc-900 rounded-lg text-white w-full hover:from-green-300 hover:to-green-500 bg-gradient-to-r mt-5"
      >
        <b>ENTRAR</b>
      </button>
      <div class="flex justify-center mt-5">
        <nuxt-link to="create-account">
          <h3 class="hover:text-green-300 cursor-pointer">Criar nova conta</h3>
        </nuxt-link>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
  email: yup
    .string()
    .email("E-mail inválido")
    .required("O e-mail é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("A senha é obrigatória"),
});

const { defineField, handleSubmit, errors } = useForm({
  validationSchema: schema,
});

const [email] = defineField("email");
const [password] = defineField("password");

const body = computed(() => {
  return {
    email: email.value,
    password: password.value,
  };
});

const { data, status, execute } = useFetch("/api/login", {
  immediate: false,
  method: "post",
  body,
  watch: false,
});
const onSubmit = handleSubmit((values) => {
  execute();
});
</script>

<style scoped></style>
