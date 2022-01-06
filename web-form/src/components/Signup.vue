<template>
  <form>
      <label>Email:</label>
      <input type="email" v-model="email">

      <label>Password:</label>
      <input type="password" v-model="password">

      <label>Role:</label>
      <select v-model="role">
          <option value="Tech Lead">Tech Lead</option>
          <option value="Developer">Developer</option>
          <option value="Business Analyst">Business Analyst</option>
          <option value="Project Manager">Project Manager</option>
      </select>
  </form>

  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            role: ""
        }
    }
}
</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
</style>