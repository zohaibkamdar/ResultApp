var a = [
    {
        name:"Uneeb",
        result:"",
        rollNo:i,
        Grade :"F",
    },
    {
        name: "Kashish",
        result:"10",
        rollNo:i,
        Grade :"B"
    },
    {
        name:"Ali",
        result:"10",
        rollNo:i,
        Grade :"C"
    },
    {
        name:"Irtiza",
        result:"10",
        rollNo:i,
        institute:"D"
    },
    {
        name:"Talha",
        result:"10",
        rollNo:i,
        Grade :"B"
    },
    {
        name:"Anjum",
        result:"10",
        rollNo:i,
        Grade :"A"
    },
    {
        name:"Yunus",
        result:"10",
        rollNo:i,
        Grade :"A*"
    },
    {
        name:"Mirza",
        result:"10",
        rollNo:i,
        Grade :"D"
    },
    {
        name:"Nadir",
        result:"",
        rollNo:i,
        Grade :"F"
    },
    {
        name:"Moiz",
        result:"10",
        rollNo:i,
        Grade :"C"
    }
]

for(var i=0;i<a.length;i++){
    a[i].rollNo = i+1
}

var inp = document.getElementById("rollNumber");
var dName = document.getElementById("displayName");
var dResult = document.getElementById("displayResult");

function searchRes(){
    for (var j=0; j<a.length;j++){
        if(a[j].rollNo == inp.value){
            if(a[j].result){
                dName.innerHTML = a[j].name
                dResult.innerHTML = "Pass"
            }else{
                dName.innerHTML = a[j].name
                dResult.innerHTML = "Fail"
            }
        }
    }
}

console.log(a)




//firebase init