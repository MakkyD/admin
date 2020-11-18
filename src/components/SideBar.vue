<template>
    <div class="sideBar">
        <img src="assets/images/testimonial1.jpg" class="profileImg">
        <div class="profileText">
            <h3>Amaka Ibiam</h3>
            <p>Manager</p>
        </div>
        <div class="sidebar-menu">
           <ul>
        <li><h3>--Main</h3></li>
        <li><router-link to="/"><i class="fa fa-dashboard"></i> <span>Dashboard</span></router-link></li>
        <li>
                <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-briefcase"></i> <span>Bookings</span></a>
                    <div class="dropdown-menu">
                        <router-link to="Newbooking" class="dropdown-item" href="#">New Booking</router-link>
                        <router-link to="Viewbooking" class="dropdown-item" href="#">View Booking</router-link>
                    </div>
                </div>
        </li>
        <li>
                <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-key"></i> <span>Room</span></a>
                    <div class="dropdown-menu">
                        <router-link to="Roomdetails" class="dropdown-item" href="#">Add Rooms</router-link>
                        <router-link to="ViewRooms" class="dropdown-item" href="#">View All Rooms</router-link>
                    </div>
                </div>
        </li>
    </ul> 
        </div>
    

        <!-- <li class="submenu">
							<a href="#" class="subdrop"><i class="fa fa-user"></i> <span> Employees </span> <span class="menu-arrow"></span></a>
							<ul style="display: block;">
								<li><a href="employees.html">Employees List</a></li>
								<li><a href="leaves.html">Leaves</a></li>
								<li><a href="holidays.html">Holidays</a></li>
								<li><a href="attendance.html">Attendance</a></li>
                                
							</ul>
						</li> -->
    </div>
</template>

<style scoped>

.sidebar-menu > ul > li {
    position: relative;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
.sidebar-menu ul {
    font-size: 14px;
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.sidebar-menu li a:hover {
    color: #009efb;
}
.sidebar-menu > ul > li > a {
    padding: 12px 20px;
    align-items: center;
    display: flex;
    justify-content: flex-start;
    position: relative;
    transition: all 0.2s ease-in-out 0s;
}
.sidebar-menu li a {
    color: #888;
    /* display: block; */
    font-size: 15px;
    height: auto;
    /* padding: 0 20px; */
}
a:hover, a:active, a:focus {
    text-decoration: none;
    /* color: #009ce7; */
    outline: none;
}
.sidebar-menu ul li a i {
    align-items: center;
    display: inline-flex;
    font-size: 18px;
    min-height: 24px;
    line-height: 18px;
    width: 20px;
    transition: all 0.2s ease-in-out 0s;
}
.fa {
    /* display: inline-block; */
    font: normal normal normal 14px/1 FontAwesome;
    /* font-size: inherit; */
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    /* -moz-osx-font-smoothing: grayscale; */
}
.sidebar-menu li a:hover {
    color: #009efb;
}.sidebar-menu li a.subdrop .menu-arrow {
    /* -ms-transform: rotate(90deg); */
    /* -webkit-transform: rotate(90deg); */
    /* -o-transform: rotate(90deg); */
    transform: rotate(90deg);
}
.sidebar-menu .menu-arrow {
    /* -webkit-transition: -webkit-transform 0.15s; */
    /* -o-transition: -o-transform 0.15s; */
    transition: transform .15s;
    position: absolute;
    right: 15px;
    /* display: inline-block; */
    font-family: 'FontAwesome';
    text-rendering: auto;
    /* line-height: 40px; */
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    /* -moz-osx-font-smoothing: grayscale; */
    /* -webkit-transform: translate(0, 0); */
    /* -ms-transform: translate(0, 0); */
    /* -o-transform: translate(0, 0); */
    /* transform: translate(0, 0); */
    line-height: 18px;
    top: 15px;
}
</style>

