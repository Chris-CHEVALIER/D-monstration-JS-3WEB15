/* const paragraphs = document.getElementsByTagName('p')

let button = document.createElement('button')
button.innerText = 'Cliquez-moi !'
document.body.insertBefore(button, paragraphs[0])

button.addEventListener('click', () => {
  changeParagraphs()
})

fetch('https://hp-api.onrender.com/api/characters').then(res => {
  res.json().then(data => {
    data.forEach(character => {
      let h2 = document.createElement('h2')
      let img = document.createElement('img')
      h2.innerText = character.name

      img.src = character.image
      img.width = 250
      document.body.insertBefore(h2, paragraphs[0])
      document.body.insertBefore(img, paragraphs[0])
    })
  })
})

function changeParagraphs () {
  let count = 1
  for (let paragraph of paragraphs) {
    paragraph.innerText = 'Paragraphe ' + count
    paragraph.style.color = 'red'
    count++
  }
} */

let students = ['Wendy', 'Gabriella', 'Lucie', 'Adrien']
students.sort()

/* for (let i = 0; i <= 10; i++) {
  const result = 6 * i
  //document.write("6 x " + i + " = " + result + "<br>")
  document.write(`6 x ${i} = ${result} <br>`)
} */

for (let i = 0; i < students.length; i++) {
  const student = students[i]
  document.write(`${student} <br>`)
}

/* students.forEach(student => {
    document.write(`${student} <br>`)
}) */

let i = 0
while (i < 10) {
    if (i % 2 === 0) {
        document.write(`${i} <br>`)        
    }
    i++
}