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

      <label>Skills:</label>
      <!-- Type the skill then hold down alt and press ',' at the same time to add the skill -->
      <input type="text" v-model="tempSkill" @keyup.alt="addSkill">
      <div class="pill" v-for="skill in skills" :key="skill">
          <span @click="deleteSkill(skill)">{{ skill }}</span>
      </div>
        

      <div class="terms">
          <input type="checkbox" v-model="terms" required>
          <label>Accept Terms and Conditions</label>
      </div>
  </form>

  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms and Conditions: {{ terms }}</p>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            role: "",
            terms: false,
            tempSkill: '',
            skills: []
        }
    },
    methods: {
        // e represents the event object, when an event happens. When a user types
        addSkill(e) {
            if(e.key === "," && this.tempSkill) {
                // Check if the skill already exists
                if(!this.skills.includes(this.tempSkill)) {
                    this.skills.push(this.tempSkill);  
                }
              this.tempSkill = "";
            }
        },
        deleteSkill(skill) {
            this.skills = this.skills.filter(item => {
                // returns values where only values where the skill does not match the skill that was selected
                return skill !== item
            });
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