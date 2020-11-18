<template>
<div class="Newbooking container">
    <div class="row" style="margin:1rem 0rem 3rem 0rem">
        <div style="margin-left:auto">
            <router-link to="/"><button class="btn btn-secondary button">Home ></button></router-link>
            <router-link to="Newbooking"><button class="btn btn-secondary button">Add Booking</button></router-link>
        </div>
    </div>

    <div class="inputField container"  style="">
        <h3 style="text-align:left">Add Room Booking</h3>
<form action="" method="post" @submit.prevent="send">
  <div class="row firstNameInput">
    <div class="col-md-6 mb-3">
      <!-- <label for="validationDefault01">First name</label> -->
      <input type="text" class="form-control" id="validationDefault01" placeholder="First name"  v-model="info.firstName" required>
    </div>
    <div class="col-md-6 mb-3">
      <!-- <label for="validationDefault02">Last name</label> -->
      <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" v-model="info.secondName" required>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 mb-3">
      <!-- <label for="validationDefault03">Mobile number</label> -->
      <input type="number" class="form-control" id="validationDefault03" placeholder="Mobile Number" v-model="info.mobile" required>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <!-- <label for="validationDefault03">Email</label> -->
      <input type="text" class="form-control" id="validationDefault03" placeholder="Email" v-model="info.email" required>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 mb-3">
      <!-- <label for="validationDefault04">Gender</label> -->
      <input type="text" class="form-control" id="validationDefault04" placeholder="State" v-model="info.state" required>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <!-- <label for="validationDefault04">City</label> -->
      <input type="text" class="form-control" id="validationDefault04" placeholder="city" v-model="info.city" required>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
  </div>
<div class="row">
    <div class="col-md-6 mb-3">
      <!-- <label for="validationDefault03">Mobile number</label> -->
      <input type="date" class="form-control" id="validationDefault03" placeholder="Arrive" v-model="info.arrive" required>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <!-- <label for="validationDefault04">City</label> -->
      <input type="date" class="form-control" id="validationDefault04" placeholder="Depart" v-model="info.depart" required>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 mb-3">
      <!-- <label for="validationDefault03">Mobile number</label> -->
      <input type="number" class="form-control" id="validationDefault03" placeholder="No of Persons" v-model="info.noOfPersons" required>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <!-- <label for="validationDefault04">City</label> -->
      <input type="text" class="form-control" id="validationDefault04" placeholder="Room Type" v-model="info.roomType" required>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
    </div>
</div>
</template>

<style scoped>
.button{
    background-color: rgb(214, 207, 207) !important;
    border:none;
    border-radius: 2rem;
    color:grey
}
.inputField{
    background-color: white;
}
.Form{
    width:10px
}
input{
    border-top:none;
    border-left:none;
    border-right:none;
    margin-bottom: 3rem;
}
.AddressInput{
    margin-top: 5rem;
}
.firstNameInput{
    margin-top:4rem
}
</style>


<script>
import axios from 'axios'
import sweetalert from 'sweetalert'
export default {
  data(){
    return{
      info:{
        firstName: '',
        secondName: '',
        mobile: '',
        email: '',
        state: '',
        city: '',
        arrive: '',
        depart: '',
        noOfPersons: '',
        roomType: '',
      }
    }
  },
  methods:{
    send(){
       axios.post("https://hotel-management-8186b.firebaseio.com/hotel-management-8186b.json", 
       this.info
       )
       .then(res=> {
        console.log(res);
        this.info ={}
        // alert("Submitted");
      swal({
          title: "Good job!",
          text: "Booking successful!",
          icon: "success",
          button : false,
          timer : 5000
      });
        this.$router.push("/Viewbooking")
       })
       .catch(error=>{
         console.log(error)
         alert("something went Wrong");
       });
    }
   
  }
}
</script>