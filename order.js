const objData = {}

const contentElement = document.querySelector('.message-content')


function transfer(){
    let data = location.search.slice(1)
    // console.log(data);
    data = data.replace(/\+/g,' ')
    // console.log(data);
    data = decodeURIComponent(data)
    // console.log(data);
    const informations = data.split('&')
    for (const info of informations) {
        // console.log(info);
        const nameValuePair = info.split('=')
        const name = nameValuePair[0]
        const value = nameValuePair[1]

        objData[name] = value

        const paragraph = document.createElement('p')
        
        const strongElement = document.createElement('strong')
        strongElement.textContent = `${name}: `
        paragraph.appendChild(strongElement)
        
        const spanElement = document.createElement('span')
        spanElement.textContent = value
        spanElement.className = 'recipientName'
        paragraph.appendChild(spanElement)
        
        contentElement.appendChild(paragraph)  
    }
}
// console.log(objData);









window.addEventListener('load', transfer)








