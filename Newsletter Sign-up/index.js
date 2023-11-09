/*
    camelCase = for variables and functions
    PascalCase = for classes

    https://parsleyjs.org/

    Regular expressions / regex
    https://regex101.com/
*/

let inputEmail = document.getElementById('email')
let errorMessage = document.getElementById('error')
let subscribeButton = document.getElementById('button')

let emailFormat = /\w+@\w+\.\w+/
// REGEX.test(STRING) returns a boolean
/*
    if () {}
    
    Node {
        classList: {
            add(),
            remove(),
            toggle()
        },
        style: {
            dislplay: "",
            backgroundColor:"", etc...
        }
    }
*/

let obj = {
    a: 1,
    b: 2,
    c : {
        d: 3
    },
    xyz() {

    }
}

obj.a = 3
obj.c.d = 5
obj.xyz()

// inputEmail.addEventListener('input',function(){
//     let match = emailFormat.test(inputEmail.value)
//     console.log(match)
//     if (match) {
//         errorMessage.style.display ='none'
//     }
//     else {
//         errorMessage.style.display = 'block'
//     }
// })

/*
    Defining a function
        function name(params) {
            code
        }

    Calling a function
        name(args)
*/

subscribeButton.addEventListener('click',function(){
    let match = emailFormat.test(inputEmail.value)
    console.log(match)
    if (match) {
        errorMessage.style.display ='none'
        
    }
    else {
        errorMessage.style.display = 'block'
        inputEmail.classList.add("invalid")
        
    }
})