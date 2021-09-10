const url =  'http://localhost:3333';



// export const postData = (user, pass) =>{
//     const data = { email:user, password: pass}
//     return fetch(`${url}/login`,{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
     
//          },
//           body: JSON.stringify(data)
//      }).then(response => {
//         if (!response.ok) {
//             let err = new Error('HTTP status code: ' + response.status)
//             err.response = response;
//             err.status = response.status
//             throw err
//         } 
//         return response;})
//         .then(response => {return (response.json())})
//         .then(data => sessionStorage.setItem('token',data.accessToken))
//         .catch((reason) =>{
//             if (reason.status === 0) {
//                 alert(reason.message);
//             }
//             else alert('Invalid credentials');
//         })
// }

export const postData = (user, pass) =>{
    const data = { email:user, password: pass}
    fetch(`${url}/login`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
             
                 },
                  body: JSON.stringify(data)
    }).then(response => {
        if (!response.ok){
            let err = new Error("HTTP status code" + response.status)
             err.status = response.status
         throw err
       
         }
    return response
    })
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        sessionStorage.setItem('token', data.accessToken)   
    })
    .catch(reason =>{
    if(reason.status === 400) {
        alert("Invalid credentials.")
    }
    })
}




export  function getReportsData (){
    let token = sessionStorage.getItem('token')
   console.log('token in get data',token)
        return fetch(`${url}/api/reports`,{
            method: 'GET',
            headers: {
                'Authorization': ' Bearer ' + token,
            },
            
        }).then(response=>{return (response.json())})
        .then(reports => {
            return reports.map(user => {return({id:user.id})})
        })  
}