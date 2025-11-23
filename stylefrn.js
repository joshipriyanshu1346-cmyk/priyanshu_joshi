// // let box=document.querySelector('#box')
// // let btn=document.querySelector('button')
// // let body=document.querySelector('body')

// // body.style.backgroundColor='black'
// // btn.addEventListener('click',function(){
// //     let c1=Math.floor(Math.random()*256)
// //     let c2=Math.floor(Math.random()*256)
// //     let c3=Math.floor(Math.random()*256)
// //     box.style.background=`rgb(${c1},${c2},${c3})`
// //     // console.log();
// //     // (box.style.background='rgb(`${c1},${c2},${c3}`)')
    
// // })
// // let arr=['a','b','c','d','e','f','g']

// let btn=document.querySelector('button')
// let h2=document.querySelector('h2')
// let p=document.querySelector('p')

// let arr1=[
//     {
//         team:'CSK',
//         primary:'yellow',
//         secondary:'blue',
//         fullname:'Chenaai Super King',
//         trophies:5,
//         caption:'MSD'
//     },
//     {
//         team:'RCB',
//         primary:'red',
//         secondary:'black',
//         fullname:'Royal Challengers Bengaluru',
//         trophies:1,
//         caption:'Rajat'
//     },
//     {
//         team:'PBKS',
//         primary:'red',
//         secondary:'gold',
//         fullname:'Punjab Kings',
//         trophies:2,
//         caption:'Shreyas Iyer'
//     },
//     {
        
//         team:'DC',
//         primary:'blue',
//         secondary:'red',
//         fullname:'Delhi Capitals',
//         trophies:1,
//         caption:'Axer Patel'
//     },
//     {
//         team:'GT',
//         primary:'Navy Blue',
//         secondary:'White',
//         fullname:'Gujarat Titans',
//         trophies:2,
//         caption:'Shubman Gill'
//     },
//     {
//         team:'MI',
//         primary:' Blue',
//         secondary:'gold',
//         fullname:'Mumbai Indians',
//         trophies:0,
//         caption:'Hardik Pandya'
//     }

// ]
// // let ran=Math.floor(Math.random()*arr1.length)
// btn.addEventListener('click',function(){
// let ran=Math.floor(Math.random()*arr1.length)

//     for(let i=ran;i<=ran;i++){
//     h2.innerHTML= arr1[ran].team
//     // box.style.background=`rgb(${arr1[ran].team.primary},${arr1[ran].team.secondary})`  
//    p.innerHTML=arr1[ran].fullname
// }

// })
// let main=document.querySelector('main')
// let btn=document.querySelector('button')
// btn.addEventListener('click',()=>{
//     var box=document.createElement('div')
//     var x=Math.random()*100
//     var y=Math.random()*100
//     var c1=Math.floor(Math.random()*256)
//     var c2=Math.floor(Math.random()*256)
//     var c3=Math.floor(Math.random()*256)
//     var scl=Math.floor(Math.random()*2)

//     box.style.backgroundColor=`rgb(${c1},${c2},${c3})`
//     box.style.height='90px'
//     box.style.width='90px'
//     box.style.position='absolute'
//     box.style.left=x+'%'
//     box.style.top=y+'%'
//     // box.style.scale='scl'

//     // main.innerHTML='box'
//     main.appendChild(box)
//     // console.log(box);

// })
// let arr=['lorem uigugugiug',
//           'joshi  Priyanshu',
//           'biklha choki ',
//           'meduvada sara',
//           'Panir bhurji',
//           'butter nan'
// ]
// btn.addEventListener('click',()=>{
//     var ran=Math.floor(Math.random()*arr.length)
//     var h1=document.createElement('h1')
//     var x=Math.floor(Math.random()*100)
//     var y=Math.floor(Math.random()*100)
//     var c1=Math.floor(Math.random()*256)
//     var c2=Math.floor(Math.random()*256)
//     var c3=Math.floor(Math.random()*256)
//     var scl=Math.random()*4
//     h1.style.position='absolute'
//     h1.style.left=x+'%'
//     h1.style.top=y+'%'
//     h1.style.backgroundColor=`rgb(${c1},${c2},${c3})`
//     h1.style.scale=scl
//     h1.innerHTML=arr[ran]
//     main.appendChild(h1)
//     // console.log(h1);
    
// })


// setInterval
// setTimeout
// let btn=document.querySelector('button')
// let main=document.querySelector('main')
// let p=document.querySelector('.data p')
// let fill=document.querySelector('.fill')
// btn.addEventListener('click',()=>{
//         btn.disabled = true;
        
//     let count=0
//     let lod=setInterval(function(){
//         count++
//         p.innerHTML=count+'%'
//         fill.style.width=count+'%'
//     },500)
    
//     setTimeout(function(){
//         clearInterval(lod)
//         // document.getElementsByTagName('button').disabled=true
//         btn.disabled = true;
//         if(count==100){
//             p.innerHTML='0%'
//             fill.style.width=0+'%'
//             btn.disabled = false;

//         }

//     },50000)
    
// // })
// var main=document.querySelector('main')
// const teamMembers = [
//   {
//     img: "https://i.pinimg.com/736x/28/16/40/281640264baa80b6dfe411460eda7971.jpg",
//     // photo: "images/profile1.png",
//     name: "Aarav Mehta",
//     profession: "Full Stack Developer",
//     paragraph: "I specialize in building scalable web applications using modern technologies like React, Node.js, and MongoDB.",
//     tags: ["JavaScript", "React", "Node", "API"]
//   },
//   {
//     img: "https://i.pinimg.com/1200x/77/6c/0e/776c0ebac8c223ed4241dd4ba56d7e16.jpg",
//     // photo: "images/profile2.png",
//     name: "Riya Sharma",
//     profession: "UI/UX Designer",
//     paragraph: "I design clean and intuitive user interfaces with strong focus on user experience and accessibility.",
//     tags: ["Figma", "Design", "Wireframe", "Prototyping"]
//   },
//   {
//     img: "https://i.pinimg.com/736x/17/ff/9b/17ff9bc6971f2c74c1c176a94e8811b3.jpg",
//     // photo: "images/profile3.png",
//     name: "Kabir Singh",
//     profession: "Mobile App Developer",
//     paragraph: "I develop Android and iOS apps with modern UI and optimized performance using Flutter and Kotlin.",
//     tags: ["Flutter", "Dart", "Kotlin", "Mobile"]
//   },
//   {
//     img: "https://i.pinimg.com/736x/f4/41/33/f4413317634c159210a8e7c450984a8e.jpg",
//     // photo: "images/profile4.png",
//     name: "Neha Verma",
//     profession: "Digital Marketer",
//     paragraph: "I help businesses grow through SEO strategies, social media marketing, and targeted ad campaigns.",
//     tags: ["SEO", "Marketing", "Ads", "Branding"]
//   },
//   {
//     img: "https://i.pinimg.com/1200x/80/d1/ac/80d1ac4063dfdce8efa8ef6ef5f4f30b.jpg",
//     // photo: "images/profile5.png",
//     name: "Rohan Patel",
//     profession: "Cyber Security Expert",
//     paragraph: "I work on system security, penetration testing, and protecting applications from vulnerabilities.",
//     tags: ["Cyber Security", "Pentesting", "Networking", "Linux"]
//   },
//   {
//     img: "https://i.pinimg.com/1200x/80/d1/ac/80d1ac4063dfdce8efa8ef6ef5f4f30b.jpg",
//     // photo: "images/profile5.png",
//     name: "Patel kouih",
//     profession: "Cyber Security Expert",
//     paragraph: "I work on system security, penetration testing, and protecting applications from vulnerabilities.",
//     tags: ["Cyber Security", "Pentesting", "Networking", "Linux"]
//   }
// ];

// teamMembers.forEach(function(member){
  
//    main.innerHTML += `<div class="card">
//     <img src=${member.img} alt="Profile Image">
//     <h2>${member.name}</h2>
//     <p class="profession">${member.profession}</p>
//     <p class="paragraph">${member.paragraph}</p>
//     <div class="tags">
//         ${member.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      
//     </div>
// </div>`

  
//   main.innerHTML=`<div class="card">
//     <img src=${teamMembers.img} alt="Profile Image">
//     <h2>${teamMembers.name}</h2>
//     <p class="profession">${teamMembers.profession}</p>
//     <p class="paragraph">${teamMembers.paragraph}</p>
//     <div class="tags">
//         <span class="tag">${teamMembers.tags}</span>
//         <span class="tag">${teamMembers.tags}</span>
//         <span class="tag">${teamMembers.tags}</span>
//     </div>
// </div>`  
    
// })
// let c= new Audio('C4.wav')
// let e=new Audio('e.wav')
// let g=new Audio('g.wav')
// let a=new Audio('a.wav')
// let b=new Audio('b.wav')
// let f=new Audio('c.wav')
// // let piano=document.querySelector('.piano')
// document.body.addEventListener('keypress',function(del){
//       if(del.key=='c'){
//             c.currentTime = 0;
//             c.play()
//       }
//       if(del.key=='e'){
//             e.currentTime = 0;
//             e.play()
//       }
//       if(del.key=='g'){
//             g.currentTime = 0;
//             g.play()
//       }
//       if(del.key=='a'){
//             a.currentTime = 0;
//             a.play()
//       }
//       if(del.key=='b'){
//             b.currentTime = 0;
//             b.play()
//       }
//       if(del.key=='f'){
//             f.currentTime = 0;
//             f.play()
//       }
//       if(del.key=='d'){
//             g.currentTime = 0;
//             g.play()
//       }
//       // console.log(del.key);
      
// })

                 
      
