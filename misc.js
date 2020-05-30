function annulerSuppression() {
	while (historiqueSupprime.length) {historique.push(historiqueSupprime.pop()); }
	
	// On remet le bouton tel qu'il était
	var btnAnnuler = document.getElementById("annuler");
	btnAnnuler.style.display = "none";
	
	chargerHistorique();
}

function chargerHistorique (load = false) {
	var mem = {};
	for (var i = 1; i <= 5; i++) {
		mem["woth_input" + i] = document.getElementById("woth_input" + i).value;
		if (i <= 3) {
			mem["barren_input" + i] = document.getElementById("barren_input" + i).value;
		}
	}
	mem["hintInput"] = document.getElementById("hintInput").value;
	mem["markStones"] = document.getElementById("markStones").value;
	mem["markMedallions"] = document.getElementById("markMedallions").value;
	if (document.getElementById("urlDiffuseur") != null) {
		mem["urlDiffuseur"] = document.getElementById("urlDiffuseur").value;
		mem["nomDiffuseur"] = document.getElementById("nomDiffuseur").value;
	}

	var listeHinted = [];
	for (var elt in Hinted) {
		if (Hinted[elt] && elt != "junk") {listeHinted.push(elt);}
	}

	// Réinitialisation de la page
	document.body.innerHTML = contenuBodyInitial;
	initialize();

	// Récupération de la mémoire
	for (var i = 1; i <= 5; i++) {
		 document.getElementById("woth_input" + i).value = mem["woth_input" + i];
		if (i <= 3) {
			document.getElementById("barren_input" + i).value = mem["barren_input" + i];
		}
	}
	document.getElementById("hintInput").value = mem["hintInput"];
	document.getElementById("markStones").value = mem["markStones"];
	document.getElementById("markMedallions").value = mem["markMedallions"];
	if (document.getElementById("urlDiffuseur") != null) {
		document.getElementById("urlDiffuseur").value = mem["urlDiffuseur"]
		document.getElementById("nomDiffuseur").value = mem["nomDiffuseur"];
	}

	var hist_aux = historique.slice(); // On change car l'historique va se remplir à nouveau, il faut le vider
	historique = [];
	
	hist_aux.forEach(evt => {
		
		if (document.getElementById(evt.loc) == null) {
			console.log("null : " + evt.loc);
		} else {
				
			if (document.getElementById(evt.loc).tagName == "INPUT") {
				if (!evt.hinted) {
					document.getElementById(evt.loc).value = evt.obj;
				} else {
					document.getElementById(evt.loc).value = capitalizeFirstLetter(evt.obj);
				}
			} else if (document.getElementById(evt.loc).tagName == "DIV") {
				console.log("div : " + evt.loc);
				if (evt.obj != "") {listeHinted = (evt.obj).split("/");}
			} else if (document.getElementById(evt.loc).tagName == "TEXTAREA") {
				console.log("TextArea : " + evt.loc);
				document.getElementById(evt.loc).value = evt.obj;
			} else {
				console.log("Autre : " + evt.loc);
				document.getElementById(evt.loc).value = evt.obj; 
			}
		}

		if ((evt.loc == "forest") || (evt.loc == "fire") || (evt.loc == "water") || (evt.loc == "spirit") || (evt.loc == "shadow") || (evt.loc == "ganons") || (evt.loc == "gtg") || (evt.loc == "well")) {junkUltra(document.getElementById(evt.loc)); }	
	});

	if (load) {
		// Réinitialisation de l'initial time uniquement dans ce cas
		initialTime = d.getTime() - parseInt(hist_aux[hist_aux.length -2].timer, 10)*1000;
		//console.log("Calcul temps : " + initialTime + " = " + d.getTime() + " - " + parseInt(hist_aux[hist_aux.length -2].timer, 10) + " (" + hist_aux[hist_aux.length -2].timer + ")");
		
		// On supprime les 2 champs qui ont été ajoutés pour la sauvegarde
		hist_aux.splice(hist_aux.length - 2);
	}

	Update(); Update(); Update();
	process_inputs();

	// Après l'update, on remet à jour l'historique correctement, et notamment dans le bon ordre des événements
	historique = [];
	historique = hist_aux.slice();
	afficheHistorique();
	
	// On repositionne les hint qui vont bien
	// listeHinted.forEach(elt => {
		// if (!elt.startsWith("Unread") && elt != "" && elt != "junk") {console.log("Hinted : " + elt); Hinted[elt] = false; toggleHint(document.getElementById("text_" + elt));}
	// });
	
	// En cas de diffusion, on envoie les données vers le serveur actualisés pour le chrono
	if (statutDiffusion) {
		ajaxPost(pathServer + "data/" + cleDiffusion, generationJSON(), function(retour) {
			// Traitement à la réception, on peut identifier le fait d'avoir bien reçu une réponse valide du serveur
			document.getElementById("statutDiffusion").innerText = retour;
		});
	}


}

function ajoutHistorique(obj, newEvt, hinted = false) {
	var newHistorique = { loc: newEvt, obj: obj, timer: document.getElementById("timer").innerHTML, hinted: hinted }; 
	historique.push(newHistorique);
	//console.log("ajoutHistorique : " + document.getElementById("timer").innerHTML + " -> " + newEvt + ": " + obj);
	afficheHistorique();
	
	// En cas de diffusion, on envoie les données vers le serveur
	if (statutDiffusion) {
		ajaxPost(pathServer + "data/" + cleDiffusion, generationJSON(), function(retour) {
			// Traitement à la réception, on peut identifier le fait d'avoir bien reçu une réponse valide du serveur
			document.getElementById("statutDiffusion").innerText = retour;
		});
	}
	
	// On remet le bouton annuler à sa fonction initiale
	var btnAnnuler = document.getElementById("annuler");
	btnAnnuler.style.display = "none";
	historiqueSupprime = []; // On vide le tableau
}

function afficheHistorique() {
	affHistorique = "";
	// var i = historique.length;
	var i = 0;
	historique.forEach(evt => {
		affHistorique = "<tr><td><span class=\"classHistorique\">" + evt.timer + "</span></td><td><span id=\"historique_" + i  + "\" class=\"classHistorique\" onclick=\"annuler(" + i + ")\" >" + Names[Locations.indexOf(evt.loc)] + "</span></td><td><span class=\"classHistorique\">" + (Check[document.getElementById(evt.loc).id] === undefined ? evt.obj : Check[document.getElementById(evt.loc).id]) + "</span></td><td><span class=\"classHistorique\">" + (evt.hinted ? "Hinted" : "" ) + "</span></td></tr>" + affHistorique;
		i+=1; // Incrément
	});
	
	document.getElementById("historique").innerHTML = "<table><tr><th>Time</th><th>Location</th><th>Objet</th><th>Hint</th></tr>" + affHistorique + "</table>";	
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function changeTheme() {
	if (Game.theme == "dark") {Game.theme = "light"}
	else {Game.theme = "dark"}
	Game.themeChange = true;
	Update();
	}
	
function whoAmI() {
	if(Person.type == "soli") {
		Person.type = "normie";
		localStorage.setItem("type", "normie");
		Game.themeChange = true;
		Update();
	}
	else if (Person.type == "tagnia") {
		Person.type = "soli";
		localStorage.setItem("type", "soli");
		Game.themeChange = true;
		Update();
	}
	else if (Person.type == "normie") {
		Person.type = "tagnia";
		localStorage.setItem("type", "tagnia");
		Game.themeChange = true;
		Update();
	}
}
	
function identifyMedal(x) {
	hasChangedMedal = true;
	if (x.style.color == "yellow") {
		x.style.color = "rgb(238, 130, 238)";
	}
	else if (x.style.color == "rgb(238, 130, 238)") {
		x.style.color = "rgb(255, 165, 0)";
	}
	else if (x.style.color == "rgb(255, 165, 0)") {
		x.style.color = "yellow";
	}
}

function toggleSettings() {
	if(Logic.brackets) {
		Logic.brackets = false;
		document.getElementById("SettingsToggle").innerHTML = "Switch to Brackets";
		Update();
	}
	else {
		Logic.brackets = true;
		document.getElementById("SettingsToggle").innerHTML = "Switch to Weekly";
		Update();
	}
}

function enableChus() {
	if(Game.has_chus == false) {
		Game.has_chus = true;
		document.getElementById("chuButton").style.opacity = 1;
	}
	// else if(Game.has_chus == true) {
		// Game.has_chus = false;
		// if (Person.type == "soli") {document.getElementById("chuButton").src = "./images/chux.png";}
		// else {document.getElementById("chuButton").style.opacity = .4;}
	// }
}

function download() {
        var a = document.body.appendChild(
            document.createElement("a")
        );
        var textToWrite = textBlock;
        a.download = "route.txt"; 
        textToWrite = textToWrite.replace(/\n/g, "%0D%0A"); 
        a.href = "data:text/plain," + textToWrite;
        a.click();
}

function save() {
	var a = document.body.appendChild(
            document.createElement("a")
        );
	var textToWrite = generationJSON();

    a.download = "historique.json";  
    a.href = "data:text/plain," + textToWrite;
    a.click();
}

function generationJSON() {
	var textToWrite = "";
	var hist_save = historique.slice();
	
	// On ajoute le temps passé
	hist_save.push({loc: "hintInput", obj: document.getElementById("hintInput").value, timer: timer_stuff()});
	

	var listeHinted = "";

	for (var elt in Hinted) {
		if (Hinted[elt]) {if (listeHinted != "") {listeHinted+= "/"} listeHinted += elt;}
	}

	hist_save.push({loc: "notes", obj: listeHinted});
	
	textToWrite = JSON.stringify(hist_save);
	
	return textToWrite;
}

function handleFiles(file) {

	var reader = new FileReader();
    reader.onload = (function() { return function(e) { historique = JSON.parse(e.target.result); chargerHistorique(true); }; })();
    reader.readAsText(file[0]);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalizeThirdLetter(string) {
    return string.charAt(0) + string.charAt(1) + string.charAt(2).toUpperCase();
}	

function isUpperCase(str) {
    return str === str.toUpperCase();
}

function slowUpdate() {
	for (i=0; i < Items.length; i++) {
	ChecksLockedBy[Items[i]] = checksLockedByItem(Items[i]);
	}
	for (i=0; i < Items.length; i++) {
	if (Location[Items[i]] != null ) {ChecksPutInLogicBy[Items[i]] = checksPutInLogicByItem(Items[i]);}
	}
}

function timerControl() {
	pauseFlag = true;
	if (paused) {paused = false; document.getElementById("timerControl").innerHTML = "Pause";}
	else {paused = true; document.getElementById("timerControl").innerHTML = "Resume";}
}

function circusControl() {
	if (circus) {circus = false; document.getElementById("circusControl").innerHTML = "Unleash Animals";}
	else {circus = true; document.getElementById("circusControl").innerHTML = "Send Back to Circus";}
}

function inaccessibleControl() {
	if (hideInaccessible) {hideInaccessible = false; localStorage.setItem("hideInaccessible", hideInaccessible); document.getElementById("inaccessibleControl").innerHTML = "Hide Inaccessible";}
	else {hideInaccessible = true; localStorage.setItem("hideInaccessible", hideInaccessible); document.getElementById("inaccessibleControl").innerHTML = "Show Inaccessible";}
	
	process_inputs();
}

function coopControl() {
	if (coopmode) {coopmode = false; document.getElementById("coopControl").innerHTML = "coopmode";}
	else {coopmode = true; document.getElementById("coopControl").innerHTML = "solitude";}
}

function gs_array_builder() {
	gs[1] = Location_Logic.gs_kokiri_child;
	gs[2] = Location_Logic.gs_kokiri_bean;
	gs[3] = Location_Logic.gs_kokiri_adult;
	gs[4] = Location_Logic.gs_market;
	gs[5] = Location_Logic.gs_lost_woods_bean1;
	gs[6] = Location_Logic.gs_lost_woods_bean2;
	gs[7] = Location_Logic.gs_lost_woods_above_stage;
	gs[8] = Location_Logic.gs_sacred_forest;
	gs[9] = Location_Logic.gs_outside_kakariko;
	gs[10] = Location_Logic.gs_near_gerudo;
	gs[11] = Location_Logic.gs_hyrule_castle_tree;
	gs[12] = Location_Logic.gs_hyrule_castle_grotto;
	gs[13] = Location_Logic.gs_lon_lon_tree;
	gs[14] = Location_Logic.gs_lon_lon_shed;
	gs[15] = Location_Logic.gs_lon_lon_window;
	gs[16] = Location_Logic.gs_lon_lon_back_wall;
	gs[17] = Location_Logic.gs_kakariko_construction;
	gs[18] = Location_Logic.gs_kakariko_skulltula_house;
	gs[19] = Location_Logic.gs_kakariko_guard_house;
	gs[20] = Location_Logic.gs_kakariko_tree;
	gs[21] = Location_Logic.gs_kakariko_tower;
	gs[22] = Location_Logic.gs_kakariko_impas;
	gs[23] = Location_Logic.gs_graveyard_wall;
	gs[24] = Location_Logic.gs_graveyard_bean;
	gs[25] = Location_Logic.gs_trail_bean;
	gs[26] = Location_Logic.gs_trail_bombable_wall;
	gs[27] = Location_Logic.gs_trail_hail_path;
	gs[28] = Location_Logic.gs_trail_above_dodongos;
	gs[29] = Location_Logic.gs_goron_city_center;
	gs[30] = Location_Logic.gs_goron_city_maze;
	gs[31] = Location_Logic.gs_crater_crate;
	gs[32] = Location_Logic.gs_crater_bean;
	gs[33] = Location_Logic.gs_river_ladder;
	gs[34] = Location_Logic.gs_river_near_grotto;
	gs[35] = Location_Logic.gs_river_above_bridge;
	gs[36] = Location_Logic.gs_zora_river_tree;
	gs[37] = Location_Logic.gs_domain;
	gs[38] = Location_Logic.gs_fountain_above_log;
	gs[39] = Location_Logic.gs_fountain_tree;
	gs[40] = Location_Logic.gs_fountain_hidden_cave;
	gs[41] = Location_Logic.gs_hylia_bean;
	gs[42] = Location_Logic.gs_hylia_lab_wall;
	gs[43] = Location_Logic.gs_hylia_island;
	gs[44] = Location_Logic.gs_hylia_tree;
	gs[45] = Location_Logic.gs_lab_crate;
	gs[46] = Location_Logic.gs_valley_small_bridge;
	gs[47] = Location_Logic.gs_valley_bean;
	gs[48] = Location_Logic.gs_valley_tent;
	gs[49] = Location_Logic.gs_valley_pillar;
	gs[50] = Location_Logic.gs_fortress_archery;
	gs[51] = Location_Logic.gs_fortress_top;
	gs[52] = Location_Logic.gs_wasteland_structure;
	gs[53] = Location_Logic.gs_colossus_bean;
	gs[54] = Location_Logic.gs_colossus_tree;
	gs[55] = Location_Logic.gs_colossus_hill;
	gs[56] = Location_Logic.gs_ganons;
	gs[57] = Location_Logic.gs_deku_basement_back;
	gs[58] = Location_Logic.gs_deku_basement_gate;
	gs[59] = Location_Logic.gs_deku_basement_vines;
	gs[60] = Location_Logic.gs_deku_compass;
	gs[61] = Location_Logic.gs_dodongos_east_side;
	gs[62] = Location_Logic.gs_dodongos_stair_room;
	gs[63] = Location_Logic.gs_dodongos_above_stairs;
	gs[64] = Location_Logic.gs_dodongos_scarecrow;
	gs[65] = Location_Logic.gs_dodongos_before_king;
	gs[66] = Location_Logic.gs_jabu_vines;
	gs[67] = Location_Logic.gs_jabu_near_octo1;
	gs[68] = Location_Logic.gs_jabu_near_octo2;
	gs[69] = Location_Logic.gs_jabu_near_boss;
	gs[70] = Location_Logic.gs_forest_first;
	gs[71] = Location_Logic.gs_forest_lobby;
	gs[72] = Location_Logic.gs_forest_outdoor_east;
	gs[73] = Location_Logic.gs_forest_outdoor_west;
	gs[74] = Location_Logic.gs_forest_basement;
	gs[75] = Location_Logic.gs_fire_song_of_time;
	gs[76] = Location_Logic.gs_fire_bomb_wall;
	gs[77] = Location_Logic.gs_fire_scarecrow1;
	gs[78] = Location_Logic.gs_fire_scarecrow2;
	gs[79] = Location_Logic.gs_fire_basement;
	gs[80] = Location_Logic.gs_water_south_basement;
	gs[81] = Location_Logic.gs_water_river;
	gs[82] = Location_Logic.gs_water_central;
	gs[83] = Location_Logic.gs_water_near_boss_key;
	gs[84] = Location_Logic.gs_water_platform_room;
	gs[85] = Location_Logic.gs_spirit_metal_fence;
	gs[86] = Location_Logic.gs_spirit_before_child_knuckle;
	gs[87] = Location_Logic.gs_spirit_boulder_room;
	gs[88] = Location_Logic.gs_spirit_temple_lobby;
	gs[89] = Location_Logic.gs_spirit_bomb_for_light_room;
	gs[90] = Location_Logic.gs_shadow_like_like;
	gs[91] = Location_Logic.gs_shadow_crusher;
	gs[92] = Location_Logic.gs_shadow_giant_pot;
	gs[93] = Location_Logic.gs_shadow_near_boat;
	gs[94] = Location_Logic.gs_shadow_three_pots;
	gs[95] = Location_Logic.gs_well_west_inner;
	gs[96] = Location_Logic.gs_well_east_inner;
	gs[97] = Location_Logic.gs_well_like_like;
	gs[98] = Location_Logic.gs_ice_spinning_scythe;
	gs[99] = Location_Logic.gs_ice_hp_room;
	gs[100] = Location_Logic.gs_ice_block_room;
}

function timer_stuff() {
	var d = new Date();
	if (paused && pauseFlag) {pauseInitial = d.getTime(); pauseFlag = false;}
	if (!paused && pauseFlag) {pauseTotal += d.getTime() - pauseInitial; pauseFlag = false;}
	if (!paused) {var tempTime = Math.floor((d.getTime() - pauseTotal - initialTime)/1000);} else {var tempTime = Math.floor((pauseInitial - pauseTotal - initialTime)/1000);}
	tempHours = Math.floor(tempTime / 3600);
	tempMinutes = Math.floor((tempTime % 3600) / 60);
	tempSeconds = Math.floor((tempTime % 3600) % 60);
	document.getElementById("timer").innerHTML = "";
	if (tempHours > 0) {document.getElementById("timer").innerHTML += tempHours + ":";}
	if (tempHours > 0 && tempMinutes == 0) {document.getElementById("timer").innerHTML += "00:"} if (tempMinutes > 0) {if (tempMinutes < 10 && tempHours > 0) {document.getElementById("timer").innerHTML += "0";} document.getElementById("timer").innerHTML += tempMinutes + ":";}
	if (tempSeconds < 10 && (tempMinutes > 0 || tempHours > 0)) {document.getElementById("timer").innerHTML += "0";}
	document.getElementById("timer").innerHTML += tempSeconds;
	
	return tempTime;
}

document.onkeydown = function(e) {
	if (e.ctrlKey && e.which == 90) {
		Undo();
	}
}

function Undo() {
	if (Check[lastCheck[lastCheck.length-1]] == "small_key") {
		if (lastCheck[lastCheck.length-1].startsWith("forest")) {Game.current_forest_keys -= 1;}
		if (lastCheck[lastCheck.length-1].startsWith("fire")) {Game.current_fire_keys -= 1;}
		if (lastCheck[lastCheck.length-1].startsWith("water")) {Game.current_water_keys -= 1;}
		if (lastCheck[lastCheck.length-1].startsWith("spirit")) {Game.current_spirit_keys -= 1;}
		if (lastCheck[lastCheck.length-1].startsWith("shadow")) {Game.current_shadow_keys -= 1;}
		if (lastCheck[lastCheck.length-1].startsWith("gtg")) {Game.current_gtg_keys -= 1;}
		if (lastCheck[lastCheck.length-1].startsWith("well")) {Game.current_well_keys -= 1;}
	}
	
	if (Check[lastCheck[lastCheck.length-1]] == "boss_key") {
		if (lastCheck[lastCheck.length-1].startsWith("forest")) {Game.forest_boss_key = false;}
		if (lastCheck[lastCheck.length-1].startsWith("fire")) {Game.fire_boss_key = false;}
		if (lastCheck[lastCheck.length-1].startsWith("water")) {Game.water_boss_key = false;}
		if (lastCheck[lastCheck.length-1].startsWith("spirit")) {Game.spirit_boss_key = false;}
		if (lastCheck[lastCheck.length-1].startsWith("shadow")) {Game.shadow_boss_key = false;}
	}

	if (Check[lastCheck[lastCheck.length-1]] != "unknown" && Check[lastCheck[lastCheck.length-1]] != "small_key" && Check[lastCheck[lastCheck.length-1]] != "boss_key")
	{
		if (lastCheck[lastCheck.length-1].startsWith("forest")) {Game.forest_checks_remaining += 1;}
		if (lastCheck[lastCheck.length-1].startsWith("fire")) {Game.fire_checks_remaining += 1;}
		if (lastCheck[lastCheck.length-1].startsWith("water")) {Game.water_checks_remaining += 1;}
		if (lastCheck[lastCheck.length-1].startsWith("spirit")) {Game.spirit_checks_remaining += 1;}
		if (lastCheck[lastCheck.length-1].startsWith("shadow")) {Game.shadow_checks_remaining += 1;}
		if (lastCheck[lastCheck.length-1].startsWith("gtg")) {Game.gtg_checks_remaining += 1;}
		if (lastCheck[lastCheck.length-1].startsWith("well")) {Game.well_checks_remaining += 1;}
		Game.checks_remaining += 1;
		if (Check[lastCheck[lastCheck.length-1]] == "claim_check" || Check[lastCheck[lastCheck.length-1]] == "prescription") {
			document.getElementById("trade_location").innerHTML = "Trade -> ";
			document.getElementById("trade_location").style.color = "black";
		}
		else if (Check[lastCheck[lastCheck.length-1]] != "junk") {
			document.getElementById(Check[lastCheck[lastCheck.length-1]] + "_location").innerHTML = document.getElementById(Check[lastCheck[lastCheck.length-1]] + "_location").innerHTML.split('-&gt; ')[0];
			document.getElementById(Check[lastCheck[lastCheck.length-1]] + "_location").style.color = "black";
		}
	}
	Location[Check[lastCheck[lastCheck.length-1]]] = "unknown";
	Game[Check[lastCheck[lastCheck.length-1]]] = false;
	Known[Check[lastCheck[lastCheck.length-1]]] = false;
	Logic[Check[lastCheck[lastCheck.length-1]]] = false;
	Check[lastCheck[lastCheck.length-1]] = "unknown";
	lastCheck.pop();
	Update();Update();Update();
}