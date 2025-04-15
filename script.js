const messages = [
  "Você é a razão do meu sorriso todos os dias. 😊💖",
  "Estar ao seu lado é a melhor parte da minha vida. 🥰🌹",
  "Cada segundo com você é um momento de felicidade eterna. ⏳💖",
  "A vida é mais bonita porque você faz parte dela. 🌸💫",
  "Amar você é a coisa mais natural que eu já fiz. 💕🌿",
  "You are my sunshine. 🌞💛",
  "Eu nunca imaginei que alguém pudesse ser tão perfeita como você. 💖✨",
  "Com você, tudo parece possível e lindo. 🌈💘",
  "Nos seus braços, encontrei o meu lugar no mundo. 🏡💑",
  "A vida ao seu lado é a verdadeira definição de felicidade. 😍🌟",
  "Você é o meu pensamento constante e o meu desejo mais sincero. 💭❤️",
  "Eu amo cada pedacinho de você, do seu sorriso ao seu olhar. 😍💖",
  "Você é minha inspiração, meu amor, e a razão pela qual eu quero ser uma pessoa melhor. 🌻💘",
  "Eu não preciso de mais nada, porque você já é tudo que eu preciso. 😍💍",
  "A cada dia que passa, meu amor por você só cresce mais. 🌸❤️",
  "Você é meu sonho realizado e minha melhor realidade. 💭💫",
  "Eu te amo mil milhões. 💖✨",
  "Nada no mundo é mais valioso para mim do que o seu amor. 💎💓",
  "Cada momento com você é único e inesquecível. 🕰️💖",
  "Quando estou com você, o tempo parece voar, mas o meu amor por você só aumenta. ✈️💖",
  "Te amo de uma forma que as palavras não conseguem expressar. 💖",
  "Você é a pessoa que sempre sonhei em ter ao meu lado. 😍💍",
  "Com você, a vida é mais doce, mais leve e muito mais feliz. 🍭❤️",
  "Te olhar é como ver o pôr do sol mais bonito de todos os tempos. 🌅💖",
  "Você é meu tudo, minha razão, meu amor, minha vida. 💑🌸",
  "Te amo mais do que ontem, mas menos do que amanhã. 💖📆",
  "Eu nunca pensei que o amor fosse tão maravilhoso até encontrar você. 💭💖",
  "Você é a pessoa que completa meu coração de uma forma que ninguém mais jamais vai conseguir. 💘💖",
  "Eu só quero ficar ao seu lado para sempre, porque você é tudo que eu sempre sonhei. 🏠💍",
  "Com você, cada dia é uma nova chance de ser feliz. 🌞💖",
  "Estar com você é a melhor maneira de viver a vida. 🏖️💖",
  "Eu te amo mais a cada dia, mais do que eu nunca imaginei ser possível. ❤️📈",
  "Não há nada que eu queira mais do que passar o resto da minha vida ao seu lado. 💍💑",
  "Cada segundo com você é um presente divino. 🎁💖",
  "Sua felicidade é a minha maior prioridade. ❤️😊",
  "Em você, encontrei meu lugar no mundo. 🌍💖",
  "A vida é simples quando você está ao meu lado. 🌸❤️",
  "Seu sorriso tem o poder de iluminar até os meus dias mais sombrios. 🌟😊",
  "Você é a razão pela qual eu acredito que o amor é eterno. 💫❤️",
  "Você me faz sentir que tudo vale a pena. ✨💖",
  "Te ter ao meu lado é um verdadeiro presente de Deus. 🙏💖",
  "Cada palavra sua é música para os meus ouvidos. 🎶💖",
  "Eu daria tudo para te fazer a pessoa mais feliz do mundo. 💖🌍",
  "Você é meu porto seguro e a razão do meu sorriso. ⛵💖",
  "Não importa o que aconteça, eu sempre estarei aqui para você. 🌟🤍",
  "Você é o sonho que se tornou realidade em minha vida. 💭💫",
  "Meu coração é só seu, para sempre e sempre. ❤️🔒",
  "Eu sou a pessoa mais sortuda do mundo por ter você em minha vida. 🍀💖",
  "Estar contigo é um sonho do qual eu não quero acordar. 🌙💖",
  "Em cada gesto seu, eu vejo o quanto você me ama. 💕🙌",
  "Você é minha alegria em dias nublados. ☁️💖",
  "Eu amo você, meu docinho ❤️",
  "Você é a razão pela qual eu acordo todos os dias com um sorriso no rosto. 😊💖",
  "Em seus olhos vejo o futuro que sempre sonhei. 💘",
  "Eu sou seu, e você é minha. O que mais importa no mundo é a nossa conexão. Não posso viver sem você, e não desejo viver sem você. O amor que eu sinto por você é eterno.",
  "Eu não sou nada especial, de fato, sou um pouco mais do que comum. Mas quando você sorri para mim, meu mundo inteiro se acende. A maneira como você me olha, a forma como você ri... é como se o tempo parasse.",
  "Eu sou incapaz de te amar como você merece. Mas, ao mesmo tempo, te amo mais do que você poderia imaginar. Um amor que transcende qualquer limite, qualquer barreira.",
  "Eu prometo te amar até o fim dos meus dias, e além, porque você é tudo o que eu sempre sonhei. Não importa quanto tempo passe, meu amor por você nunca diminuirá. Ele só vai crescer.",
  "Eu sei que você é a pessoa que eu quero ao meu lado, não importa o que aconteça, não importa onde estivermos. Você é a melhor parte de mim, a razão do meu sorriso.",
  "Eu não sabia que era possível amar alguém tanto assim. Eu pensei que o amor era apenas uma palavra bonita, mas você me mostrou que ele é real, que ele pode ser sentido a cada batida do coração.",
  "Eu não posso te prometer uma vida sem dificuldades, mas posso te prometer que, enquanto eu viver, farei tudo para estar ao seu lado, para te proteger e te amar. Você é meu amor, minha esperança, meu tudo.",
  "Eu amo você. Eu estou completamente apaixonado por você. E não há palavras suficientes no mundo que possam expressar o que eu sinto. O que eu posso dizer é que você é tudo o que eu sempre sonhei.",
  "Você é o meu amor. Mesmo quando estou longe de você, é como se estivéssemos sempre juntos. Porque no fundo, onde o amor mora, você e eu sempre seremos um só.",
  "Você tem encantado meu coração de maneiras que eu nunca imaginei ser possível. Eu não posso viver sem você. Você é tudo o que meu coração deseja e anseia.",
  "Eu te amo, e não importa o que aconteça, isso nunca vai mudar. O amor que sinto por você é o mais puro e verdadeiro dos sentimentos. O tempo e a distância podem passar, mas o que sentimos um pelo outro é eterno.",
  "Tu te tornas eternamente responsável por aquilo que cativas. E eu cativei você. E por isso, o amor que sinto por você é eterno, minha princesa, minha estrela.",
  "E quando te olho, vejo o único lugar onde eu realmente pertenço. Não importa o que o mundo faça, o que me importa é que você está aqui, comigo. E isso é o suficiente.",
  "Amar é ser tudo o que o outro precisa, mesmo quando o mundo ao redor se desintegra. Eu estarei sempre aqui, ao seu lado, independente de onde a vida nos leve. O amor que sinto por você é o que me mantém firme.",
  "O amor é feito de pequenos gestos, de olhares silenciosos, de toques que falam mais do que mil palavras. Quando estou com você, o mundo inteiro parece desaparecer e eu só quero estar aqui, ao seu lado.",
  "Às vezes, você encontra o amor nos lugares mais inesperados. E quando você se entrega a ele, percebe que, independentemente de como a vida seja, tudo faz sentido quando estamos juntos.",
  "O amor não é só paixão e promessas. É encontrar o outro, mesmo nas horas mais sombrias, e saber que, independentemente do que aconteça, estaremos sempre entrelaçados.",
  "O amor não é perfeito. Ele é feito de altos e baixos, mas é justamente essa imperfeição que o torna real e verdadeiro. Eu amo você da maneira mais completa que alguém poderia amar.",
  "De todos os sentimentos que tenho por você, o mais forte é a gratidão, por me fazer enxergar o amor de uma forma pura e sincera. Quando olho para você, vejo não só o meu futuro, mas toda a minha vida.",
  "Você é mais do que eu mereço, mais do que eu esperava. Você me faz sentir como se fosse possível ser alguém melhor. Tudo o que eu quero é estar ao seu lado.",
  "A vida é cheia de surpresas. O amor é a maior delas. E o amor mais verdadeiro é aquele que te encontra quando você menos espera, mas que faz tudo ao seu redor brilhar de uma maneira que você nunca imaginou.",
  "Eu te amo. Não só porque você é tudo o que eu sempre quis, mas porque você me ensina a ser uma pessoa melhor. Você faz meu mundo ser mais colorido.",
  "O amor é a nossa história, é o que nos mantém juntos, mesmo quando o mundo ao redor parece desmoronar. E o que eu mais quero é continuar escrevendo essa história com você.",
  "Você não é só a pessoa que eu amo, você é a minha melhor amiga, a minha casa, o meu refúgio. Ao seu lado, sinto que posso ser quem realmente sou.",
  "O que eu mais desejo na vida é estar ao seu lado, e em cada gesto, em cada palavra, eu espero que você me ame da mesma forma que eu te amo. Com um amor que transcende o tempo.",
  "Eu amo você de uma maneira tão profunda que, quando não estamos juntos, o vazio parece tomar conta do meu coração. Mas, quando você está perto, o mundo inteiro se ilumina.",
  "É como se eu tivesse esperado toda a minha vida para te conhecer, e agora que te encontrei, quero passar o resto dos meus dias ao seu lado, rindo, amando, vivendo.",
  "O amor não é algo que se encontra, é algo que se constrói. Quando encontrei você, soube que minha jornada tinha acabado, porque você é o meu destino.",
];

let shownMessages = [];

function typeMessage(message, element, callback) {
  element.textContent = "";
  element.classList.add("typing");
  let i = 0;
  const speed = 25; // ms por letra (dobrado de 50ms para 25ms)
  function type() {
    if (i < message.length) {
      element.textContent += message[i];
      i++;
      setTimeout(type, speed);
    } else {
      element.classList.remove("typing");
      if (callback) callback();
    }
  }
  type();
}

function showMessage(event) {
  console.log("showMessage chamado");
  if (shownMessages.length === messages.length) {
    console.log("Reiniciando mensagens");
    shownMessages = [];
  }
  let index;
  do {
    index = Math.floor(Math.random() * messages.length);
  } while (shownMessages.includes(index));
  shownMessages.push(index);
  console.log("Mensagem selecionada:", messages[index]);
  const message = messages[index];
  const messageSpan = document.getElementById("messageText").children[0];
  typeMessage(message, messageSpan, () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    document.getElementById("favoriteIndicator").classList.toggle("hidden", !favorites.includes(message));
    const box = document.getElementById("messageBox");
    box.classList.remove("opening");
    void box.offsetWidth;
    box.classList.add("opening");
    createSparkles(event);
  });
}

function setMode(mode) {
  document.body.className = mode;
  const particles = document.querySelector(".particles");
  const stars = document.getElementById("stars");
  if (mode === "dark") {
    generateStars(150);
    if (particles) {
      particles.classList.add("hidden");
      setTimeout(() => {
        particles.style.display = "none";
        particles.classList.remove("hidden");
      }, 500);
    }
  } else {
    if (stars) {
      stars.classList.add("hidden");
      setTimeout(() => {
        stars.innerHTML = "";
        stars.classList.remove("hidden");
      }, 500);
    }
    if (particles) {
      particles.style.display = "block";
    }
  }
}

const dayParticles = ["🌸", "💖", "✨", "🌈", "🦋"];
const nightParticles = ["🌙", "⭐", "🌌", "🌠", "🪐"];
const sparkles = ["✨", "💖", "🌟", "🦋", "💫"];
const particlesContainer = document.querySelector(".particles");
const depthContainer = document.getElementById("depthParticles");

function createParticle() {
  const span = document.createElement("span");
  const isDark = document.body.classList.contains("dark");
  const set = isDark ? nightParticles : dayParticles;
  span.textContent = set[Math.floor(Math.random() * set.length)];
  span.style.left = Math.random() * 100 + "%";
  span.style.top = "100%";
  span.style.fontSize = `${Math.random() * 0.7 + 0.8}rem`;
  span.style.opacity = Math.random() * 0.4 + 0.4;
  span.style.transform = `rotate(${Math.random() * 360}deg)`;
  particlesContainer.appendChild(span);
  setTimeout(() => span.remove(), 14000);
}

function createDepthParticle() {
  const span = document.createElement("span");
  const isDark = document.body.classList.contains("dark");
  const set = isDark ? nightParticles : dayParticles;
  span.textContent = set[Math.floor(Math.random() * set.length)];
  span.style.left = Math.random() * 100 + "%";
  span.style.top = Math.random() * 100 + "%";
  span.style.fontSize = `${Math.random() * 0.7 + 0.8}rem`;
  span.style.opacity = Math.random() * 0.4 + 0.4;
  span.style.animationDuration = 20 + Math.random() * 10 + "s";
  depthContainer.appendChild(span);
  setTimeout(() => span.remove(), 30000);
}

function generateStars(count) {
  const container = document.getElementById("stars");
  container.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    const colors = ["#fff", "#f8f", "#aef"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    star.style.backgroundColor = color;
    container.appendChild(star);
  }
}

function createSparkles(e) {
  for (let i = 0; i < 6; i++) {
    const sparkle = document.createElement("span");
    sparkle.classList.add("sparkle");
    sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
    const angle = Math.random() * 2 * Math.PI;
    const radius = 50 + Math.random() * 20;
    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;
    sparkle.style.setProperty('--x', `${Math.cos(angle) * radius}px`);
    sparkle.style.setProperty('--y', `${Math.sin(angle) * radius}px`);
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  }
}

setInterval(createParticle, 600);
setInterval(createDepthParticle, 2000);

document.addEventListener("mousemove", (e) => drawTrail(e.clientX, e.clientY));
document.addEventListener("touchmove", (e) => {
  if (e.touches.length > 0) {
    const touch = e.touches[0];
    drawTrail(touch.clientX, touch.clientY);
  }
});

function drawTrail(x, y) {
  if (Math.random() > 0.3) return;
  const sparkle = document.createElement("span");
  sparkle.classList.add("sparkle");
  sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;
  sparkle.style.setProperty('--x', `${(Math.random() - 0.5) * 50}px`);
  sparkle.style.setProperty('--y', `${(Math.random() - 0.5) * 50}px`);
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 800);
}

// Notificação personalizada
function showNotification(text) {
  const noti = document.createElement("div");
  noti.className = "notification";
  noti.textContent = text;
  document.body.appendChild(noti);
  setTimeout(() => noti.classList.add("show"), 100);
  setTimeout(() => noti.remove(), 3000);
}

// Mensagem inicial
document.addEventListener("DOMContentLoaded", () => {
  typeMessage(messages[0], document.getElementById("messageText").children[0], () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    document.getElementById("favoriteIndicator").classList.toggle("hidden", !favorites.includes(messages[0]));
  });
});

// Favoritar/desfavoritar mensagens
document.getElementById("favoriteBtn").addEventListener("click", () => {
  const currentMessage = document.getElementById("messageText").children[0].textContent;
  let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  const indicator = document.getElementById("favoriteIndicator");
  if (!favorites.includes(currentMessage)) {
    favorites.push(currentMessage);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    showNotification("Mensagem favoritada!");
    indicator.classList.remove("hidden");
  } else {
    favorites = favorites.filter(msg => msg !== currentMessage);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    showNotification("Mensagem removida dos favoritos!");
    indicator.classList.add("hidden");
  }
});

// Modal de favoritos
document.getElementById("viewFavoritesBtn").addEventListener("click", () => {
  const modal = document.getElementById("favoritesModal");
  const favoritesList = document.getElementById("favoritesList");
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  favoritesList.innerHTML = favorites.length
    ? favorites.map((msg, index) => `
        <p>
          <span>${msg}</span>
          <button class="removeFavoriteBtn" data-index="${index}" aria-label="Remover mensagem dos favoritos">✖</button>
        </p>
      `).join("")
    : "<p>Nenhuma mensagem favoritada ainda!</p>";
  modal.classList.remove("hidden");

  // Adicionar eventos aos botões de remoção individual
  document.querySelectorAll(".removeFavoriteBtn").forEach(button => {
    button.addEventListener("click", () => {
      const index = button.getAttribute("data-index");
      let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      const parentP = button.parentElement;
      parentP.classList.add("removing");
      setTimeout(() => {
        favorites.splice(index, 1);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        showNotification("Mensagem removida dos favoritos!");
        favoritesList.innerHTML = favorites.length
          ? favorites.map((msg, newIndex) => `
              <p>
                <span>${msg}</span>
                <button class="removeFavoriteBtn" data-index="${newIndex}" aria-label="Remover mensagem dos favoritos">✖</button>
              </p>
            `).join("")
          : "<p>Nenhuma mensagem favoritada ainda!</p>";
        // Atualizar indicador no #messageBox
        const currentMessage = document.getElementById("messageText").children[0].textContent;
        document.getElementById("favoriteIndicator").classList.toggle("hidden", !favorites.includes(currentMessage));
      }, 300);
    });
  });
});

// Fechar modal
document.getElementById("closeModalBtn").addEventListener("click", () => {
  document.getElementById("favoritesModal").classList.add("hidden");
});

// Zerar favoritos
document.getElementById("clearFavoritesBtn").addEventListener("click", () => {
  localStorage.setItem("favorites", "[]");
  document.getElementById("favoritesList").innerHTML = "<p>Nenhuma mensagem favoritada ainda!</p>";
  showNotification("Favoritos zerados!");
  document.getElementById("favoriteIndicator").classList.add("hidden");
});
