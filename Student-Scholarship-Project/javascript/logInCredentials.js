// function createAccount(){
console.log("hi")
const caform = document.getElementById('createAccount');
caform.addEventListener('submit',function(event){
    event.preventDefault();

    const formData = new FormData(caform);

    const allData = Object.fromEntries(formData);

    const n = formData.get('fullName');
    console.log(n);

    console.log(allData);
});
// }

// function getAccountCredentialsForLogInTest(){

// }

// function getAccountCredentialsForDisplay(){
    
// }