const nextBtn = document.getElementById('next')

function Input(id,name){
    this.id = id
    this.name = name
}

const formInputs = [
    new Input('To','To'),
    new Input('From','From'),
    new Input('Message','Message')
]




function renderForm(){
    const dataForm = {}
    formInputs.forEach((input) => {
        const inputElement = document.getElementById(input.id);
        if (inputElement) {
            dataForm[input.name] = inputElement.value;
        }
    });
    return dataForm
}

renderForm()
console.log(renderForm());



function verifyForm(event) {
    event.preventDefault(); // Prevent form from submitting by default
    const dataForm = renderForm()
    try {
        if(!dataForm.To || !dataForm.From || !dataForm.Message) throw 'Pls fill all the field'
        // If all fields are filled, submit the form
        event.target.closest('form').submit();
    } catch (error) {
       document.getElementById('error').innerHTML = error 
    }
}




nextBtn.addEventListener('click', verifyForm)