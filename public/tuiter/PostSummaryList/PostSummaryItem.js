const PostSummaryListItem = (listitem) => {
    return (`

    <div class="container py-2 border border-secondary">
        <div class="row text-wrap">
            <div class="col-9">
                ${listitem.topic == '' ? '': `<span class="wd-light-gray"> ${listitem.topic}</span> <br/>` }
                ${listitem.userName  != '' ? `<span class="wd-font-main align-middle">${listitem.userName}</span>  <i class="fa-solid fa-check"></i>` : ''} <span class="wd-light-gray"> - ${listitem.time}</span> <br/>
                ${listitem.title ? `<span class="wd-font-main align-middle">${listitem.title}</span> <br/>`: '' }
                <span class="wd-light-gray align-middle">${listitem.tweets ?  `${listitem.tweets} Tweets` : ''}</span>
            </div>
            <div class="col-3"> 
                <img width="100px" height="100px" class="wd-image-rounded mr-4"src=${listitem.image} alt="Daniel" style="float: right">
            </div>
        </div>
    </div>  

    `)
}
export default PostSummaryListItem