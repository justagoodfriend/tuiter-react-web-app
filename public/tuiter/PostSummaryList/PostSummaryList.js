import PostSummaryListItem from "./PostSummaryItem.js";
import posts from "./posts.js"

const PostSummaryList = () => {
    return (`
    <ul class="list-group">
    ${
        posts.map( e => {
            return( PostSummaryListItem(e))
        }).join(' ')
    }
    </ul>
    `)
}

export default PostSummaryList;