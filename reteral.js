

        const itsMe = {
            name : "jungjieun",
            age : 20,
            sentence: "저는" + this.name + "입니다", 
            //itsMe.name (x) this.name(o)
            test: `저는 ${this.name}입니다`, 
            //템플릿리터럴 `문법`(백틱)
            //adult 는 key, 
            adult: function(){
                if(this.age>=20){
                    console.log("나는 성인이야");
                }else {
                    console.log("나는 아직 성인이 아니야");
                }
            }
        };
        
        itsMe.adult();
        //itsMe안에 adult()라는 함수를 호출

        itsMe.myName = function(){
            console.log("저는" + itsMe.name +"입니다");
        }
        //itsMe.name (o) this.name(o)

        itsMe.myName();

//------------복습하기--------------------

console.log(itsMe.name);
console.log(itsMe['name']);

const MyFavourite = {
    movie : ["헤어질 결심","캐롤","이파네마소년"],
    song : ["현실의 현실","part2","exile"],
    color : ["black","green"],
    Favourite:function(num){
    console.log("내 최애 영화는 "+MyFavourite.movie[num]+"입니다.");
    console.log("제 최애 노래는 "+MyFavourite.song[num]+"이다.");
    }

}
MyFavourite.Favourite(0);


