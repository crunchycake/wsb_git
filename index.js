// const docs01 = document.getElementById('wrapper')
// console.log(docs01)

// const docs02 = document.querySelector('#wrapper')
// console.log(docs02)

// const docs03 = document.querySelector('#wrapper a')
// console.log(docs03)

// const docs04 = document.querySelector('#wrapper .textJs')
// console.log(docs04)

// const docs05 = document.querySelector('h1')
// console.log(docs05)

// const docs06 = document.querySelectorAll('p')
// console.log(docs06)

// const docs07 = document.getElementsByClassName('textJs')
// console.log(docs07)

// const docs08 = document.getElementsByTagName('p')
// console.log(docs08)

// let docs09 = document.getElementsByTagName('p')
// console.log(docs09)
// console.log((docs09 = [...docs09]))

// console.log((document.querySelector('h1').textContent = 'nowa treść'))

// document.querySelector('h1').classList.add('bgc')
// document.querySelector('h1').classList.remove('h1color')

// document.getElementById("btn").addEventListener("click", function(){
//     alert("alert")
// })

// document.getElementById("btn").addEventListener("click", function(){
//     document.querySelector("h1").classList.add("fontSize");
// })

// document.getElementById('btn').addEventListener('click', function () {
// 	//     if (document.querySelector("h1").classList.contains("fontSize")) {
// 	//         document.querySelector("h1").classList.remove("fontSize");

// 	//     } else {
// 	//         document.querySelector("h1").classList.add("fontSize");
// 	//     }
// 	// })

// 	// document.querySelector('h1').classList.toggle('fontSize')

// 	// console.log(document.getElementById('sample-input').value)
// })

// function findTotal(){
//     var arr = document.getElementsByName('number');
//     var tot=0;
//     for(var i=0;i<arr.length;i++){
//         if(parseInt(arr[i].value))
//             tot += parseInt(arr[i].value);
//     }
//     document.getElementById('findTotal').value = tot;
// }

// document.getElementById('calcSum').addEventListener('click', function(event){
//     event.preventDefault();
//     const val1 = document.getElementById('val1').value;
//     console.log('val1')
//     const val2 = document.getElementById('val2').value;
//     console.log('val2')
//     document.getElementById('sum').value = +val1 + +val2;
// })

// 1b6811

document.getElementById("blue-eyes").addEventListener("click",function(){
    if (document.getElementById("eye1").classList.contains("greenEye")){
        document.getElementById("eye1").classList.remove("greenEye");
        document.getElementById("eye2").classList.remove("greenEye");
        document.getElementById("eye1").classList.add("blueEye");
        document.getElementById("eye2").classList.add("blueEye");
    } 
})
document.getElementById("green-eyes").addEventListener("click",function(){
    if (document.getElementById("eye1").classList.contains("blueEye")){
        document.getElementById("eye1").classList.remove("blueEye");
        document.getElementById("eye2").classList.remove("blueEye");
        document.getElementById("eye1").classList.add("greenEye");
        document.getElementById("eye2").classList.add("greenEye");
    }
})
