function createAccount(){
    const studentDetails = document.forms["createAccount"]["fullName"].value;
    alert(studentDetails);
    if (studentDetails.trim().length === 0 || studentDetails.trim() === "") {
        document.getElementById("test-name").innerHTML = "enter valid name";
    }
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('style-button');
  if (btn) btn.addEventListener('click', createAccount);
});


// function getAccountCredentialsForLogInTest(){

// }

// function getAccountCredentialsForDisplay(){
    
// }