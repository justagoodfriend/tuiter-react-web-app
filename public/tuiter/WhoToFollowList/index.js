import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
    <ul class="list-group">
    ${
        who.map( e => {
            return( WhoToFollowListItem(e))
        }).join(' ')
    }
    </ul>
    `)
}

export default WhoToFollowList