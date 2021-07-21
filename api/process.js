const imageLink = ["https://cdn.statically.io/img/kcast/cdn-image.komikcast.com/wp-content/img/B/Black-Clover/300/001.jpg",
                        "https://cdn.statically.io/img/kcast/cdn-image.komikcast.com/wp-content/img/B/Black-Clover/300/002.jpg",
                        "https://cdn.statically.io/img/kcast/cdn-image.komikcast.com/wp-content/img/B/Black-Clover/300/003.jpg",
                        "https://cdn.statically.io/img/kcast/cdn-image.komikcast.com/wp-content/img/B/Black-Clover/300/004.jpg",
                        "https://cdn.statically.io/img/kcast/cdn-image.komikcast.com/wp-content/img/B/Black-Clover/300/005.jpg",
                        "https://cdn.statically.io/img/kcast/cdn-image.komikcast.com/wp-content/img/B/Black-Clover/300/006.jpg",
                        "https://cdn.statically.io/img/kcast/cdn-image.komikcast.com/wp-content/img/B/Black-Clover/300/007.jpg"];

var dataList = [{
    status: 200
}];

const maptoObject = (link)=>{
    for(let i = 0; i < link.length; i++){
        dataList.push({
            page: i+1,
            image: link[i]
        });
    }
    console.log(dataList);
    return dataList;
}

module.exports = maptoObject(imageLink);
