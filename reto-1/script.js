/*
¿Porque evitar los Callback de manera asincrona?
Porque cuando trabajamos con muchas operaciones asincronas
dependientes se puede terminar rapidamente en el conocido
Callback Hell (Infierno de los callbacks).
*/

//ejemplo de callback
const getUser1 = cb =>{
    setTimeout(() => {
        cb({name: 'max'})
    },2000)
}
getUser1(user => {
    console.log(user.name)
})

/*
¿que es una promesa?
Las promesas son la respuesta de ES6 (ECMA SCRIPT 6) al "callback hell" 
como nueva solucion para manejar la asincronia.
*/
//ejemplo de promise
const getUser2 = () => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve({ name: 'max' })
        },2000);
    });
}

getUser2().then(user => {
    console.log(user.name)
});

/*¿que es un callback hell?
 múltiples Callbacks anidados que provocan que el código se vuelva difícil de leer y 
 'debuggear'; ésta es la principal razón por la cual se debe evitar.
*/
const xhr1 = new XMLHttpRequest();
xhr1.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
xhr1.addEventListener('load', function () {
	if ((xhr1.status >= 200 && xhr1.status < 300) || xhr1.status == 304) {
		console.log(JSON.parse(xhr1.responseText).id);
		const xhr2 = new XMLHttpRequest();
		xhr2.open('GET', 'https://jsonplaceholder.typicode.com/todos/2');
		xhr2.addEventListener('load', function () {
			if ((xhr2.status >= 200 && xhr2.status < 300) || xhr2.status == 304) {
				console.log(JSON.parse(xhr2.responseText).id);
				const xhr3 = new XMLHttpRequest();
				xhr3.open('GET', 'https://jsonplaceholder.typicode.com/todos/3');
				xhr3.addEventListener('load', function () {
					if ((xhr3.status >= 200 && xhr3.status < 300) || xhr3.status == 304) {
						console.log(JSON.parse(xhr3.responseText).id);
						const xhr4 = new XMLHttpRequest();
						xhr4.open('GET', 'https://jsonplaceholder.typicode.com/todos/4');
						xhr4.addEventListener('load', function () {
							if ((xhr4.status >= 200 && xhr4.status < 300) || xhr4.status == 304) {
								console.log(JSON.parse(xhr4.responseText).id);
							}
						});
						xhr4.send();
					}
				});
				xhr3.send();
			}
		});
		xhr2.send();
	}
});
xhr1.send();