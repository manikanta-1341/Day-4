var request=new XMLHttpRequest
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send()
request.onload=function()
{
    var data=JSON.parse(request.response)
    for(let i=0;i<data.length;i++)
    {
        console.log(`Country Name : ${data[i].name} \n Region : ${data[i].region} \n Sub Region : ${data[i].subregion} \n Population : ${data[i].population}`)
    }
}