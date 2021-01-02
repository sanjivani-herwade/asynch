const getPuzzle = async (wordCount) => {
    const response = await fetch('http://puzzle.mead.io/puzzle?wordCount=${wordCount}')
    fetch('http://puzzle.mead.io/puzzle?wordCount=${wordCount}').then((response) => {
        if (response.status === 200) {
            const data = awiat response.json()
            return data.puzzle
        } else {
            throw new Error('fetch the puzzle')
       }
    }

const getPuzzleOld = (wordCount) => {
    fetch('http://puzzle.mead.io/puzzle?wordCount=${wordCount}').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('fetch the puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}
    const getCountry = (countryCode) => {
        return fetch('https://restcountries.eu/rest/v2/all').then((response) => {
            if (response.status === 200) {
                return response.json()
            } else {
                throw new Error('fetch the puzzle')
            }
        }).then((data) => {
            return data.find((country) => country.alpha2Code === countryCode)
        })
    
    }

    const getLocation = () => {
        return fetch('http://ipinfo.io/json?token=394b1bbd7533a3').then((response) => {
            if (response.status === 200) {
                return response.json()
            } else {
                throw new Error('fetch the location')
            }
        })
    }


    //request.addEventListener('readystatechange',(e) => {
      //  if (e.target.readyState === 4 && e.target.status === 200) {
        // data = JSON.parse(e.target.responseText)
         //resolve(data.puzzle)
    //} else if (e.target.readyState === 4) {
       //callback('An error has taken place', undefined)
      // reject('this is my phone')
    //}
//})

//request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=${wordCount}')
  //  request.send()
//})



const getCountry = (countryCode, callback) => new promise ((resolve, reject) => {
const countryRequest = new XMLHttpRequest()
    
    countryRequest.addEventListener('readystatechange',(e) => {
       if (e.target.readyState === 4 && e.target.status === 200) {
           const data = JSON.parse(e.target.responseText)
           const country = data.find((country) => country.alpha2Code === countryCode)
               resolve(country)
       } else if (e.target.readyState === 4) {
           //callback('fetch the data')
           reject('fetch the data')
       }
    })
countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
countryRequest.send()
})

