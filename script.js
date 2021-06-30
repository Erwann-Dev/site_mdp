var selection = ["ABCDEFGHJKMNPQRSTUVWXYZ","abcdefghjkmnpqrstuvwxyz", "23456789", "#*/-+:\_&%!?"]

function combine(){
  var choix = []
  if (document.getElementById("maj").checked === true) {
    choix.push(selection[0]);
  };
  if (document.getElementById("min").checked === true) {
    choix.push(selection[1]);
  };
  if (document.getElementById("chiffre").checked === true) {
    choix.push(selection[2]);
  };
  if (document.getElementById("spec").checked === true) {
    choix.push(selection[3]);
  };
  return(choix)
}

function generate(){
    choix = combine();
    if (choix == ""){
      alert("Minimum 1 choix");
    };
    pwd_length = document.getElementById('pwd_length').value;
    var compteur = 0;
    var mdp = ""
    while (compteur < pwd_length){
      x = Math.floor(Math.random() * choix.length);
      y = Math.floor(Math.random() * choix[x].length);
      mdp += choix[x][y]
      compteur += 1
    }
    show(mdp)
    return(mdp)
}

function show(mdp){
  mdp_text = document.getElementById('mdp_final');
  mdp_text.innerHTML = "Mot de passe : " + mdp;
}