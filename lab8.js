filesystem = require("fs");


const arreglo_1 = [1, 2, 3, 4, 5];
let num_prom = 0;

const promedio = (arreglo_1, num_prom) => {
    for (let item of arreglo_1){
        num_prom += item;
    }
    num_prom = num_prom / arreglo_1.length;
    console.log(num_prom);
}

promedio(arreglo_1,num_prom);

const EscribirArchivo = (Titulo,Texto) =>{
    filesystem.writeFileSync(Titulo,Texto);
}

const textoEscribir = "Hola Kevin";
EscribirArchivo (textoEscribir,"archivochido.txt")

class MinStack {
    constructor() {
        this.arr = [];
        this.minArr = [];
    }

    push(val) {
        this.arr.push(val);
        if (this.minArr.length === 0) {
            this.minArr.push(val);
        } else {
            const minVal = Math.min(val, this.getMin());
            this.minArr.push(minVal);
        }
    }

    pop() {
        this.arr.pop();
        this.minArr.pop();
    }

    top() {
        return this.arr[this.arr.length - 1];
    }

    getMin() {
        return this.minArr[this.minArr.length - 1];
    }
}

// Ejemplo de uso:
const minStack = new MinStack();
minStack.push(3);
minStack.push(5);
minStack.push(2);
console.log("Minimum value:", minStack.getMin()); // Output: 2
minStack.pop();
console.log("Top value:", minStack.top()); // Output: 5
console.log("Minimum value:", minStack.getMin()); // Output: 3

const http = require ("http");
const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Validator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
        }
        input[type="password"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 3px;
        }
        #passwordStrength {
            margin-top: 10px;
            font-size: 14px;
        }
        .weak {
            color: red;
        }
        .medium {
            color: orange;
        }
        .strong {
            color: green;
        }
    </style>
    </head>
    <body>
    <div class="container">
        <h2>Password Validator</h2>
        <form id="passwordForm">
            <input type="password" id="password" placeholder="Enter password" required>
            <input type="password" id="confirmPassword" placeholder="Confirm password" required>
            <div id="passwordStrength"></div>
            <button type="submit">Submit</button>
        </form>
    </div>
    
    <script>
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const passwordStrengthIndicator = document.getElementById('passwordStrength');
    
        function validatePasswordStrength(password) {
            const strength = {
                weak: /^(?=.*[a-z])|(?=.*[A-Z])|(?=.*\d)|(?=.*[\W])/.test(password),
                medium: /^(?=.*[a-z])(?=.*[A-Z])|(?=.*\d)(?=.*[A-Z])|(?=.*\d)(?=.*[a-z])|(?=.*[\W])(?=.*[a-z])|(?=.*[\W])(?=.*[A-Z])|(?=.*[\W])(?=.*\d)/.test(password),
                strong: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W])/.test(password)
            };
    
            if (strength.strong) return 'strong';
            if (strength.medium) return 'medium';
            if (strength.weak) return 'weak';
            return 'none';
        }
    
        function updatePasswordStrength() {
            const password = passwordInput.value;
            const strength = validatePasswordStrength(password);
            const strengthText = {
                weak: 'Weak',
                medium: 'Medium',
                strong: 'Strong',
                none: ''
            };
            passwordStrengthIndicator.textContent = strengthText[strength];
            passwordStrengthIndicator.className = strength === 'none' ? '' : strength;
        }
    
        function confirmPassword() {
            const password = passwordInput.value;
            const confirmPassword = confirmPasswordInput.value;
            if (password !== confirmPassword) {
                confirmPasswordInput.setCustomValidity("Passwords don't match");
            } else {
                confirmPasswordInput.setCustomValidity('');
            }
        }
    
        passwordInput.addEventListener('input', updatePasswordStrength);
        confirmPasswordInput.addEventListener('input', confirmPassword);
    
        const passwordForm = document.getElementById('passwordForm');
        passwordForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Aquí puedes añadir lógica adicional, como enviar el formulario a un servidor
            alert('Password validated successfully!');
        });
    </script>
    </body>
    </html>
    `)
    response.end();
});

server.listen(3000);