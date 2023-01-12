

const  push = document.querySelectorAll(".colors button");


push.forEach(item => 
    {
        item.addEventListener("click", function(){
            const pushslectedId = this.id;
            document.body.className = pushslectedId;
        })
    });

console.log(push)