
// // const vr=document.getElementsByClassName("elem1");
// // for(let i=0;i<vr.length;i++)
// // {
// //     vr[i].stylr;}

// var cs=document.getElementsByClassName("elem1");

// cs.addEventListener('click',inpMsg1);
// function inpMsg1(){
//     // console.time('response in')
//     let v=prompt("PLEASE ENTER YOUR NAME: ");
//     let s=prompt(v+" have you completed your task: ");
//     switch(s){
//         case 'yes':cs.textContent="  congratulations!  "+ v+"  Has completed task  ";
//         break;
//         case 'no':cs.textContent=" warning! "+ v+" Has not completed task ";
//         break;
//         default:
//             cs.textContent=" wrong input  ";}
//     }
var vr=document.getElementsByClassName("elem1");
for(let i=0;i<vr.length;i++)
{
    vr[i].style.cursor="pointer";}

// var cs=document.getElementsByClassName('elem1');

vr.addEventListener("click",inpMsg());
function inpMsg(){
    // console.time('response in')
    // const vr=document.getElementsByClassName("elem");
    // vr.style.cursor="pointer";
    

    // var cs=document.getElementById('ab');
    let v=prompt("PLEASE ENTER YOUR NAME: ");
    let s=prompt(v+" have you completed your task: ");
    switch(s){
        case 'yes':vr.textContent="  congratulations!  "+ v+"  Has completed task  ";
        break;
        case 'no':vr.textContent=" warning! "+ v+" Has not completed task ";
        break;
        default:
            vr.textContent=" wrong input  ";}
    }