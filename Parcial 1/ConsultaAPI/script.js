async function buscarPersonaje(){
    const nombre = document.getElementById('nombrePersonaje').value;
    const imagenPerso = document.getElementById('imagen-personaje');
    const nombrePerso = document.getElementById('nomPersonaje')
    const url = `https://dragonball-api.com/api/characters/${nombre}`;

    try{
        const response = await fetch(url);
        const data = await response.json();
        imagenPerso.src = data.image;
        nombrePerso.textContent = data.name;
        console.log(data);
        if (!response.ok) {
            throw new Error('Personaje no encontrado');
        }
    }catch (error) {
        console.error('Error:', error);
        document.getElementById('resultado').innerText = 'Personaje no encontrado.';
    }

    

}