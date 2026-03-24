const selectedTopic = localStorage.getItem("selectedTopic")

if(!selectedTopic){
window.location.href = "topics.html"
}

let questions = []

if(selectedTopic === "livingWorld"){
questions = livingWorldQuestions
}

if(selectedTopic === "biologicalClassification"){
questions = biologicalClassificationQuestions
}

if(selectedTopic === "plantKingdom"){
questions = plantKingdomQuestions
}

if(selectedTopic === "animalKingdom"){
questions = animalKingdomQuestions
}

if(selectedTopic === "morphologyPlants"){
questions = morphologyPlantsQuestions
}

if(selectedTopic === "anatomyPlants"){
questions = anatomyPlantsQuestions
}

if(selectedTopic === "structuralAnimals"){
questions = structuralAnimalsQuestions
}

if(selectedTopic === "cellUnit"){
questions = cellUnitQuestions
}

if(selectedTopic === "biomolecules"){
questions = biomoleculesQuestions
}

if(selectedTopic === "cellCycle"){
questions = cellCycleQuestions
}

if(selectedTopic === "transportPlants"){
questions = transportPlantsQuestions
}

if(selectedTopic === "mineralNutrition"){
questions = mineralNutritionQuestions
}

if(selectedTopic === "photosynthesis"){
questions = photosynthesisQuestions
}

if(selectedTopic === "respirationPlants"){
questions = respirationPlantsQuestions
}

if(selectedTopic === "plantGrowth"){
questions = plantGrowthQuestions
}


let quizHTML = ""

questions.forEach((q,index)=>{

quizHTML += `
<div class="question">
<p>${index+1}. ${q.question}</p>

${q.options.map(option=>`

<label>
<input type="radio" name="q${index}" value="${option}">
${option}
</label><br>

`).join("")}

</div>
`

})

document.getElementById("quiz").innerHTML = quizHTML


function submitQuiz(){

let score = 0

questions.forEach((q,index)=>{

let selected = document.querySelector(`input[name="q${index}"]:checked`)

if(selected && selected.value === q.answer){
score++
}

})

document.getElementById("result").innerText =
"Score: " + score + " / " + questions.length

}