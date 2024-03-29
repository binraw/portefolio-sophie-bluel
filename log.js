const form = document.getElementById("contact");
const log = document.getElementById("login");
const memo = document.getElementById("memorie");
const email = document.getElementById("email");
const information = document.getElementById("info");
const userPassword = document.getElementById("userPasseword");
log.style.textDecoration = "none";
information.style.textDecoration = "none";
information.style.color = "black";
log.style.color = "black";
memo.style.textDecoration = "none";
memo.style.color = "black";

/* recuperation d'une fonction qui ecoute l'envoi du form avec enregistrement
de l'email et passeword et transformer en json puis recuperation de ses donnes 
puis changement en json puis stoker ses donnees dans acces puis envoie sur l'autre page avec acces token*/
form.addEventListener("submit", (event) => {
	event.preventDefault();

	const emailValue = document.getElementById("email").value;
	const password = document.getElementById("userPasseword").value;

	fetch("http://localhost:5678/api/users/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email: emailValue,
			password: password,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			localStorage.setItem("access_token", data.token);
			console.log(data.access_token);
			if (emailValue == "sophie.bluel@test.tld" && password == "S0phie") {
				window.location.href = "index.html";
			} else {
				document.getElementById("error-message").style.display = "block";
			}
		})
		.catch((error) => {
			console.error(error);
			document.getElementById("error-message").style.display = "block";
		});
});
