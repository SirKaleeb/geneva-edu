var chance = Math.round(Math.random() * 100)
var url = '/admissions/index'

if (chance <= 1) url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

document.getElementById('apply-now').href = url
