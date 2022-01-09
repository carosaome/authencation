const config = {
    url: 'http://127.0.0.1:5501/index.html',
    handleCodeInApp: true,
};

 function createNewAccount(email, password){
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            let user = userCredential.user;
            
            console.log(user)
            console.log(userCredential)
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode, errorMessage)

        });
};
export { createNewAccount }