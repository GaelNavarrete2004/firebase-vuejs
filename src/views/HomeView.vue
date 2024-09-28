<template>
  <div class="container">
    <Navbar />
    <!-- ////////// formulario Añadir ////////// -->
    <!-- Nombre -->
    <div class="container my-4">
      <form class="p-4 border rounded shadow-sm bg-light">
        <!-- Nombre -->
        <div class="mb-3">
          <label class="form-label">Nombre</label>
          <input v-model="usuario.nombre" type="text" class="form-control" />
        </div>
        <!-- Correo -->
        <div class="mb-3">
          <label class="form-label">Correo</label>
          <input v-model="usuario.correo" type="email" class="form-control" />
        </div>
        <!-- Botón Guardar -->
        <div class="d-grid gap-2">
          <button @click.prevent="agregarDato" class="btn btn-primary">
            Guardar
          </button>
        </div>
      </form>
    </div>
    <!-- ////////// tabla ////////// -->
    <table class="table table-striped table-hover mt-4">
      <thead class="table-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nombre</th>
          <th scope="col">Correo</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in usuarios" :key="index">
          <th scope="row">{{ index }}</th>
          <td>{{ item.nombre }}</td>
          <td>{{ item.correo }}</td>
          <td>
            <button
              @click.prevent="eliminarDato(item.id)"
              class="btn btn-danger btn-sm"
            >
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore/lite";
import { db } from "../main";
import router from "../router/index";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  data() {
    return {
      usuarios: [],
      usuario: {
        nombre: "",
        correo: "",
      },
    };
  },
  methods: {
    async obtenerDatos() {
      const querySnapshot = await getDocs(collection(db, "usuarios"));
      querySnapshot.forEach((doc) => {
        let usuario = doc.data();
        usuario.id = doc.id;
        this.usuarios.push(usuario);
        console.log(usuario);
      });
    },
    async agregarDato() {
      const docRef = await addDoc(collection(db, "usuarios"), {
        nombre: this.usuario.nombre,
        correo: this.usuario.correo,
      })
        .then(() => {
          router.go("/");
          console.log("Documento añadido");
        })
        .catch(function (error) {
          console.error("Error al añadir el documento: ", error);
        });
    },
    // DELETE / ELIMINAR / BORRAR
    async eliminarDato(id) {
      await deleteDoc(doc(db, "usuarios", id));
      router.go("/");
    },
  },
  mounted() {
    this.obtenerDatos();
  },
};
</script>
