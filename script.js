const c = document.getElementById("matrix");

const ctx =  c.getContext("2d");

c . height = window.innerHeight
c . width = window.innerWidth

const letras = ["日","ﾊ","ﾐ","ﾋ","ｰ","ｳ","ｼ","ﾅ","ﾓ","ﾆ","ｻ","ﾜ","ﾂ","ｵ","ﾘ","ｱ","ﾎ","ﾃ","ﾏ","ｹ","ﾒ","ｴ","ｶ","ｷ","ﾑ","ﾕ","ﾗ","ｾ","ﾈ","ｽ","ﾀ","ﾇ","ﾍ",":","・",".","=","*","+","-","<",">","¦","｜","ﾘ"];
const tamanhoFonte = 20;

const colunas = c.width / tamanhoFonte;

const chuva = new Array(Math.floor(colunas)).fill(1);

function pintar() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#0F0";
    ctx.font = `${tamanhoFonte}px arial`;

    for (let i = 0; i < chuva.length ; i++) {
    const texto = letras[Math.floor(Math.random() * letras.length)];
    ctx.fillText(texto, i * tamanhoFonte, chuva[i] * tamanhoFonte);
    chuva[i]++
        if(chuva[i] * tamanhoFonte > c.height && Math.random() > 0.98){
            chuva[i] = 0
        };
    };

    window.requestAnimationFrame(pintar);
};

pintar();

