<template>
<div class="Newbooking container">
    <div class="row" style="margin:2rem 0rem 3rem 0rem">
        <div style="margin-left:auto">
            <router-link to="/"><button class="btn btn-secondary button">Home ></button></router-link>
            <router-link to="Newbooking"><button class="btn btn-secondary button">Add Room Details</button></router-link>
        </div>
    </div>

    <div class="inputField container"  style="">
        <h3 style="text-align:left">Add Room Details</h3>
        <form action="" method="post" @submit.prevent="send">
  <div class="row firstNameInput">
    <div class="col-md-6 mb-3">
      <!-- <label for="validationDefault01">First name</label> -->
      <input type="text" class="form-control" id="validationDefault01" placeholder="Room Number"  required v-model="Details.Roomnumber">
    </div>
    <div class="col-md-6 mb-3">
      <!-- <label for="validationDefault02">Last name</label> -->
      <input type="text" class="form-control" id="validationDefault02" placeholder="Room Type" required v-model="Details.Roomtype">
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 mb-3">
      <!-- <label for="validationDefault03">Email</label> -->
      <select name="" id="" class="form-control" v-model="Details.Ac" >
        <option selected disabled placeholder="AC/NonAc">Please select if AC / Non Ac Room</option>
        <option value="AC">AC</option>
        <option value="Non/Ac">Non AC</option>
      </select>
      <!-- <input type="text" class="form-control" id="validationDefault03" placeholder="AC/Non AC"  required v-model="Details.Ac"> -->
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <!-- <label for="validationDefault03">Mobile number</label> -->
      <input type="number" class="form-control" id="validationDefault03" placeholder="Cancellation Charges"  required v-model="Details.Cancellation">
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
  </div>
  <div>
    <div class="col-md-6 mb-3">
      <!-- <label for="validationDefault03">Mobile number</label> -->
      <input type="number" class="form-control" id="validationDefault03" placeholder="Amount"  required v-model="Details.Amount">
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
  </div>
  <div class="picture">
    <div class="col-md-6 mb-3">
      <label for="validationDefault04" >Upload Room Photo</label>
      <input type="file" class="form-control" id="validationDefault04" placeholder="Room Type"  required>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
  </div>
<div>
  <div>
    <textarea name="" id="" cols="110" rows="10" placeholder="Description" v-model="Details.Description"></textarea>
  </div>
    <button class="btn btn-primary" type="submit" style="margin:0rem 2rem 2rem 0rem">Submit</button>
  <button class="btn btn-danger" type="submit" style="margin:0rem 2rem 2rem 0rem">Cancel</button>
</div>
  
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
select{
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
export default {
  data(){
    return{
      Details:{
        Roomnumber: '',
        Roomtype: '',
        Ac: '',
        Amount: '',
        Cancellation: '',
        Description: '',
      }
     
    }
  },
  methods:{
    send(){
      axios.post("https://room-details-fcde4.firebaseio.com/room-details-fcde4.json", 
      this.Details)
      .then(res=>{
        console.log(res);
        this.Details ={}
        // alert("Submitted");
        this.$router.push("/ViewRooms")

        swal({
          title: "Good job!",
          text: "Room details added successful!",
          icon: "success",
          button : false,
          timer : 5000
      });
      })
      .catch(error=>{
         console.log(error)
         alert("something went Wrong");
       });
    }
  }
}
</script>