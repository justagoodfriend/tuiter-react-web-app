
const WhoToFollowListItem  = (who) => {
return (`
<li class="list-group-item">
<div class="">
    <div class="row">
        <div class="col-3">
            <img width="48px" height="48px" class="mx-0 wd-image-rounded" src="../../images/${who.avatarIcon}"> 
        </div>
        <div class="col-5">
            <span class="wd-font-main">${who.userName}</span> <i class="fa-solid fa-check"></i> <br/>
            <span class="wd-light-gray">@${who.handle}</span>
        </div> 
        <div class="col-4 pr-0"> 
            <button class="btn btn-primary btn-block rounded-pill wd-round-buttons text-center" style="width:100%"> Follow</button> 
        </div>
    </div>
</div>
</li>
`)


}

export default WhoToFollowListItem