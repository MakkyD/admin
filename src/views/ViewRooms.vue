<template>
<div>
    <div class="inputField container table-responsive" v-if="roomDetails">
        <h3 style="text-align:left">Room Details</h3>
       <table class="table">
  <thead>
    <tr>
      <th scope="col">S/N</th>
      <th scope="col">Room Number</th>
      <th scope="col">Room Type</th>
      <th scope="col">AC/Non AC</th>
      <th scope="col">Amount</th>
      <th scope="col">Cancellation charge</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for= "(detail, index) in details" :key="index" >
      <th scope="row">{{parseInt(index) +1}}</th>
      <td>{{detail.Roomnumber}}</td>
      <td>{{detail.Roomtype}}</td>
      <td>{{detail.Ac}}</td>
      <td>{{detail.Amount}}</td>
      <td>{{detail.Cancellation}}</td>
      <td>
        <Button class="btn btn-danger actionButton" @click="remove(details.id)"><i class="fa fa-trash"></i></Button>
        <button class="btn btn-secondary actionButton2 " @click="edit(detail)"><i class="fa fa-edit"></i></button>
      </td>
    </tr>
  </tbody>
</table>
</div>

<div v-else>
  <div class="row" style="margin:1rem 0rem 3rem 0rem">
    <div style="margin-left:auto">
      <router-link to="/"><button class="btn btn-secondary button">Home ></button></router-link>
      <router-link to="ViewRooms"><button class="btn btn-secondary button" @click="viewroom">View Room Details</button></router-link>
    </div>
  </div>
<div class="inputField container">
        <h3 style="text-align:left">Edit Room Details</h3>
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
  <div class="updateButton">
    <button class="btn btn-warning" type="submit" style="margin:0rem 2rem 2rem 0rem" @click="update(Details.id)">Update</button>
  </div>
</div>
  
</form>
    </div>
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
.updateButton{
  margin-top: 2rem;
}

.btn-warning{
  color:white;
  margin-top:2rem;
  padding:1.5%;
  width:9rem;
  font-size:1.5rem;
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
.unpaid{
  background-color: rgb(245, 182, 66);
  border-color:rgb(245, 182, 66);
  color:white 
}
.actionButton{
  border-radius:50%;
}
.actionButton2{
  border-radius:50rem;
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
      },
      details:[],
      roomDetails: true
    }
  },
   created(){
    this.getAllPost();
  },
  methods:{
    getAllPost(){
      axios.get("https://room-details-fcde4.firebaseio.com/room-details-fcde4.json")
      .then(res=>{
        const data = res.data;
        for(let key in data){
          const post =data[key];
          post.id = key;
          this.details.unshift(post);
          console.log(this.details);
        }
      })
      .catch(error => {
          console.log(error);
        });
    },
    remove(i) {
      axios.delete(`https://room-details-fcde4.firebaseio.com/room-details-fcde4/${i}.json`)
        .then(res => {
          const projectIndex = this.details.findIndex(p => p.id === i)
          this.details.splice(projectIndex, 1)

           swal({
          title: "Are you sure you want to delete?",
          text: "Once deleted, file is irrecoverable!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            swal("file has been deleted!", {
              icon: "success",
            });
          } else {
            swal("Your file is safe!");
          }
        });
        })
        .catch(err => {
          console.log(err); 
        });
    },
    edit(id){
      this.roomDetails= false;
      this.Details= id
    },
    viewroom(){
      this.roomDetails= true;
    },
     reload() {
      var timeout = setTimeout("location.reload(true);", 1000);
      function resetTimeout() {
        clearTimeout(timeout);
        timeout = setTimeout("location.reload(true", 1000);
      }
    },
      update(i) {
      axios
        .put(`https://room-details-fcde4.firebaseio.com/room-details-fcde4/${i}.json`,
          this.Details
        )
        .then(
          function(res) {
            console.log(res);

            swal({
                  title: "Good job!",
                  text: "Update successful!",
                  icon: "success",
                  button : false,
                  timer : 7000
                });
          },
          function(error) {
            console.log(error);
          }
        );
      this.reload();
    }
  }
}
</script>