<template>
<div class="Newbooking container">
    <div class="row" style="margin:2rem 0rem 3rem 0rem">
        <div style="margin-left:auto">
            <router-link to="/"><button class="btn btn-secondary button">Home ></button></router-link>
            <router-link to="Newbooking"><button class="btn btn-secondary button">Add Booking ></button></router-link>
        </div>
    </div>

    <div class="inputField container table-responsive" v-if="viewBooking" >
        <h3 style="text-align:left">Bookings</h3>
       <table class="table">
  <thead>
    <tr>
      <th scope="col">S/N</th>
      <th scope="col">F_name</th>
      <th scope="col">Last_name</th>
      <th scope="col">Mobile</th>
      <th scope="col">Email</th>
      <th scope="col">State</th>
      <th scope="col">City</th>
      <th scope="col">Arrive</th>
      <th scope="col">Depart</th>
      <th scope="col">No Of Persons</th>
      <th scope="col">Room Type</th>
      <th scope="col">Payment</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for= "(booking, index) in bookings" :key="index">
      <th scope="row"> {{parseInt(index) +1}} </th>
      <td>{{booking.firstName}}</td>
      <td>{{booking.secondName}}</td>
      <td>{{booking.mobile}}</td>
      <td>{{booking.email}}</td>
       <td>{{booking.state}}</td>
       <td>{{booking.city }}</td>
      <td>{{booking.arrive}}</td>
      <td>{{booking.depart}}</td>
       <td>{{booking.noOfPersons}}</td>
      <td>{{booking.roomType}}</td>
      <td><button class="btn btn-success">Paid</button></td>
      <td>
        <button class="btn btn-secondary actionButton2" @click="edit(booking)"><i class="fa fa-edit"></i></button>
        <Button class="btn btn-danger actionButton" @click="remove(booking.id)"><i class="fa fa-trash"></i></Button>
      </td>
    </tr>
  </tbody>
</table>
    </div>


<div class="inputField container" v-else>
        <h3 style="text-align:left">Edit Booking</h3>
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
  <button class="btn btn-warning" type="submit" style="color:white" @click="update(info.id)">Update</button>
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
      },
      bookings: [],
      viewBooking: true,
      // editPage: false
    }
  },
  created(){
    this.getAllPost();
  },
  methods:{
    getAllPost(){
      axios.get("https://hotel-management-8186b.firebaseio.com/hotel-management-8186b.json",)
      .then(res=>{
        const data = res.data;
        for(let key in data){
          const post =data[key];
          post.id = key;
          this.bookings.unshift(post);
          console.log(res);
        }
      })
      .catch(error => {
          console.log(error);
        });
    },
    remove(i) {
      axios.delete(`https://hotel-management-8186b.firebaseio.com/hotel-management-8186b/${i}.json`)
        .then(res => {
          const projectIndex = this.bookings.findIndex(p => p.id === i)
          this.bookings.splice(projectIndex, 1)

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
      this.viewBooking= false,
      // this.editPage=true
      this.info = id;
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
        .put(`https://hotel-management-8186b.firebaseio.com/hotel-management-8186b/${i}.json`,
          this.info
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