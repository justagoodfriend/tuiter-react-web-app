import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
        <div class="row">
            <div class="container pb-3">
                <div class="row">
                    <div class="col-lg-10 col-md-10 col-sm-9 border border-secondary wd-rounded-corners gap-2 pt-1">
                        <i class="fa-solid fa-magnifying-glass img-fluid"></i>
                        <span class="m-4 wd-light-gray"> Search Tuiter </span>  </div>
                    <div class="col">
                        <a href="explore-settings.html" class="fa fa-cog fa-2x wd-underline"> </a>
                    </div>
                </div>
            </div>
        </div>

        <ul class="nav mb-2 nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="new.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html" tabindex="-1">Sports</a>
            </li>
            <li class="nav-item d-sm-none d-md-block">
                <a class="nav-link" href="entertainment.html" tabindex="-1">Entertainment</a>
            </li>
        </ul>

        <div class="pt-4 wd-parent-relative">
            <img class="img-fluid" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"> 
            <h1 class="wd-bottom-left">SpaceX's Starship</h1>
        </div>
        ${PostSummaryList()}


    `);
}
export default ExploreComponent;
