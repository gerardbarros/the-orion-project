//The user will enter a date. Use that date to get the NASA picture of the day from that date
document.querySelector('button').addEventListener('click', getFetch)
 
function getFetch(){
  const choice = document.querySelector("input").value
  const url = `https://api.nasa.gov/planetary/apod?api_key=wsf8wSZW8YvSzBd5KHUjz53XjVBCU44CKey6A1PU&date=${choice}`
  document.querySelector("h3").classList.remove("hidden")
  
  fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.media_type === "image"){
          document.querySelector("img").src = data.url
          document.querySelector("img").classList.remove("hidden")
          document.querySelector("iframe").classList.add("hidden")
        } else if(data.media_type === "video"){
          document.querySelector("iframe").src = data.url
          document.querySelector("img").classList.add("hidden")
          document.querySelector("iframe").classList.remove("hidden")
        } 

        document.querySelector("h2").innerText = data.title
        
        document.querySelector(".description").innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}