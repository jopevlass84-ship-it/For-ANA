// ---------- INTRO ----------

setTimeout(() => {
    document.getElementById("introText").innerHTML = "This is ours... ❤️";
}, 2500);

setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("mainCard").style.display = "block";
    iniciarPagina();
}, 5000);

// ---------- PORTADA ----------

function iniciarPagina() {

    const boton = document.getElementById("startBtn");
    

    boton.addEventListener("click", function () {
        

        document.body.innerHTML = `
        <div class="container">

            <h1>💌 A Letter For You</h1>

            <p id="typing" class="letter"></p>

            <button id="continueBtn" style="display:none;">
                Continue ❤️
            </button>

        </div>
        `;

        escribirCarta();

    });

}

// ---------- CARTA ----------

function escribirCarta(){

const carta = `My dearest Ana,

Before I met you, I never imagined someone so far away could become so important to me.

I fell in love with your kindness, your personality, and the way you always make me feel loved.

I love everything about you.

Every day I dream about the moment we finally meet.

❤️`;

let i = 0;

function escribir(){

    if(i < carta.length){

        document.getElementById("typing").innerHTML += carta.charAt(i);

        i++;

        setTimeout(escribir,35);

    }else{

        document.getElementById("continueBtn").style.display="inline-block";

        document.getElementById("continueBtn").addEventListener("click",mostrarGaleria);

    }

}

escribir();

}

// ---------- GALERÍA (TEMPORAL) ----------

function mostrarGaleria(){

const fotos = [
{
imagen:"imagenes/ana-beach.jpeg",
titulo:"The day I met you...",
texto:"My world became brighter because of you. ❤️"
},
{
imagen:"imagenes/ana-plush.jpeg",
titulo:"Your smile...",
texto:"Always makes my heart feel at home. 🧸"
},
{
imagen:"imagenes/ana-tree.jpeg",
titulo:"No matter the distance...",
texto:"I'll always choose you. 🌸"
},
{
imagen:"imagenes/daniel.jpeg",
titulo:"One day...",
texto:"I hope we'll finally take our first photo together. ❤️"
}
];

let indice = 0;

document.body.innerHTML = `
<div class="container">
    <img id="galleryImage" class="galleryImage">
    <h2 id="galleryTitle"></h2>
    <p id="galleryText"></p>
</div>
`;

function mostrarFoto(){

    document.getElementById("galleryImage").src = fotos[indice].imagen;
    document.getElementById("galleryTitle").innerHTML = fotos[indice].titulo;
    document.getElementById("galleryText").innerHTML = fotos[indice].texto;

    indice++;

    if(indice < fotos.length){

        setTimeout(mostrarFoto,4000);

    }else{

        setTimeout(iniciarCuentaRegresiva,4000);

    }

}

mostrarFoto();

}
function iniciarCuentaRegresiva(){

document.body.innerHTML=`

<div class="container">

<h1>✨ Close your eyes... ✨</h1>

<h2 id="countdown">5</h2>

</div>

`;

let numero=5;

const intervalo=setInterval(function(){

numero--;

document.getElementById("countdown").innerText=numero;

if(numero<=0){

clearInterval(intervalo);

document.body.innerHTML=`

<div class="container">

<h1>❤️ Ana ❤️</h1>

<h2>Will you officially be my girlfriend?</h2>

<div style="margin-top:20px;">

<button id="yesBtn">YES ❤️</button>

<button id="noBtn">I'm shy 🙈</button>


</div>

`;
document.getElementById("yesBtn").addEventListener("click", function(){

document.body.innerHTML = `
<div class="container">
<h1>💖 Thank You 💖</h1>

<p style="font-size:22px; line-height:1.8;">
You just made me the happiest man in the world.<br><br>

I promise to always love you,
care for you,
and stay by your side no matter the distance.<br><br>

Thank you for choosing me.<br><br>

I love you forever ❤️
</p>

<h2>— Daniel ❤️</h2>
</div>
`;

setTimeout(function(){
    mostrarFinal();
},5000);

});
document.getElementById("noBtn").addEventListener("mouseover", function(){

    this.style.position = "absolute";
    this.style.left = Math.random() * 80 + "vw";
    this.style.top = Math.random() * 80 + "vh";

});

}

},1000);

}
function mostrarFinal(){

document.body.innerHTML = `

<div class="container">

<img src="imagenes/ana-beach.jpeg" class="galleryImage">

<h1>❤️ Every Love Story Is Beautiful ❤️</h1>

<p style="font-size:22px; line-height:1.8;">

But ours is my favorite.

<br><br>

Thank you for saying yes.

<br><br>

I can't wait until the day I can finally hug you.

<br><br>

Forever yours,

<br><br>

❤️ Daniel ❤️

</p>

</div>

`;

setTimeout(function(){

document.body.innerHTML = `

<div class="container">

<img src="IMAGENES/ana-beach.jpeg" class="galleryImage">

<h1>🇪🇨 ❤️ 🇮🇩</h1>

<h2>See you soon...</h2>

<p style="font-size:22px; line-height:1.8;">

Distance means so little,

when someone means so much.

</p>

</div>

`;

},6000);

}
// ---------- PÉTALOS ----------

function crearPetalo(){

const petalo=document.createElement("div");

petalo.className="petal";

petalo.innerHTML="🌸";

petalo.style.left=Math.random()*100+"vw";

petalo.style.animationDuration=(5+Math.random()*5)+"s";

petalo.style.fontSize=(16+Math.random()*18)+"px";

const contenedor=document.getElementById("petals");

if(contenedor){

contenedor.appendChild(petalo);

setTimeout(()=>{

petalo.remove();

},10000);

}

}

setInterval(crearPetalo,400);
