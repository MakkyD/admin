<template>
    <div class="">
        <!-- <div class="col-sm-3" style="background-color:blue">
             <i class="fa fa-book"></i>
        </div>
        <div class="col-sm-3">
            
            <i class="fa fa-briefcase"></i>
        </div>
        <div class="col-sm-3">
            <i class="fa fa-phone"></i>
        </div>
        <div class="col-sm-3">
            <i class="fa fa-book"></i>
        </div> -->

<div class="row">
                    <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                        <div class="dash-widget">
							<span class="dash-widget-bg1"><i class="fa fa-briefcase" aria-hidden="true"></i></span>
							<div class="dash-widget-info text-right">
								<h3>98</h3>
								<span class="widget-title1">Orders <i class="fa fa-check" aria-hidden="true"></i></span>
							</div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                        <div class="dash-widget">
                            <span class="dash-widget-bg2"><i class="fa fa-book"></i></span>
                            <div class="dash-widget-info text-right">
                                <h3>1072</h3>
                                <span class="widget-title2">Bookings <i class="fa fa-check" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                        <div class="dash-widget">
                            <span class="dash-widget-bg3"><i class="fa fa-phone" aria-hidden="true"></i></span>
                            <div class="dash-widget-info text-right">
                                <h3>72</h3>
                                <span class="widget-title3">inquiry <i class="fa fa-check" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                        <div class="dash-widget">
                            <span class="dash-widget-bg4"><i class="fa fa-heartbeat" aria-hidden="true"></i></span>
                            <div class="dash-widget-info text-right">
                                <h3>618</h3>
                                <span class="widget-title4">Pending <i class="fa fa-check" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <div class="bookingDetails">
                    <h2>Booking Details</h2>
                </div> -->
                
<div class="inputField container"  style="">
        <h3 style="text-align:left; padding:3rem 0rem 2rem 0rem">Bookings</h3>
       <table class="table">
  <thead>
    <tr>
      <th scope="col">S/N</th>
      <th scope="col">Name</th>
      <th scope="col">Mobile</th>
      <th scope="col">Email</th>
      <th scope="col">Arrive</th>
      <th scope="col">Depart</th>
      <th scope="col">Room Type</th>
      <th scope="col">Payment</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>09078876789</td>
      <td>@mdo</td>
      <td>12/05/2020</td>
      <td>12/05/2020</td>
      <td>Presidential suite</td>
      <td><button class="btn btn-success">paid</button></td>
      <td>
        <Button class="btn btn-danger actionButton"><i class="fa fa-trash deleteButton"></i></Button>
        <button class="btn btn-secondary actionButton2 "><i class="fa fa-edit editButton"></i></button>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>09067864457</td>
      <td>@fat</td>
      <td>12/05/2020</td>
      <td>12/05/2020</td>
      <td>Executive Suite</td>
      <td><button class="btn btn-warning unpaid">unpaid</button></td>
      <td>
        <Button class="btn btn-danger actionButton"><i class="fa fa-trash deleteButton"></i></Button>
        <button class="btn btn-secondary actionButton2"><i class="fa fa-edit editButton"></i></button>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>09067788655</td>
      <td>@twitter</td>
      <td>12/05/2020</td>
      <td>12/05/2020</td>
      <td>Standard Suite</td>
      <td><button class="btn btn-warning unpaid">unpaid</button></td>
      <td>
        <Button class="btn btn-danger actionButton"><i class="fa fa-trash deleteButton"></i></Button>
        <button class="btn btn-secondary actionButton2"><i class="fa fa-edit editButton"></i></button>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>09067788655</td>
      <td>@twitter</td>
      <td>12/05/2020</td>
      <td>12/05/2020</td>
      <td>Executive suite </td>
      <td><button class="btn btn-success">paid</button></td>
      <td >
       <Button class="btn btn-danger actionButton"><i class="fa fa-trash deleteButton"></i></Button>
        <button class="btn btn-secondary actionButton2"><i class="fa fa-edit editButton"></i></button>
      </td>
    </tr>
  </tbody>
</table>
    </div>
    </div>
</template>

<style scoped>
.dash-widget{
    background-color: #fff;
    border-radius: 4px;
    margin-bottom: 30px;
    padding: 20px;
    position: relative;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
}
.dash-widget-bg1{
    width: 65px;
    float: left;
    color: #fff;
    display: block;
    font-size: 50px;
    text-align: center;
    line-height: 65px;
    background: #009efb;
    border-radius: 50%;
    font-size: 40px;
    height: 65px;
}
.text-right{
    text-align: right!important;
}
.dash-widget-info > span.widget-title1{
    background: #009efb;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 13px;
    }
.dash-widget-info span i{
        width: 16px;
    background: #fff;
    border-radius: 50%;
    color: #666666;
    font-size: 9px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    margin-left: 5px;
}
.fa{
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    font-size: 3rem
}
.dash-widget-bg2{
    width: 65px;
    float: left;
    color: #fff;
    display: block;
    font-size: 50px;
    text-align: center;
    line-height: 65px;
    background: #55ce63;
    border-radius: 50%;
    font-size: 40px;
    height: 65px;
}
.dash-widget-info > span.widget-title2{
    
    background: #55ce63;    
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 13px;
    }
    .dash-widget-bg3 {
    width: 65px;
    float: left;
    color: #fff;
    display: block;
    font-size: 50px;
    text-align: center;
    line-height: 65px;
    background: #7a92a3;
    border-radius: 50%;
    font-size: 40px;
    height: 65px;
}
.dash-widget-info > span.widget-title3 {
    background: #7a92a3;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 13px;
}
.dash-widget-bg4 {
    width: 65px;
    float: left;
    color: #fff;
    display: block;
    font-size: 50px;
    text-align: center;
    line-height: 65px;
    background: #ffbc35;
    border-radius: 50%;
    font-size: 40px;
    height: 65px;
}
.dash-widget-info > span.widget-title4 {
    background: #ffbc35;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 13px;
}

.button{
    background-color: rgb(214, 207, 207) !important;
    border:none;
    border-radius: 2rem;
    color:grey
}
.Newbooking{
    margin-top:7rem
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
.editButton{
    font-size:15px !important;
}
.deleteButton{
    font-size:15px !important;
}
</style>