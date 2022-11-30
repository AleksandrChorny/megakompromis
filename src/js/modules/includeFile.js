export async function includeFile(url = '') {
   //console.log(data)
   // Default options are marked with *
   const response = await fetch(url, {
      //method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
         'Content-Type': 'application/json'
         // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      //body: JSON.stringify(data),// body data type must match "Content-Type" header
   });
   if (response.ok) {
      return await response.text();
   }

   //return null // parses JSON response into native JavaScript objects
}

export async function submitFormOnPhp(url = '', data) {
   //console.log(data)
   // Default options are marked with *
   const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      //mode: 'cors', // no-cors, *cors, same-origin
      //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: 'same-origin', // include, *same-origin, omit
      //headers: {
      //   //'Content-Type': 'application/json'
      //   //'Content-Type': 'application/x-www-form-urlencoded',
      //   'Content-Type': 'multipart/form-data'
      //},
      //redirect: 'follow', // manual, *follow, error
      //referrerPolicy: 'no-referrer', // no-referrer, *client
      body: data // body data type must match "Content-Type" header
      //body: data// body data type must match "Content-Type" header
   });
   if (response.ok) {
      return await response.text();
   }

   //return null // parses JSON response into native JavaScript objects
}

export async function getJsonOnPhp(url = '', data) {
   const response = await fetch(url, {
      method: 'POST',
      body: data
   });
   if (response.ok) {
      return await response.json();
   }

}