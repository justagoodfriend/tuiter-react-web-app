const NavigationSidebar = () => {
    return(`

        <ul class="list-group">
        <li class="list-group-item">
        <a href="/" class="fab fa-twitter d-sm-block wd-underline" style="color:white"></a>
        </li>

        <li class="list-group-item">
            <div class="row">
                <div class="col-3"><a href="home.html" class="fa-solid fa-house wd-underline" style="color:white"></a> </div>       
                <div class="col-9 d-sm-none d-md-block d-md-none d-lg-block d-lg-none d-xl-block">Home</div>
            </div>
        </li>

        <li class="list-group-item active">
            <div class="row">
                <div class="col-3"><a href="home.html" class="fa-solid fa-hashtag wd-underline" style="color:white"></a> </div>       
                <div class="col-9 d-sm-none d-md-block d-md-none d-lg-block d-lg-none d-xl-block">Explore</div>
            </div>
        </li>

        <li class="list-group-item">
            <div class="row">
                <div class="col-3"><a href="home.html" class="fa-solid fa-bell  wd-underline" style="color:white"></a> </div>       
                <div class="col-9 d-sm-none d-md-block d-md-none d-lg-block d-lg-none d-xl-block">Notifications</div>
            </div>
        </li>

        <li class="list-group-item">
            <div class="row">
                <div class="col-3"><a href="home.html" class="fa-solid fa-envelope wd-underline" style="color:white"></a> </div>       
                <div class="col-9 d-sm-none d-md-block d-md-none d-lg-block d-lg-none d-xl-block">Messages</div>
            </div>
        </li>

        <li class="list-group-item">
            <div class="row">
                <div class="col-3"><a href="home.html" class="fa-solid fa-bookmark wd-underline" style="color:white"></a> </div>       
                <div class="col-9 d-sm-none d-md-block d-md-none d-lg-block d-lg-none d-xl-block">Bookmarks</div>
            </div>
        </li>

        <li class="list-group-item">
            <div class="row">
                <div class="col-3"><a href="home.html" class="fa-solid fa-list wd-underline" style="color:white"></a> </div>       
                <div class="col-9 d-sm-none d-md-block d-md-none d-lg-block d-lg-none d-xl-block">Lists</div>
            </div>
        </li>

        <li class="list-group-item">
            <div class="row">
                <div class="col-3"><a href="home.html" class="fa-solid fa-ellipsis wd-underline" style="color:white"></a> </div>       
                <div class="col-9 d-sm-none d-md-block d-md-none d-lg-block d-lg-none d-xl-block">Profile</div>
            </div>
        </li>
    </ul>

      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `);
}
export default NavigationSidebar;
