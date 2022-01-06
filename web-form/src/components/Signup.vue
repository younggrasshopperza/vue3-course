<template>
  <form>
      <label>Email:</label>
      <input type="email" v-model="email" required>

      <label>Password:</label>
      <input type="password" v-model="password" required>

      <label>Role:</label>
      <select v-model="role" required>
          <option value="Tech Lead">Tech Lead</option>
          <option value="Developer">Developer</option>
          <option value="Business Analyst">Business Analyst</option>
          <option value="Project Manager">Project Manager</option>
      </select>

      <div class="terms">
          <input type="checkbox" v-model="terms" required>
          <label>Accept Terms and Conditions</label>
      </div>

      <div>
          <input type="checkbox" value="Xolani" v-model="names">
          <label>Xolani</label>
      </div>
      <div>
          <input type="checkbox" value="Palesa" v-model="names">
          <label>Palesa</label>
      </div>
      <div>
          <input type="checkbox" value="Brandon" v-model="names">
          <label>Brandon</label>
      </div>
  </form>

  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms and Conditions: {{ terms }}</p>
  <p>Names: {{ names }}</p>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            role: "",
            terms: false,
            names: []
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
input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
</style>