// Add your code here



function submitData(userName, userEmail) {
    const submittedData = JSON.stringify( {
        name: userName,
        email: userEmail
    })
    const someConfig = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: submittedData
    }
    
    return fetch("http://localhost:3000/users", someConfig)
    .then(function (response){
        return response.json();
    })
    .then(function (object) {
        document.body.append(object.id);
    })
    .catch(function (error) {
        console.log (error)
        document.body.innerHTML = error.message
    })
}