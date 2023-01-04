// 圓點跟蹤
	// var cursor = document.getElementById("cursor");
 //       document.addEventListener("mousemove",function(e){
 //           	var x = e.clientX - 25;
 //           	var y = e.clientY - 25;
 //              cursor.style.transform = `translate(${x}px , ${y}px)`;
 //       });
     
// 原點跟蹤 新版
       const cursor = document.documentElement;
       cursor.addEventListener("mousemove", (e) => {
              cursor.style.setProperty('--x', e.clientX + "px");
              cursor.style.setProperty('--y', e.clientY + "px");
       });


// 視覺差 舊版
       // window.addEventListener("scroll", ()=>{   
       //        const bgId = document.getElementsByClassName("bg").length + 1;
       //        const scrollPositionY = window.pageYOffset;
       //        const scroll = 'scroll0';
       //        for(let i = 1; i <= bgId; i++) {
       //               eval(`const ${scroll + i} = document.getElementById("${scroll + i}");`);
       //               eval(`var speed = ${scroll + i}.dataset.speed`);
       //               eval(`${scroll + i}.style.transform = 'translateY(${scrollPositionY * speed  * 0.01}px)'`);
       //        };
       // });
// 視覺差 新版   
       let layers = document.querySelectorAll(".scroll-layers");
       let speed;
       let yPos;
       window.addEventListener("scroll",(e) => {
              let formTop = this.pageYOffset;

              for(let layer of layers){
                     speed = layer.getAttribute('speed');
                     yPos = -(formTop * speed) * 0.01;
                     layer.style.transform = `translateY(${yPos}px)`;
              }
       });

// 按鈕  
       const submit = document.getElementById("submit");
       const airShip = document.getElementById("airShip");
       const marqueee = document.getElementById("marqueee");
       const EasterEgg = document.getElementById("EasterEgg");
       const EasterEgg2 = document.getElementById("EasterEgg02");
       const plasterStatue = document.getElementById('plasterStatue')
       const menuBtn = document.getElementById('menuBtn');
       const infoBtn = document.getElementById('moreInfo');
       infoBtn.addEventListener("click", () => {
              alert("這裡沒有寫!!! 我不懂你點這要做甚麼??");
       });
       marqueee.addEventListener("click", () => {
              alert("跑馬燈燈燈燈燈燈燈~~~~~~~~");
       });
       menuBtn.addEventListener("click", () => {
              alert("我知道你很想點開來看，但我沒有寫:P");
       });
       plasterStatue.addEventListener("click", () => {
              alert("我只是個石膏像而已，別點我!!");
       });
       airShip.addEventListener("click", () => {
              alert("ㄟ 幹飛船ㄟ!! 蟑螂這可以養嗎?");
       });
       EasterEgg.addEventListener("click", () =>{
              alert("你找到了一個我精心製作的彩蛋，但是這就只是顆透明按鈕而已!!")
       });
       EasterEgg2.addEventListener("click", () =>{
              alert("那個我好像忘了每台尺寸都不一樣，算了看之後再刪除好了，我寫了一堆沒意義的程式碼!!喔~耶!!我發瘋了!!!!!!!!")
       });
       submit.addEventListener("click", () =>{
              alert("信件已送出")
       });
// btn 作品集
       const Details = document.querySelector(".Details");
       const x = document.querySelector(".x");
       const pth = document.getElementById("pth"); 
       const pp = document.getElementById("pp"); 
       const btn01 = document.getElementById("btn01"); 
       const btn02 = document.getElementById("btn02");
       const btn03 = document.getElementById("btn03");
       const btn04 = document.getElementById("btn04");
       const btn05 = document.getElementById("btn05");
       const btn06 = document.getElementById("btn06");
       x.addEventListener("click", () =>{
              Details.style.display = "none";
       });
        Details.addEventListener("click", () =>{
              Details.style.display = "none";
       });
       btn01.addEventListener("click", () =>{
              pth.textContent = "作品名稱:哥吉拉";
              pp.textContent = "這是來治哥吉拉毀面世界的一幅作品，目的是為了繳作業而話的，目前對於畫面的排版還有待加強";
              Details.style.display = "flex";
       });
       btn02.addEventListener("click", () =>{
              pth.textContent = "作品名稱:EVA";
              pp.textContent = "這是來自於一部動畫的機器人，名為新世紀福音戰士中的EVA，故事講述人類被敵人入侵，而展開的對決!";
              Details.style.display = "flex";
       });
       btn03.addEventListener("click", () =>{
              pth.textContent = "作品名稱:老屋";
              pp.textContent = "靈感來自於中國建築，最近看了港片，覺得裡面的酒樓很好看，又覺得這種建築在台灣很少見，就想話來當作練習";
              Details.style.display = "flex";
       });
       btn04.addEventListener("click", () =>{
              pth.textContent = "作品名稱:爆肝的人";
              pp.textContent = "這是我在房間裡，努力趕著圖，為了在期中繳出一個像樣的作品，而努力爆肝的場景，目的是為了讓老師知道我很努力的做作業(其實是為了玩更安心一點而努力 :D";
              Details.style.display = "flex";
       });
       btn05.addEventListener("click", () =>{
              pth.textContent = "作品名稱:本田CB1000R";
              pp.textContent = "當時的我才考到駕照不到幾個月，騎過機車也沒多少次，也不會打檔，就幻想著能騎一台本田的重機，但是我沒有那麼多的$$，所以我只能畫一台來安慰自己";
              Details.style.display = "flex";
       });
       btn06.addEventListener("click", () =>{
              pth.textContent = "作品名稱:New balance";
              pp.textContent = "當時畫這張的時候是想說，我也該換個鞋子了，就上網找了一雙看起來還不錯的鞋子，但是他沒有我要的大小，所以我就只能畫來觀賞了QAQ";
              Details.style.display = "flex";
       });