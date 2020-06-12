
function process_inputs() {
	var temp = 0;
	var peeked = false;
	for (const key of Object.keys(Location_Logic)) {
		if (temp == 256) {break; }
		temp +=1;
		if(Check[key] != "unknown" && checkedYet[temp-1] == false) {checkedYet[temp - 1] = true; textBlock += "" + tempHours + "h " + tempMinutes + "m " + tempSeconds + "s " + Names[temp-1] + "\n"};
		if(Check[key] != "unknown") {continue;}
		hinted = false;
		if (isUpperCase(document.getElementById(key).value.charAt(2)) && document.getElementById(key).value.length == 3) {
			peeked = true;
			document.getElementById(key).value = document.getElementById(key).value.toLowerCase();
		}
		else if (isUpperCase(document.getElementById(key).value.charAt(0)) && document.getElementById(key).value.length == 3){
			hinted = true;
			document.getElementById(key).value = document.getElementById(key).value.toLowerCase();
		}

		if (temp <= 244) { 

			if (document.getElementById(key).value == "junk" && Check[key] == "unknown") {junk(document.getElementById(key), "left");}
			if (document.getElementById(key).value == "small_key" && Check[key] == "unknown") {junk(document.getElementById(key), "right");}
			if (document.getElementById(key).value == "boss_key" && Check[key] == "unknown") {junk(document.getElementById(key), "middle");}

			if (document.getElementById(key).value == "far" && !Known.farores_wind) {var obj = "far"; Check[document.getElementById(key).id] = "farores_wind"; Location.farores_wind = document.getElementById(key).id; document.getElementById("farores_wind_location").innerHTML = Names[temp-1]; Known.farores_wind = true; if (!hinted && !peeked) {Game.farores_wind = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Farores" + "<br />";} junkItem(document.getElementById(key), obj);  continue;}
			if (document.getElementById(key).value == "chu") {var obj = "chu"; Check[document.getElementById(key).id] = "bombchus"; Location.bombchus = document.getElementById(key).id; document.getElementById("bombchus_location").innerHTML = Names[temp-1]; Known.bombchus = true; if (!hinted && !peeked) {} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  BombChus" + "<br />";} junkItem(document.getElementById(key), obj); if (!Game.has_chus) {enableChus();} continue;}
		
			if (document.getElementById(key).value == "sli" && !Known.slingshot1) {var obj = "sli"; Check[document.getElementById(key).id] = "slingshot1"; Location.slingshot1 = document.getElementById(key).id; document.getElementById("slingshot1_location").innerHTML = Names[temp-1]; Known.slingshot1 = true; if (!hinted && !peeked) {Game.slingshot1 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Slingshot" + "<br />";} junkItem(document.getElementById(key), obj);  continue;}
			else if (document.getElementById(key).value == "sli" && !Known.slingshot2) {var obj = "sli"; Check[document.getElementById(key).id] = "slingshot2"; Location.slingshot2 = document.getElementById(key).id; document.getElementById("slingshot2_location").innerHTML = Names[temp-1]; Known.slingshot2 = true; if (!hinted && !peeked) {Game.slingshot2 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Slingshot" + "<br />";} junkItem(document.getElementById(key), obj);  continue;}
			else if (document.getElementById(key).value == "sli" && !Known.slingshot3) {var obj = "sli"; Check[document.getElementById(key).id] = "slingshot3";Location.slingshot3 = document.getElementById(key).id; document.getElementById("slingshot3_location").innerHTML = Names[temp-1]; Known.slingshot3 = true; if (!hinted && !peeked) {Game.slingshot3 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Slingshot" + "<br />";} junkItem(document.getElementById(key), obj);  continue;}
			
			if (document.getElementById(key).value == "boo" && !Known.boomerang) {var obj = "boo"; Check[document.getElementById(key).id] = "boomerang"; Location.boomerang = document.getElementById(key).id; document.getElementById("boomerang_location").innerHTML = Names[temp-1]; Known.boomerang = true; if (!hinted && !peeked) {Game.boomerang = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Boomerang" + "<br />";} junkItem(document.getElementById(key), obj);  continue;}
			
			if (document.getElementById(key).value == "sca" && !Known.scale1) {var obj = "sca"; Check[document.getElementById(key).id] = "scale1"; Location.scale1 = document.getElementById(key).id; document.getElementById("scale1_location").innerHTML = Names[temp-1]; Known.scale1 = true; if (!hinted && !peeked) {Game.scale1 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Scale" + "<br />";} junkItem(document.getElementById(key), obj);  continue;}
			else if (document.getElementById(key).value == "sca" && !Known.scale2) {var obj = "sca"; Check[document.getElementById(key).id] = "scale2";Location.scale2 = document.getElementById(key).id; document.getElementById("scale2_location").innerHTML = Names[temp-1]; Known.scale2 = true; if (!hinted && !peeked) {Game.scale2 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Scale" + "<br />";} junkItem(document.getElementById(key), obj);  continue;}
			
			if (document.getElementById(key).value == "rut" && !Known.rutos_letter) {var obj = "rut"; Check[document.getElementById(key).id] = "rutos_letter"; Location.rutos_letter = document.getElementById(key).id; document.getElementById("rutos_letter_location").innerHTML = Names[temp-1]; Known.rutos_letter = true; if (!hinted && !peeked) {Game.rutos_letter = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Letter" + "<br />";} junkItem(document.getElementById(key), obj);  continue;}
			
			if (document.getElementById(key).value == "bot" && !Known.bottle1) {var obj = "bot"; Check[document.getElementById(key).id] = "bottle1"; Location.bottle1 = document.getElementById(key).id; document.getElementById("bottle1_location").innerHTML = Names[temp-1]; Known.bottle1 = true; if (!hinted && !peeked) {Game.bottle1 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Bottle" + "<br />";} junkItem(document.getElementById(key), obj);  continue;}
			else if (document.getElementById(key).value == "bot" && !Known.bottle2) {var obj = "bot"; Check[document.getElementById(key).id] = "bottle2"; Location.bottle2 = document.getElementById(key).id; document.getElementById("bottle2_location").innerHTML = Names[temp-1]; Known.bottle2 = true; if (!hinted && !peeked) {Game.bottle2 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Bottle" + "<br />";} junkItem(document.getElementById(key), obj);  continue;}
			else if (document.getElementById(key).value == "bot" && !Known.bottle3) {var obj = "bot"; Check[document.getElementById(key).id] = "bottle3"; Location.bottle3 = document.getElementById(key).id; document.getElementById("bottle3_location").innerHTML = Names[temp-1]; Known.bottle3 = true; if (!hinted && !peeked) {Game.bottle3 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Bottle" + "<br />";} junkItem(document.getElementById(key), obj);  continue;}
			
			if (document.getElementById(key).value == "big" && !Known.bottle1) {var obj = "big"; Check[document.getElementById(key).id] = "big_poe1";Location.bottle1 = document.getElementById(key).id; Location.big1= document.getElementById(key).id; document.getElementById("bottle1_location").innerHTML = Names[temp-1]; Known.bottle1 = true; Known.big_poe = true; if (!hinted && !peeked) {Game.bottle1 = true; Game.big_poe = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Big Poe" + "<br />";} junkItem(document.getElementById(key), obj);  continue;}
			else if (document.getElementById(key).value == "big" && !Known.bottle2) {var obj = "big"; Check[document.getElementById(key).id] = "big_poe2"; Location.bottle2 = document.getElementById(key).id; Location.big1= document.getElementById(key).id; document.getElementById("bottle2_location").innerHTML = Names[temp-1]; Known.bottle1 = true; Known.big_poe = true; if (!hinted && !peeked) {Game.bottle2 = true; Game.big_poe = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Big Poe" + "<br />";} junkItem(document.getElementById(key), obj);  continue;}
			else if (document.getElementById(key).value == "big" && !Known.bottle3) {var obj = "big"; Check[document.getElementById(key).id] = "big_poe3";Location.bottle3 = document.getElementById(key).id; Location.big1= document.getElementById(key).id; document.getElementById("bottle3_location").innerHTML = Names[temp-1]; Known.bottle1 = true; Known.big_poe = true; if (!hinted && !peeked) {Game.bottle3 = true; Game.big_poe = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Big Poe" + "<br />";} junkItem(document.getElementById(key), obj);  continue;}
			
			if (document.getElementById(key).value == "bom" && !Known.bomb_bag1) {var obj = "bom"; Check[document.getElementById(key).id] = "bomb_bag1"; Location.bomb_bag1 = document.getElementById(key).id; document.getElementById("bomb_bag1_location").innerHTML = Names[temp-1]; Known.bomb_bag1 = true; if (!hinted && !peeked) {Game.bomb_bag1 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Bomb Bag" + "<br />";} junkItem(document.getElementById(key), obj);  continue;}
			else if (document.getElementById(key).value == "bom" && !Known.bomb_bag2) {var obj = "bom"; Check[document.getElementById(key).id] = "bomb_bag2"; Location.bomb_bag2 = document.getElementById(key).id; document.getElementById("bomb_bag2_location").innerHTML = Names[temp-1]; Known.bomb_bag2 = true; if (!hinted && !peeked) {Game.bomb_bag2 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Bomb Bag" + "<br />";} junkItem(document.getElementById(key), obj); continue;}
			else if (document.getElementById(key).value == "bom" && !Known.bomb_bag3) {var obj = "bom"; Check[document.getElementById(key).id] = "bomb_bag3"; Location.bomb_bag3 = document.getElementById(key).id; document.getElementById("bomb_bag3_location").innerHTML = Names[temp-1]; Known.bomb_bag3 = true; if (!hinted && !peeked) {Game.bomb_bag3 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Bomb Bag" + "<br />";} junkItem(document.getElementById(key), obj); continue;}
			
			if (document.getElementById(key).value == "ham" && !Known.hammer) {var obj = "ham"; Check[document.getElementById(key).id] = "hammer"; Location.hammer = document.getElementById(key).id; document.getElementById("hammer_location").innerHTML = Names[temp-1]; Known.hammer = true; if (!hinted && !peeked) {Game.hammer = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Hammer" + "<br />";} junkItem(document.getElementById(key), obj); continue;}
			
			if (document.getElementById(key).value == "bow" && !Known.bow1) {var obj = "bow"; Check[document.getElementById(key).id] = "bow1"; Location.bow1 = document.getElementById(key).id; document.getElementById("bow1_location").innerHTML = Names[temp-1]; Known.bow1 = true; if (!hinted && !peeked) {Game.bow1 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Bow" + "<br />";} junkItem(document.getElementById(key), obj); continue;}
			else if (document.getElementById(key).value == "bow" && !Known.bow2) {var obj = "bow"; Check[document.getElementById(key).id] = "bow2"; Location.bow2 = document.getElementById(key).id; document.getElementById("bow2_location").innerHTML = Names[temp-1]; Known.bow2 = true; if (!hinted && !peeked) {Game.bow2 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Bow" + "<br />";} junkItem(document.getElementById(key), obj); continue;}
			else if (document.getElementById(key).value == "bow" && !Known.bow3) {var obj = "bow"; Check[document.getElementById(key).id] = "bow3";Location.bow3 = document.getElementById(key).id; document.getElementById("bow3_location").innerHTML = Names[temp-1]; Known.bow3 = true; if (!hinted && !peeked) {Game.bow3 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Bow" + "<br />";} junkItem(document.getElementById(key), obj); continue;}
			
			if (document.getElementById(key).value == "hoo" && !Known.hookshot1) {var obj = "hoo"; Check[document.getElementById(key).id] = "hookshot1";Location.hookshot1 = document.getElementById(key).id; document.getElementById("hookshot1_location").innerHTML = Names[temp-1]; Known.hookshot1 = true; if (!hinted && !peeked) {Game.hookshot1 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Hookshot" + "<br />";} junkItem(document.getElementById(key), obj); continue;}
			else if (document.getElementById(key).value == "hoo" && !Known.hookshot2) {var obj = "hoo"; Check[document.getElementById(key).id] = "hookshot2";Location.hookshot2 = document.getElementById(key).id; document.getElementById("hookshot2_location").innerHTML = Names[temp-1]; Known.hookshot2 = true; if (!hinted && !peeked) {Game.hookshot2 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Hookshot" + "<br />";} junkItem(document.getElementById(key), obj); continue;}
			
			if (document.getElementById(key).value == "str" && !Known.strength1) {var obj = "str"; Check[document.getElementById(key).id] = "strength1"; Location.strength1 = document.getElementById(key).id; document.getElementById("strength1_location").innerHTML = Names[temp-1]; Known.strength1 = true; if (!hinted && !peeked) {Game.strength1 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Strength" + "<br />";} junkItem(document.getElementById(key), obj); continue;}
			else if (document.getElementById(key).value == "str" && !Known.strength2) {var obj = "str"; Check[document.getElementById(key).id] = "strength2"; Location.strength2 = document.getElementById(key).id; document.getElementById("strength2_location").innerHTML = Names[temp-1]; Known.strength2 = true; if (!hinted && !peeked) {Game.strength2 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Strength" + "<br />";} junkItem(document.getElementById(key), obj); continue;}
			else if (document.getElementById(key).value == "str" && !Known.strength3) {var obj = "str"; Check[document.getElementById(key).id] = "strength3";Location.strength3 = document.getElementById(key).id; document.getElementById("strength3_location").innerHTML = Names[temp-1]; Known.strength3 = true; if (!hinted && !peeked) {Game.strength3 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Strength" + "<br />";}junkItem(document.getElementById(key), obj); continue;}
			
			if (document.getElementById(key).value == "mir" && !Known.mirror_shield) {var obj = "mir"; Check[document.getElementById(key).id] = "mirror_shield"; Location.mirror_shield = document.getElementById(key).id; document.getElementById("mirror_shield_location").innerHTML = Names[temp-1]; Known.mirror_shield = true; if (!hinted && !peeked) {Game.mirror_shield = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Mirror Shield" + "<br />";} junkItem(document.getElementById(key), obj); continue;}
			
			if (document.getElementById(key).value == "mag" && !Known.magic1) {var obj = "mag"; Check[document.getElementById(key).id] = "magic1"; Location.magic1 = document.getElementById(key).id; document.getElementById("magic1_location").innerHTML = Names[temp-1]; Known.magic1 = true; if (!hinted && !peeked) {Game.magic1 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Magic" + "<br />";} junkItem(document.getElementById(key), obj); continue;}
			else if (document.getElementById(key).value == "mag" && !Known.magic2) {var obj = "mag"; Check[document.getElementById(key).id] = "magic2"; Location.magic2 = document.getElementById(key).id; document.getElementById("magic2_location").innerHTML = Names[temp-1]; Known.magic2 = true; if (!hinted && !peeked) {Game.magic2 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Magic" + "<br />";}junkItem(document.getElementById(key), obj); continue;}
			
			if (document.getElementById(key).value == "iro" && !Known.iron_boots) {var obj = "iro"; Check[document.getElementById(key).id] = "iron_boots";Location.iron_boots = document.getElementById(key).id; document.getElementById("iron_boots_location").innerHTML = Names[temp-1]; Known.iron_boots = true; if (!hinted && !peeked) {Game.iron_boots = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Iron Boots" + "<br />";} junkItem(document.getElementById(key), obj); continue;}
			if (document.getElementById(key).value == "hov" && !Known.hover_boots) {var obj = "hov"; Check[document.getElementById(key).id] = "hover_boots";Location.hover_boots = document.getElementById(key).id; document.getElementById("hover_boots_location").innerHTML = Names[temp-1]; Known.hover_boots = true; if (!hinted && !peeked) {Game.hover_boots = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Hover Boots" + "<br />";}junkItem(document.getElementById(key), obj); continue;}
			
			if (document.getElementById(key).value == "wal" && !Known.wallet1) {var obj = "wal"; Check[document.getElementById(key).id] = "wallet1";Location.wallet1 = document.getElementById(key).id; document.getElementById("wallet1_location").innerHTML = Names[temp-1]; Known.wallet1 = true; if (!hinted && !peeked) {Game.wallet1 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Wallet" + "<br />";} junkItem(document.getElementById(key), obj); continue;}
			else if (document.getElementById(key).value == "wal" && !Known.wallet2) {var obj = "wal"; Check[document.getElementById(key).id] = "wallet2";Location.wallet2 = document.getElementById(key).id; document.getElementById("wallet2_location").innerHTML = Names[temp-1]; Known.wallet2 = true; if (!hinted && !peeked) {Game.wallet2 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Wallet" + "<br />";} junkItem(document.getElementById(key), obj); continue;}
			
			if (document.getElementById(key).value == "gor" && !Known.goron_tunic) {var obj = "gor"; Check[document.getElementById(key).id] = "goron_tunic";Location.goron_tunic = document.getElementById(key).id; document.getElementById("goron_tunic_location").innerHTML = Names[temp-1]; Known.goron_tunic = true; if (!hinted && !peeked) {Game.goron_tunic = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Goron Tunic" + "<br />";} junkItem(document.getElementById(key), obj); continue;}
			if (document.getElementById(key).value == "zor" && !Known.zora_tunic) {var obj = "zor"; Check[document.getElementById(key).id] = "zora_tunic";Location.zora_tunic = document.getElementById(key).id; document.getElementById("zora_tunic_location").innerHTML = Names[temp-1]; Known.zora_tunic = true; if (!hinted && !peeked) {Game.zora_tunic = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Zora Tunic" + "<br />";}junkItem(document.getElementById(key), obj); continue;}
			if (document.getElementById(key).value == "din" && !Known.dins_fire) {var obj = "din"; Check[document.getElementById(key).id] = "dins_fire";Location.dins_fire = document.getElementById(key).id; document.getElementById("dins_fire_location").innerHTML = Names[temp-1]; Known.dins_fire = true; if (!hinted && !peeked) {Game.dins_fire = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Din's Fire" + "<br />";} junkItem(document.getElementById(key), obj); continue;}
			if (document.getElementById(key).value == "fir" && !Known.fire_arrows) {var obj = "fir"; Check[document.getElementById(key).id] = "fire_arrows"; Location.fire_arrows = document.getElementById(key).id; document.getElementById("fire_arrows_location").innerHTML = Names[temp-1]; Known.fire_arrows = true; if (!hinted && !peeked) {Game.fire_arrows = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Fire Arrows" + "<br />";} junkItem(document.getElementById(key), obj); continue;}
			if (document.getElementById(key).value == "len" && !Known.lens_of_truth) {var obj = "len"; Check[document.getElementById(key).id] = "lens_of_truth";Location.lens_of_truth = document.getElementById(key).id; document.getElementById("lens_of_truth_location").innerHTML = Names[temp-1]; Known.lens_of_truth = true; if (!hinted && !peeked) {Game.lens_of_truth = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Lens" + "<br />";} junkItem(document.getElementById(key), obj); continue;}
			if (document.getElementById(key).value == "sto" && !Known.stone_of_agony) {var obj = "sto"; Location.stone_of_agony = document.getElementById(key).id; Known.stone_of_agony = true; if (!hinted && !peeked) {Game.stone_of_agony = true;} junkItem(document.getElementById(key), obj); continue;}
			if ((document.getElementById(key).value == "pre" || document.getElementById(key).value == "eye" || document.getElementById(key).value == "dro") && (!Known.prescription || !Known.claim_check)) {var obj = "pre"; Check[document.getElementById(key).id] = "prescription";Location.prescription = document.getElementById(key).id; document.getElementById("trade_location").innerHTML = Names[temp-1]; Known.prescription = true; if (!hinted && !peeked) {Game.prescription = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Prescription" + "<br />";}junkItem(document.getElementById(key), obj); continue;}
			if (document.getElementById(key).value == "cla" && (!Known.prescription || !Known.claim_check)) {var obj = "cla"; Check[document.getElementById(key).id] = "claim_check";Location.claim_check = document.getElementById(key).id; document.getElementById("trade_location").innerHTML = "Claim -> " + Names[temp-1]; Known.claim_check = true; if (!hinted && !peeked) {Game.claim_check = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Claim Check" + "<br />";} junkItem(document.getElementById(key), obj); continue;}
			
			if (document.getElementById(key).value == "lig" && !Known.light_arrows) {var obj = "lig"; Check[document.getElementById(key).id] = "light_arrows"; Location.light_arrows = document.getElementById(key).id; document.getElementById("light_arrows_location").innerHTML = Names[temp-1]; Known.light_arrows = true; if (!hinted && !peeked) {Game.light_arrows = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Light Arrows" + "<br />";}junkItem(document.getElementById(key), obj); continue;}
			
		}
		else {
			if (document.getElementById(key).value == "lul" && !Known.lullaby) {var obj = "lul"; Check[document.getElementById(key).id] = "lullaby";Location.lullaby = document.getElementById(key).id; Known.lullaby = true; if (!hinted && !peeked) {Game.lullaby = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Lullaby" + "<br />";} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Lullaby"; backUp[temp-1] += ": Lullaby"; junkSong(document.getElementById(key), obj); continue;}
			if (document.getElementById(key).value == "epo" && !Known.eponas) {var obj = "epo"; Check[document.getElementById(key).id] = "eponas";Location.eponas = document.getElementById(key).id; Known.eponas = true; if (!hinted && !peeked) {Game.eponas = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Eponas" + "<br />";} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Epona's"; backUp[temp-1] += ": Epona's"; junkSong(document.getElementById(key), obj); continue;}
			if (document.getElementById(key).value == "sar" && !Known.sarias) {var obj = "sar"; Check[document.getElementById(key).id] = "sarias";Location.sarias = document.getElementById(key).id; Known.sarias = true; if (!hinted && !peeked) {Game.sarias = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Sarias" + "<br />";}var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Saria's"; backUp[temp-1] += ": Saria's"; junkSong(document.getElementById(key), obj); continue;}
			if (document.getElementById(key).value == "sun" && !Known.suns_song) {var obj = "sun"; Check[document.getElementById(key).id] = "suns";Location.suns_song = document.getElementById(key).id; Known.suns_song = true; if (!hinted && !peeked) {Game.suns_song = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Suns" + "<br />";} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Sun's"; backUp[temp-1] += ": Sun's"; junkSong(document.getElementById(key), obj); continue;}
			if (document.getElementById(key).value == "sot" && !Known.song_of_time) {var obj = "sot"; Check[document.getElementById(key).id] = "sot";Location.song_of_time = document.getElementById(key).id; Known.song_of_time = true; if (!hinted && !peeked) {Game.song_of_time = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Time" + "<br />";}var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Time"; backUp[temp-1] += ": Time"; junkSong(document.getElementById(key), obj); continue;}
			if (document.getElementById(key).value == "sos" && !Known.song_of_storms) {var obj = "sos"; Check[document.getElementById(key).id] = "sos"; Location.song_of_storms = document.getElementById(key).id; Known.song_of_storms = true; if (!hinted && !peeked) {Game.song_of_storms = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Storms" + "<br />";} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Storms"; backUp[temp-1] += ": Storms"; junkSong(document.getElementById(key), obj); continue;}
			if (document.getElementById(key).value == "min" && !Known.minuet) {var obj = "min"; Check[document.getElementById(key).id] = "minuet"; Location.minuet = document.getElementById(key).id; Known.minuet = true; if (!hinted && !peeked) {Game.minuet = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Minuet" + "<br />";} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Minuet"; backUp[temp-1] += ": Minuet"; junkSong(document.getElementById(key), obj); continue;}
			if (document.getElementById(key).value == "bol" && !Known.bolero) {var obj = "bol"; Check[document.getElementById(key).id] = "bolero";Location.bolero = document.getElementById(key).id; Known.bolero = true; if (!hinted && !peeked) {Game.bolero = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Bolero" + "<br />";} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Bolero"; backUp[temp-1] += ": Bolero"; junkSong(document.getElementById(key), obj); continue;}
			if (document.getElementById(key).value == "ser" && !Known.serenade) {var obj = "ser"; Check[document.getElementById(key).id] = "serenade";Location.serenade = document.getElementById(key).id; Known.serenade = true; if (!hinted && !peeked) {Game.serenade = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Serenade" + "<br />";} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Serenade"; backUp[temp-1] += ": Serenade"; junkSong(document.getElementById(key), obj); continue;}
			if (document.getElementById(key).value == "req" && !Known.requiem) {var obj = "req"; Check[document.getElementById(key).id] = "requiem";Location.requiem = document.getElementById(key).id; Known.requiem = true; if (!hinted && !peeked) {Game.requiem = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Requiem" + "<br />";}var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Requiem"; backUp[temp-1] += ": Requiem"; junkSong(document.getElementById(key), obj); continue;}
			if (document.getElementById(key).value == "noc" && !Known.nocturne) {var obj = "noc"; Check[document.getElementById(key).id] = "nocturne";Location.nocturne = document.getElementById(key).id; Known.nocturne = true; if (!hinted && !peeked) {Game.nocturne = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Nocturne" + "<br />";} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Nocturne"; backUp[temp-1] += ": Nocturne"; junkSong(document.getElementById(key), obj); continue;}
			if (document.getElementById(key).value == "pre" && !Known.prelude) {var obj = "pre"; Check[document.getElementById(key).id] = "prelude";Location.prelude = document.getElementById(key).id; Known.prelude = true; if (!hinted && !peeked) {Game.prelude = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Prelude" + "<br />";} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Prelude"; backUp[temp-1] += ": Prelude"; junkSong(document.getElementById(key), obj); continue;}
		}
	}
	
	Update(); Update(); Update();
}

function stone_medallion_input() {
	var str = document.getElementById("markStones").value.substring(0,2);
		
	if (!hasChangedMedal) {
		document.getElementById("text_dung7").style.color = "yellow";
		document.getElementById("text_dung8").style.color = "yellow";
		document.getElementById("text_dung9").style.color = "yellow";
	}
	dekuPlacement = "unknown";
	dodongosPlacement = "unknown";
	jabuPlacement = "unknown";
	forestPlacement = "unknown";
	firePlacement = "unknown";
	waterPlacement = "unknown";
	spiritPlacement = "unknown";
	shadowPlacement = "unknown";
	pocketPlacement = "unknown";
		
	for (var i = 1; i<=9; i++) {
		
		Logic["dung" + i] = "unknown";
		document.getElementById("dung" + i + "_icon").src = dungIconSources[i-1];
		document.getElementById("dung" + i + "_req1").removeAttribute('src');
		document.getElementById("dung" + i + "_req2").removeAttribute('src');
		document.getElementById("dung" + i + "_req3").removeAttribute('src');
		document.getElementById("dung" + i + "_req4").removeAttribute('src');
		document.getElementById("dung" + i + "_req5").removeAttribute('src');
		document.getElementById("dung" + i + "_req1").removeAttribute('class');
		document.getElementById("dung" + i + "_req2").removeAttribute('class');
		document.getElementById("dung" + i + "_req3").removeAttribute('class');
		document.getElementById("dung" + i + "_req4").removeAttribute('class');
		document.getElementById("dung" + i + "_req5").removeAttribute('class');
		document.getElementById("dung" + i + "_text2").innerHTML ="";
		document.getElementById("dung" + i + "_text3").innerHTML ="";
		
		if (i <= 3) {document.getElementById("dung" + i + "_icon").className = "stones";}
		
		if (str == "de") {Logic["dung" + i] = "deku"; document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "dek"; dekuPlacement = "dung" + i;}
		else if (str == "do") {Logic["dung" + i]= "dodongos"; document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "dod"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Game.bomb_bag_img; dodongosPlacement = "dung" + i;}
		else if (str == "ja") {Logic["dung" + i] = "jabu"; document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "jab"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Game.letter_img; document.getElementById("dung" + i + "_req2").src=Game.boomerang_img; jabuPlacement = "dung" + i;}
		else if (str == "fo") {Logic["dung" + i] = "forest"; document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "for"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req3").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Game.hookshot_img; document.getElementById("dung" + i + "_req2").src=Game.bow_img; document.getElementById("dung" + i + "_req3").src=Game.goron_bracelet_img; forestPlacement = "dung" + i;}
		else if (str == "fi") {Logic["dung" + i] = "fire"; document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "fir"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Game.hammer_img; firePlacement = "dung" + i;}
		else if (str == "wa") {Logic["dung" + i] = "water"; document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "wat"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req3").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Game.iron_boots_img; document.getElementById("dung" + i + "_text2").innerHTML ="/"; document.getElementById("dung" + i + "_req2").src=Game.golden_scale_img; document.getElementById("dung" + i + "_text3").innerHTML = "+"; document.getElementById("dung" + i + "_req3").src=Game.longshot_img; waterPlacement = "dung" + i;}
		else if (str == "sp") {Logic["dung" + i] = "spirit"; document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "spi"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req3").className = "requirements"; document.getElementById("dung" + i + "_req4").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Game.silver_gauntlets_img; document.getElementById("dung" + i + "_req2").src=Game.mirror_shield_img; document.getElementById("dung" + i + "_req3").src=Game.bomb_bag_img; document.getElementById("dung" + i + "_req4").src=Game.hookshot_img; spiritPlacement = "dung" + i;}
		else if (str == "sh") {Logic["dung" + i] = "shadow"; document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "sha"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req3").className = "requirements"; document.getElementById("dung" + i + "_req4").className = "requirements"; document.getElementById("dung" + i + "_req5").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Game.dins_fire_img; document.getElementById("dung" + i + "_req2").src =Game.magic_meter_img; document.getElementById("dung" + i + "_req3").src=Game.hover_boots_img; document.getElementById("dung" + i + "_req4").src=Game.bomb_bag_img; document.getElementById("dung" + i + "_req5").src=Game.hookshot_img; shadowPlacement = "dung" + i;}
		else if (str == "fr" || str == "kk") {Logic["dung" + i] = "pocket"; document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "pok"; pocketPlacement = "dung" + i;}
		else {
			document.getElementById("dung" + i + "_icon").removeAttribute('src'); 
			document.getElementById("dung" + i + "_icon").removeAttribute('class');
		}
		
		if (i == 1) {str = document.getElementById("markStones").value.substring(2,4);} 
		else if (i == 2) {str = document.getElementById("markStones").value.substring(4,6);} 
		else if (i == 3) {str = document.getElementById("markMedallions").value.substring(0,2);}
		else if (i == 4) {str = document.getElementById("markMedallions").value.substring(2,4);}
		else if (i == 5) {str = document.getElementById("markMedallions").value.substring(4,6);}
		else if (i == 6) {str = document.getElementById("markMedallions").value.substring(6,8);}
		else if (i == 7) {str = document.getElementById("markMedallions").value.substring(8,10);}
		else if (i == 8) {str = document.getElementById("markMedallions").value.substring(10,12);}
	}
	
	if (Logic.dung7 != "unknown") {Logic.shadow_medallion = Logic.dung7; document.getElementById("text_dung7").style.color = "rgb(238, 130, 238)"; document.getElementById("dung7_icon").src = "./normal/shadow_medallion.png";}
	if (Logic.dung8 != "unknown") {Logic.spirit_medallion = Logic.dung8; document.getElementById("text_dung8").style.color = "rgb(255, 165, 0)"; document.getElementById("dung8_icon").src = "./normal/spirit_medallion.png";}
	
	for (var i = 1; i<= 9; i++) {
		if (dekuPlacement == "unknown" && Logic["dung" + i] == "unknown") {if (Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown" && Logic.dung7 != "unknown" && Logic.dung8 != "unknown" && Logic.dung9 != "unknown") {Logic["dung" + i] = "deku"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i-1]; document.getElementById("dung" + i + "_icon").className = "stones";} if (Logic.dung1 != "unknown" && Logic.dung2 != "unknown" && Logic.dung3 != "unknown" && Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown") {Logic["dung" + i] = "deku"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8];} document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "dek"; dekuPlacement = "dung" + i;}
		else if (dodongosPlacement == "unknown" && Logic["dung" + i] == "unknown") {if (Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown" && Logic.dung7 != "unknown" && Logic.dung8 != "unknown" && Logic.dung9 != "unknown") {Logic["dung" + i] = "dodongos"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i-1]; document.getElementById("dung" + i + "_icon").className = "stones";} if (Logic.dung1 != "unknown" && Logic.dung2 != "unknown" && Logic.dung3 != "unknown" && Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown") {Logic["dung" + i] = "dodongos"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8];} document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "dod"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Game.bomb_bag_img; dodongosPlacement = "dung" + i;}
		else if (jabuPlacement == "unknown" && Logic["dung" + i] == "unknown") {if (Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown" && Logic.dung7 != "unknown" && Logic.dung8 != "unknown" && Logic.dung9 != "unknown") {Logic["dung" + i] = "jabu"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i-1]; document.getElementById("dung" + i + "_icon").className = "stones";} if (Logic.dung1 != "unknown" && Logic.dung2 != "unknown" && Logic.dung3 != "unknown" && Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown") {Logic["dung" + i] = "jabu"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8];} document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "jab"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Game.letter_img; document.getElementById("dung" + i + "_req2").src=Game.boomerang_img; jabuPlacement = "dung" + i;}
		else if (forestPlacement == "unknown" && Logic["dung" + i] == "unknown") {if (Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown" && Logic.dung7 != "unknown" && Logic.dung8 != "unknown" && Logic.dung9 != "unknown") {Logic["dung" + i] = "forest"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i-1]; document.getElementById("dung" + i + "_icon").className = "stones";} if (Logic.dung1 != "unknown" && Logic.dung2 != "unknown" && Logic.dung3 != "unknown" && Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown") {Logic["dung" + i] = "forest"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8];} document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "for"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req3").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Game.hookshot_img; document.getElementById("dung" + i + "_req2").src=Game.bow_img; document.getElementById("dung" + i + "_req3").src=Game.goron_bracelet_img; forestPlacement = "dung" + i;}
		else if (firePlacement == "unknown" && Logic["dung" + i] == "unknown") {if (Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown" && Logic.dung7 != "unknown" && Logic.dung8 != "unknown" && Logic.dung9 != "unknown") {Logic["dung" + i] = "fire"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i-1]; document.getElementById("dung" + i + "_icon").className = "stones";} if (Logic.dung1 != "unknown" && Logic.dung2 != "unknown" && Logic.dung3 != "unknown" && Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown") {Logic["dung" + i] = "fire"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8];} document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "fir"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Game.hammer_img; firePlacement = "dung" + i;}
		else if (waterPlacement == "unknown" && Logic["dung" + i] == "unknown") {if (Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown" && Logic.dung7 != "unknown" && Logic.dung8 != "unknown" && Logic.dung9 != "unknown") {Logic["dung" + i] = "water"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i-1]; document.getElementById("dung" + i + "_icon").className = "stones";} if (Logic.dung1 != "unknown" && Logic.dung2 != "unknown" && Logic.dung3 != "unknown" && Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown") {Logic["dung" + i] = "water"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8];} document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "wat"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req3").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Game.iron_boots_img; document.getElementById("dung" + i + "_text2").innerHTML ="/"; document.getElementById("dung" + i + "_req2").src=Game.golden_scale_img; document.getElementById("dung" + i + "_text3").innerHTML = "+"; document.getElementById("dung" + i + "_req3").src=Game.longshot_img; waterPlacement = "dung" + i;}
		else if (spiritPlacement == "unknown" && Logic["dung" + i] == "unknown") {if (Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown" && Logic.dung7 != "unknown" && Logic.dung8 != "unknown" && Logic.dung9 != "unknown") {Logic["dung" + i] = "spirit"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i-1]; document.getElementById("dung" + i + "_icon").className = "stones";} if (Logic.dung1 != "unknown" && Logic.dung2 != "unknown" && Logic.dung3 != "unknown" && Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown") {Logic["dung" + i] = "spirit"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8];} document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "spi"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req3").className = "requirements"; document.getElementById("dung" + i + "_req4").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Game.silver_gauntlets_img; document.getElementById("dung" + i + "_req2").src=Game.mirror_shield_img; document.getElementById("dung" + i + "_req3").src=Game.bomb_bag_img; document.getElementById("dung" + i + "_req4").src=Game.hookshot_img; spiritPlacement = "dung" + i;}
		else if (shadowPlacement == "unknown" && Logic["dung" + i] == "unknown") {if (Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown" && Logic.dung7 != "unknown" && Logic.dung8 != "unknown" && Logic.dung9 != "unknown") {Logic["dung" + i] = "shadow"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i-1]; document.getElementById("dung" + i + "_icon").className = "stones";} if (Logic.dung1 != "unknown" && Logic.dung2 != "unknown" && Logic.dung3 != "unknown" && Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown") {Logic["dung" + i] = "shadow"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8];} document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "sha"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req3").className = "requirements"; document.getElementById("dung" + i + "_req4").className = "requirements"; document.getElementById("dung" + i + "_req5").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Game.dins_fire_img; document.getElementById("dung" + i + "_req2").src =Game.magic_meter_img; document.getElementById("dung" + i + "_req3").src=Game.hover_boots_img; document.getElementById("dung" + i + "_req4").src=Game.bomb_bag_img; document.getElementById("dung" + i + "_req5").src=Game.hookshot_img; shadowPlacement = "dung" + i;}
		else if (pocketPlacement == "unknown" && Logic["dung" + i] == "unknown") {if (Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown" && Logic.dung7 != "unknown" && Logic.dung8 != "unknown" && Logic.dung9 != "unknown") {Logic["dung" + i] = "pocket"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i-1]; document.getElementById("dung" + i + "_icon").className = "stones";} if (Logic.dung1 != "unknown" && Logic.dung2 != "unknown" && Logic.dung3 != "unknown" && Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown") {Logic["dung" + i] = "pocket"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8];} document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "pok"; pocketPlacement = "dung" + i;}
	}
	
	Logic.emerald = Logic.dung1;
	Logic.ruby = Logic.dung2;
	Logic.sapphire = Logic.dung3;
	Logic.forest_medallion_location = Logic.dung4;
	Logic.fire_medallion_location = Logic.dung5;
	Logic.water_medallion_location = Logic.dung6;
	Logic.generic1 = Logic.dung7;
	Logic.generic2 = Logic.dung8;
	Logic.generic3 = Logic.dung9;	

	handleDungeonHighlights();	
}

function junk(x, evt = "") {
	var type = "";
	var altKey = "";
	var str = x.id;
	if (evt == "left") {
		type = 0;  
	} else if (evt == "right") {
		type = 2;
	} else if (evt == "middle") {
		type = 1;
	} else {
		str = str.substring('text_'.length); 
		type = event.button; 
		altKey = event.altKey;
	}

	var temp = Locations.indexOf(str);

	if(type == 0 && !altKey) {
		if(str.startsWith("forest") && Game.forest_checks_remaining != 0) {Game.forest_checks_remaining -=1;}
		else if(str.startsWith("fire") && Game.fire_checks_remaining != 0 && str != "fire_grave") {Game.fire_checks_remaining -=1;}
		else if(str.startsWith("water") && Game.water_checks_remaining != 0) {Game.water_checks_remaining -=1;}
		else if(str.startsWith("spirit") && Game.spirit_checks_remaining != 0) {Game.spirit_checks_remaining -=1;}
		else if(str.startsWith("shadow") && Game.shadow_checks_remaining != 0) {Game.shadow_checks_remaining -=1;}
		else if(str.startsWith("ganons") && Game.ganons_checks_remaining != 0) {Game.ganons_checks_remaining -=1;}
		else if(str.startsWith("gtg") && Game.gtg_checks_remaining != 0) {Game.gtg_checks_remaining -=1;}
		else if(str.startsWith("well") && Game.well_checks_remaining != 0) {Game.well_checks_remaining -=1;}
		else if(temp < 114){}
		else {return;}
		Check[str]="junk";
		if (temp == 44 && Game.deku_checks_remaining == 0) {Game.checks_remaining +=1;}
		if (temp == 66 && Game.dodongos_checks_remaining == 0) {Game.checks_remaining +=1;}
		if (temp == 113 && Game.jabu_checks_remaining == 0) {Game.checks_remaining +=1;}
		Game.checks_remaining -= 1;

		document.getElementById(str).value = "junk";
		ajoutHistorique("junk", str, Hinted[str]);
	}

	else if(type == 1 || (type == 0 && altKey) || thisIsABossKey) {
		if(str.startsWith("forest") && !Game.forest_boss_key) {Game.forest_boss_key = true; Location.forest_boss_key = str;}
		else if(str.startsWith("fire") && !Game.fire_boss_key) {Game.fire_boss_key = true; Location.fire_boss_key = str;}
		else if(str.startsWith("water") && !Game.water_boss_key) {Game.water_boss_key = true; Location.water_boss_key = str;}
		else if(str.startsWith("spirit") && !Game.spirit_boss_key) {Game.spirit_boss_key = true; Location.spirit_boss_key = str;}
		else if(str.startsWith("shadow") && !Game.shadow_boss_key) {Game.shadow_boss_key = true; Location.shadow_boss_key = str;}
		else if(str.startsWith("ganons") && !Game.ganons_boss_key) {Game.ganons_boss_key = true; Location.ganons_boss_key = str;}
		else {return;}
		if (thisIsABossKey) {temptext2 += Names[temp].split(': ')[1] + ":  Boss Key" + "<br />";}
		Check[str]="boss_key";
		ajoutHistorique("boss_key", str, Hinted[str]);
	}

	else if ((type == 2 && !altKey) || thisIsAKey) {
		if(str.startsWith("forest") && Game.current_forest_keys < 5) {Game.current_forest_keys +=1;}
		else if(str.startsWith("fire") && Game.current_fire_keys < 8) {Game.current_fire_keys +=1;}
		else if(str.startsWith("water") && Game.current_water_keys < 6) {Game.current_water_keys +=1;}
		else if(str.startsWith("spirit") && Game.current_spirit_keys < 5) {Game.current_spirit_keys +=1;}
		else if(str.startsWith("shadow") && Game.current_shadow_keys < 5) {Game.current_shadow_keys +=1;}
		else if(str.startsWith("gtg") && Game.current_gtg_keys < 9) {Game.current_gtg_keys +=1;}
		else if(str.startsWith("well") && Game.current_well_keys < 3) {Game.current_well_keys +=1;}
		else if(str.startsWith("ganons") && Game.current_ganons_keys < 2) {Game.current_ganons_keys +=1;}
		else {
			if (x.style.color == "orange") {x.style.color = "pink";}
			else {x.style.color = "orange";}
			return;
		}
		Check[str]="small_key";
		ajoutHistorique("small_key", str, Hinted[str]);
		if (thisIsAKey) {temptext2 += Names[temp].split(': ')[1] + ":  Small Key" + "<br />";}
	}
	else if (type == 2 && altKey) {
		if (x.style.color == "orange") {x.style.color = "pink";}
		else {x.style.color = "orange";}
		return;
	}
	else {
		Check[str]="junk";
		ajoutHistorique("junk", str, Hinted[str]);
		Game.checks_remaining -=1;
	}

	if (document.getElementById(str).style.display != "none") {
		document.getElementById(str).style.display = "none";
	}
	if (coopmode && type == 1) {
		document.getElementById("text_" + str).style.className = "bk";
	}
	if (coopmode && type == 2) {
		document.getElementById("text_" + str).style.className = "sk";
	}

	if (!coopmode || type == 0){
		if (document.getElementById("text_" + str).style.display != "none") {
			document.getElementById("text_" + str).style.display = "none";
		}
		if (document.getElementById("br_" + str).style.display != "none") {
			document.getElementById("br_" + str).style.display = "none";
		}
	}
	if (!hinted) {
		lastCheck = str;
	}
	
	Update();Update();Update();
}	

function junkUltra(x) {
	if (x.id == "forest") {var temp = 14; var temp2 = Game.forest_checks_remaining; Game.forest_checks_remaining = 0; Logic.forced_forest_keys = 5 - Game.current_forest_keys; if (Game.forest_boss_key == false) {Logic.forced_forest_boss_key = true;}}
	if (x.id == "fire") {var temp = 15; var temp2 = Game.fire_checks_remaining; Game.fire_checks_remaining = 0; Logic.forced_fire_keys = 8 - Game.current_fire_keys; if (Game.fire_boss_key == false) {Logic.forced_fire_boss_key = true;}}
	if (x.id == "water") {var temp = 11; var temp2 = Game.water_checks_remaining; Game.water_checks_remaining = 0; Logic.forced_water_keys = 6 - Game.current_water_keys; if (Game.water_boss_key == false) {Logic.forced_water_boss_key = true;}}
	if (x.id == "spirit") {var temp = 20; var temp2 = Game.spirit_checks_remaining; Game.spirit_checks_remaining = 0; Logic.forced_spirit_keys = 5 - Game.current_spirit_keys; if (Game.spirit_boss_key == false) {Logic.forced_spirit_boss_key = true;}}
	if (x.id == "shadow") {var temp = 18; var temp2 = Game.shadow_checks_remaining; Game.shadow_checks_remaining = 0; Logic.forced_shadow_keys = 5 - Game.current_shadow_keys; if (Game.shadow_boss_key == false) {Logic.forced_shadow_boss_key = true;}}
	if (x.id == "ganons") {var temp = 16; var temp2 = Game.ganons_checks_remaining; Game.ganons_checks_remaining = 0; Logic.forced_ganons_keys = 2 - Game.current_ganons_keys; if (Game.ganons_boss_key == false) {Logic.ganons_boss_key = true;}}
	if (x.id == "gtg") {var temp = 22; var temp2 = Game.gtg_checks_remaining; Game.gtg_checks_remaining = 0; Logic.forced_gtg_keys = 5 - Game.current_gtg_keys;}
	if (x.id == "well") {var temp = 14; var temp2 = Game.well_checks_remaining; Game.well_checks_remaining = 0; Logic.forced_well_keys = 5 - Game.current_well_keys;}
	for (var i = 1; i <= temp; i++){
		Check[x.id + i] = "junk";
		document.getElementById(x.id + i).style.display = "none";
		document.getElementById("text_" + x.id + i).style.display = "none";
		document.getElementById("br_" + x.id + i).style.display = "none";
	}
	Game.checks_remaining -= temp2;
	if (temp2 != 0) {ajoutHistorique("junkUltra", x.id); } // Si cette valeur est nulle, cela veut dire qu'on a déjà cliqué dessus
	Update();Update();Update();
}

function junkItem(x, obj = "nothing") {
	var str2 = x.id;
	var temp = true;
	if (str2.startsWith('shadow') || str2.startsWith('spirit') || str2.startsWith('forest') || str2.startsWith('fire') || str2.startsWith('water') || str2.startsWith('gtg') || str2.startsWith('well')|| str2.startsWith('ganons')) {
		temp = false;
		if(str2.startsWith('forest') && Game.forest_checks_remaining != 0) {Game.forest_checks_remaining -= 1; temp = true;}
		if(str2.startsWith('fire') && Game.fire_checks_remaining != 0) {Game.fire_checks_remaining -= 1; temp = true;}
		if(str2.startsWith('water') && Game.water_checks_remaining != 0) {Game.water_checks_remaining -= 1; temp = true;}
		if(str2.startsWith('shadow') && Game.shadow_checks_remaining != 0) {Game.shadow_checks_remaining -= 1; temp = true;}
		if(str2.startsWith('spirit') && Game.spirit_checks_remaining != 0) {Game.spirit_checks_remaining -= 1; temp = true;}
		if(str2.startsWith('ganons') && Game.ganons_checks_remaining != 0) {Game.ganons_checks_remaining -= 1; temp = true;}
		if(str2.startsWith('gtg') && Game.gtg_checks_remaining != 0) {Game.gtg_checks_remaining -= 1; temp = true;}
		if(str2.startsWith('well') && Game.well_checks_remaining != 0) {Game.well_checks_remaining -= 1; temp = true;}
	}
	if (!temp) {return;}

	document.getElementById(str2).style.display = "none";
	document.getElementById("text_" + str2).style.display = "none";
	document.getElementById("br_" + str2).style.display = "none";

	Game.checks_remaining -=1;
	ajoutHistorique(obj, x.id, Hinted[x.id]);
	Update();Update();Update();
}

function junkSong(x, obj) {
	var str2 = x.id;
	document.getElementById(str2).style.display = "none";
	ajoutHistorique(obj, x.id, Hinted[x.id]);
	Update();Update();Update();
}

function linSoClick() {
	var str = event.target.src.split("/");
	str = str[str.length-1];
	str = str.substring(0,str.length-4);
	if (str.endsWith("hookshot") && Game.hookshot)  {Game.hookshot2 = true;}
	else if (str.endsWith("longshot")) {Game.hookshot1 = false; Game.hookshot2 = false;}
	else if (str.endsWith("hookshot")) {Game.hookshot1 = true;}
	else if (str.endsWith("bracelet") && Game.goron_bracelet)  {if (!Game.strength1) {Game.strength1 = true;} else if (!Game.strength2) {Game.strength2 = true;} else{Game.strength3 = true;}}
	else if (str.endsWith("silver_gauntlets")) {Game.strength1 = true; Game.strength2 = true; Game.strength3 = true;}
	else if (str.endsWith("golden_gauntlets")) {Game.strength1 = false; Game.strength2 = false; Game.strength3 = false;}
	else if (str.endsWith("bracelet")) {Game.strength1 = true;}
	else if (str.endsWith("silver_scale") && Game.scale1) {Game.scale2 = true;}
	else if (str.endsWith("golden_scale")) {Game.scale1 = false; Game.scale2 = false;}
	else if (str.endsWith("silver_scale")) {Game.scale1 = true;}
	else if (str.endsWith("magic") && Game.magic) {Game.magic2 = true;}
	else if (str.endsWith("magic_2")) {Game.magic1 = false; Game.magic2 = false;}
	else if (str.endsWith("magic")) {Game.magic1 = true;}
	else if (str.endsWith("bomb")) {if (Game.bomb_bag1) {Game.bomb_bag1 = false; Game.bomb_bag2 = false; Game.bomb_bag3 = false;} else {Game.bomb_bag1 = true;}}
	else if (str.endsWith("claim_check") && Game.claim_check) {Game.claim_check = false;}
	else if (str.endsWith("chicken1") && Game.chicken1) {Game.chicken1 = false; Game.blue_chicken = true;}
	else if (str.endsWith("blue_chicken") && Game.blue_chicken) {Game.blue_chicken = false; Game.odd_mushroom = true;}
	else if (str.endsWith("eyeball_frog") && Game.eyeball_frog) {Game.eyeball_frog = false; Game.eyedrops = true;}
	else if (str.endsWith("broken_sword") && Game.broken_sword) {Game.broken_sword = false; Game.prescription = true;}
	else if (str.endsWith("eyedrops") && Game.eyedrops) {Game.eyedrops = false; Game.claim_check = true;}
	else if (str.endsWith("odd_mushroom") && Game.odd_mushroom) {Game.odd_mushroom = false; Game.antidote = true;}
	else if (str.endsWith("antidote") && Game.antidote) {Game.antidote = false; Game.poachers_saw = true;}
	else if (str.endsWith("egg1") && Game.egg1) {Game.egg1 = false; Game.chicken1 = true;}
	else if (str.endsWith("poachers_saw") && Game.poachers_saw) {Game.poachers_saw = false; Game.broken_sword = true;}
	else if (str.endsWith("prescription") && Game.prescription) {Game.prescription = false; Game.eyeball_frog = true;}
	else if (str.endsWith("egg1")) {Game.egg1 = true;}
	else if (str.endsWith("mask_of_truth") && Game.mask_of_truth) {Game.mask_of_truth = false;}
	else if (str.endsWith("gerudo_mask") && Game.gerudo_mask) {Game.gerudo_mask = false; Game.mask_of_truth = true;}
	else if (str.endsWith("zora_mask") && Game.zora_mask) {Game.zora_mask = false; Game.gerudo_mask = true;}
	else if (str.endsWith("goron_mask") && Game.goron_mask) {Game.goron_mask = false; Game.zora_mask = true;}
	else if (str.endsWith("bunny_hood") && Game.bunny_hood) {Game.bunny_hood = false; Game.goron_mask = true;}
	else if (str.endsWith("spooky_mask") && Game.spooky_mask) {Game.spooky_mask = false; Game.bunny_hood = true;}
	else if (str.endsWith("skull_mask") && Game.skull_mask) {Game.skull_mask = false; Game.spooky_mask = true;}
	else if (str.endsWith("keaton_mask") && Game.keaton_mask) {Game.keaton_mask = false; Game.skull_mask = true;}
	else if (str.endsWith("zeldas_letter") && Game.zeldas_letter) {Game.zeldas_letter = false; Game.keaton_mask = true;}
	else if (str.endsWith("chicken2") && Game.chicken2) {Game.chicken2 = false; Game.zeldas_letter = true;}
	else if (str.endsWith("egg2") && Game.egg2) {Game.egg2 = false; Game.chicken2 = true;}
	else if (str.endsWith("egg2")) {Game.egg2 = true;}
	else if (event.target.style.filter == "none") {Game[str] = false;}
	else {Game[str] = true;}
	Update();
}

function refreshLinSo() {
	if (linso) {
		document.getElementById("recompenses").style.display = "none"; 
		document.getElementById("divsongs").style.display = "none"; 
		document.getElementById("linsoColumn").style.display = "inline-block"; 
		document.getElementById("affiche_linso").innerText = "classic";
		for (var i = 1; i <= 12; i++) {
			if (Check[Locations[lastItem + i]] != "unknown") {document.getElementById("linsoC" + i).style.opacity = 1;} else {document.getElementById("linsoC" + i).style.opacity = 0;}
		}
		var temp = 0;
		for (var i = 1; i <= 11; i++) {
			for (var j = 1; j <= 6; j++) {
				if (i == 10 && j >= 4) {
					document.getElementById("linso" + i + j).innerHTML = document.getElementById("text_dung" + (j-3)).innerHTML.toUpperCase();
					continue;
				}
				if (i == 11) {
					document.getElementById("linso" + i + j).innerHTML = document.getElementById("text_dung" + (3 + j)).innerHTML.toUpperCase();
					continue;
				}
				if (i > 9) {continue;}
				if (linsoOrder[temp] == "" || linsoOrder[temp] == "circus") {temp += 1; continue;}
				if (linsoOrder[temp] == "" || linsoOrder[temp] == "skull_counter") {temp += 1; continue;}
				if (linsoOrder[temp] == "hookshot") {if (Game.hookshot1 && !Game.hookshot2)  {document.getElementById("linso" + i + j).src = Game.hookshot_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;} else if (Game.hookshot1 && Game.hookshot2){document.getElementById("linso" + i + j).src = Game.longshot_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;} else {document.getElementById("linso" + i + j).src = Game.hookshot_img; document.getElementById("linso" + i + j).style.filter = "grayscale(100%)"; document.getElementById("linso" + i + j).style.opacity = .2;} }
				else if (linsoOrder[temp] == "silver_scale") {if (Game.scale1 && !Game.scale2)  {document.getElementById("linso" + i + j).src = Game.silver_scale_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;} else if (Game.scale1 && Game.scale2){document.getElementById("linso" + i + j).src = Game.golden_scale_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;} else {document.getElementById("linso" + i + j).src = Game.silver_scale_img; document.getElementById("linso" + i + j).style.filter = "grayscale(100%)"; document.getElementById("linso" + i + j).style.opacity = .2;}}
				else if (linsoOrder[temp] == "adults_wallet") {if (Game.wallet3) {document.getElementById("linso103").style.opacity = 1;} else{document.getElementById("linso103").style.opacity = 0;} if (Game.wallet2)  { document.getElementById("linso" + i + j).src = Game.wallet2_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;} else if (Game.wallet1){document.getElementById("linso" + i + j).src = Game.wallet1_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;} else {document.getElementById("linso" + i + j).src = Game.wallet1_img; document.getElementById("linso" + i + j).style.filter = "grayscale(100%)"; document.getElementById("linso" + i + j).style.opacity = .2;}}
				else if (linsoOrder[temp] == "goron_bracelet") {if (Game.strength3)  {document.getElementById("linso" + i + j).src = Game.golden_gauntlets_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;} else if (Game.strength2){document.getElementById("linso" + i + j).src = Game.silver_gauntlets_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;} else if (Game.strength1){document.getElementById("linso" + i + j).src = Game.goron_bracelet_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;} else {document.getElementById("linso" + i + j).src = Game.goron_bracelet_img; document.getElementById("linso" + i + j).style.filter = "grayscale(100%)"; document.getElementById("linso" + i + j).style.opacity = .2;}}
				else if (linsoOrder[temp] == "bomb") {if (Game.bomb_bag1) {document.getElementById("linso" + i + j).src = Game.bomb_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;} else {document.getElementById("linso" + i + j).src = Game.bomb_img; document.getElementById("linso" + i + j).style.filter = "grayscale(100%)"; document.getElementById("linso" + i + j).style.opacity = .2;}}
				else if (linsoOrder[temp] == "magic") {if (Game.magic2)  {document.getElementById("linso" + i + j).src = Game.magic_2_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;} else if (Game.magic){document.getElementById("linso" + i + j).src = Game.magic_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;} else {document.getElementById("linso" + i + j).src = Game.magic_img; document.getElementById("linso" + i + j).style.filter = "grayscale(100%)"; document.getElementById("linso" + i + j).style.opacity = .2;}}
				else if (linsoOrder[temp] == "egg1" && Game.claim_check) {document.getElementById("linso" + i + j).src = Game.claim_check_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg1" && Game.eyedrops) {document.getElementById("linso" + i + j).src = Game.eyedrops_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg1" && Game.eyeball_frog) {document.getElementById("linso" + i + j).src = Game.eyeball_frog_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg1" && Game.prescription) {document.getElementById("linso" + i + j).src = Game.prescription_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg1" && Game.broken_sword) {document.getElementById("linso" + i + j).src = Game.broken_sword_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg1" && Game.poachers_saw) {document.getElementById("linso" + i + j).src = Game.poachers_saw_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg1" && Game.antidote) {document.getElementById("linso" + i + j).src = Game.antidote_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg1" && Game.odd_mushroom) {document.getElementById("linso" + i + j).src = Game.odd_mushroom_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg1" && Game.blue_chicken) {document.getElementById("linso" + i + j).src = Game.blue_chicken_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg1" && Game.chicken1) {document.getElementById("linso" + i + j).src = Game.chicken1_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg1" && Game.egg1) {document.getElementById("linso" + i + j).src = Game.egg1_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg1") {document.getElementById("linso" + i + j).src = Game.egg1_img; document.getElementById("linso" + i + j).style.filter = "grayscale(100%)"; document.getElementById("linso" + i + j).style.opacity = .2;}
				else if (linsoOrder[temp] == "egg2" && Game.mask_of_truth) {document.getElementById("linso" + i + j).src = Game.mask_of_truth_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg2" && Game.gerudo_mask) {document.getElementById("linso" + i + j).src = Game.gerudo_mask_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg2" && Game.zora_mask) {document.getElementById("linso" + i + j).src = Game.zora_mask_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg2" && Game.goron_mask) {document.getElementById("linso" + i + j).src = Game.goron_mask_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg2" && Game.bunny_hood) {document.getElementById("linso" + i + j).src = Game.bunny_hood_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg2" && Game.spooky_mask) {document.getElementById("linso" + i + j).src = Game.spooky_mask_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg2" && Game.skull_mask) {document.getElementById("linso" + i + j).src = Game.skull_mask_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg2" && Game.keaton_mask) {document.getElementById("linso" + i + j).src = Game.keaton_mask_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg2" && Game.zeldas_letter) {document.getElementById("linso" + i + j).src = Game.zeldas_letter_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg2" && Game.chicken2) {document.getElementById("linso" + i + j).src = Game.chicken2_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg2" && Game.egg2) {document.getElementById("linso" + i + j).src = Game.egg2_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg2") {document.getElementById("linso" + i + j).src = Game.egg2_img; document.getElementById("linso" + i + j).style.filter = "grayscale(100%)"; document.getElementById("linso" + i + j).style.opacity = .2;}
				else if (Game[linsoOrder[temp]] || (Game[linsoOrder[temp] + 1])) {document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else {document.getElementById("linso" + i + j).style.filter = "grayscale(100%)"; document.getElementById("linso" + i + j).style.opacity = .2;}
				temp += 1;
			}
		}
		temp = 0;
		for (var i = 1; i <= 12; i++) {
			if (Game[linsoOrder2[temp]]) {document.getElementById("linsoS" + i).style.filter = "none"; document.getElementById("linsoS" + i).style.opacity = 1;}
				else {document.getElementById("linsoS" + i).style.filter = "grayscale(100%)"; document.getElementById("linsoS" + i).style.opacity = .2;}
				temp += 1;
		}
	}
	else {document.getElementById("linsoColumn").style.display = "none";}
}

function toggleLinsoGoMode() {
	if (linsoGoMode) {linsoGoMode = false; document.getElementById("linso54").src = "circus-tent_1f3aa.png"; document.getElementById("linsoLight").style.opacity = 0; if (!circus) {document.getElementById("linso54").style.opacity = 0;}}
	else {linsoGoMode = true; document.getElementById("linso54").src = "./normal/gomode.png"; document.getElementById("linsoLight").style.opacity = 1; document.getElementById("linso54").style.opacity = 1;}
}

function annuler(nombre = (historique.length - 1)) {
	// Récupération de l'action à annuler
	historique.splice(nombre, 1);
	 
	//var historiqueSupprime_aux = historiqueSupprime; // On sauvegarde ça en mémoire car va être supprimé

	// On charge l'historique
	chargerHistorique();
}


function check_circle_info() {
	document.getElementById("forest").innerHTML = "" + Game.forest_checks_remaining;
	document.getElementById("fire").innerHTML = "" + Game.fire_checks_remaining;
	document.getElementById("water").innerHTML = "" + Game.water_checks_remaining;
	document.getElementById("spirit").innerHTML = "" + Game.spirit_checks_remaining;
	document.getElementById("shadow").innerHTML = "" + Game.shadow_checks_remaining;
	document.getElementById("ganons").innerHTML = "" + Game.ganons_checks_remaining;
	document.getElementById("gtg").innerHTML = "" + Game.gtg_checks_remaining;
	document.getElementById("well").innerHTML = "" + Game.well_checks_remaining;
	
	document.getElementById("forestSKs").innerHTML = "" + (5 - Game.current_forest_keys);
	document.getElementById("fireSKs").innerHTML = "" + (8 - Game.current_fire_keys);
	document.getElementById("waterSKs").innerHTML = "" + (6 - Game.current_water_keys);
	document.getElementById("spiritSKs").innerHTML = "" + (5 - Game.current_spirit_keys);
	document.getElementById("shadowSKs").innerHTML = "" + (5 - Game.current_shadow_keys);
	document.getElementById("ganonsSKs").innerHTML = "" + (2 - Game.current_ganons_keys);
	document.getElementById("gtgSKs").innerHTML = "" + (9 - Game.current_gtg_keys);
	document.getElementById("wellSKs").innerHTML = "" + (3 - Game.current_well_keys);
	
	if (Game.forest_boss_key) {document.getElementById("forestBKs").innerHTML = 0;} else {document.getElementById("forestBKs").innerHTML = 1;}
	if (Game.fire_boss_key) {document.getElementById("fireBKs").innerHTML = 0;} else {document.getElementById("fireBKs").innerHTML = 1;}
	if (Game.water_boss_key) {document.getElementById("waterBKs").innerHTML = 0;} else {document.getElementById("waterBKs").innerHTML = 1;}
	if (Game.spirit_boss_key) {document.getElementById("spiritBKs").innerHTML = 0;} else {document.getElementById("spiritBKs").innerHTML = 1;}
	if (Game.shadow_boss_key) {document.getElementById("shadowBKs").innerHTML = 0;} else {document.getElementById("shadowBKs").innerHTML = 1;}
	if (Game.ganons_boss_key) {document.getElementById("ganonsBKs").innerHTML = 0;} else {document.getElementById("ganonsBKs").innerHTML = 0;}
}

function highlight(x) {
	//ajoutHistorique(x.id, "highlight");
	if (x.id == "silverscaleimg") {
		if (Game.scale2 == true) {
			Game.scale1 = false; 
			Game.scale2 = false;
			document.getElementById(x.id).src = Game.silver_scale_img;
			x.style.opacity = .2;
		}
		else if (x.style.opacity == 1) {
			Game.scale2 = true;
			document.getElementById(x.id).src = Game.golden_scale_img;
		} 
		else {
			Game.scale1 = true;
			x.style.opacity = 1;
		}
	}
	else {
		if (x.style.opacity == 1){x.style.opacity =.2;}
		else {x.style.opacity =1;}
	}
	
	if (x.id == "for_med") {
		if (x.style.opacity == 1) {Logic.forest_medallion = true;}
	}
	else if (document.getElementById(x.id).style.opacity == 1) {
		if (document.getElementById(x.id).src.endsWith(Game.bomb_bag_img.substring(2))){Game.bomb_bag1 = true; }
		if (document.getElementById(x.id).src.endsWith(Game.iron_boots_img.substring(2))){Game.iron_boots = true;}
		if (document.getElementById(x.id).src.endsWith(Game.hover_boots_img.substring(2))){Game.hover_boots = true;}
		if (document.getElementById(x.id).src.endsWith(Game.hookshot_img.substring(2))){Game.hookshot1 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.bow_img.substring(2))){Game.bow1 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.goron_bracelet_img.substring(2))){Game.strength1 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.hammer_img.substring(2))){Game.hammer = true;}
		if (document.getElementById(x.id).src.endsWith(Game.golden_scale_img.substring(2))){Game.scale2 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.silver_gauntlets_img.substring(2))){Game.strength1 = true; Game.strength2 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.magic_meter_img.substring(2))){Game.magic1 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.longshot_img.substring(2))){Game.hookshot1 = true; Game.hookshot2 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.mirror_shield_img.substring(2))){Game.mirror_shield = true;}
		if (document.getElementById(x.id).src.endsWith(Game.dins_fire_img.substring(2))){Game.dins_fire = true;}
		if (document.getElementById(x.id).src.endsWith(Game.letter_img.substring(2))){Game.rutos_letter = true;}
		if (document.getElementById(x.id).src.endsWith(Game.boomerang_img.substring(2))){Game.boomerang = true;}
		if (document.getElementById(x.id).src.endsWith(Game.lens_img.substring(2))){Game.lens_of_truth = true;}
		if (document.getElementById(x.id).src.endsWith(Game.golden_gauntlets_img.substring(2))){Game.strength1 = true; Game.strength2 = true; Game.strength3 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.silver_scale_img.substring(2))){Game.scale1 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.light_arrows_img.substring(2))){Game.light_arrows = true;}
		if (document.getElementById(x.id).src.endsWith(Game.fire_arrows_img.substring(2))){Game.fire_arrows = true;}
		if (document.getElementById(x.id).src.endsWith(Game.farores_wind_img.substring(2))){Game.farores_wind = true;}
		if (document.getElementById(x.id).src.endsWith(Game.bottle_img.substring(2))){Game.bottle1 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.slingshot_img.substring(2))){Game.slingshot1 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.lullaby_img.substring(2))){Game.lullaby = true;}
		if (document.getElementById(x.id).src.endsWith(Game.eponas_img.substring(2))){Game.eponas = true;}
		if (document.getElementById(x.id).src.endsWith(Game.sarias_img.substring(2))){Game.sarias = true;}
		if (document.getElementById(x.id).src.endsWith(Game.suns_img.substring(2))){Game.suns = true; Game.suns_song = true;}
		if (document.getElementById(x.id).src.endsWith(Game.sot_img.substring(2))){Game.sot = true; Game.song_of_time = true;}
		if (document.getElementById(x.id).src.endsWith(Game.sos_img.substring(2))){Game.sos = true; Game.song_of_storms = true;}
		if (document.getElementById(x.id).src.endsWith(Game.minuet_img.substring(2))){Game.minuet = true;}
		if (document.getElementById(x.id).src.endsWith(Game.bolero_img.substring(2))){Game.bolero = true;}
		if (document.getElementById(x.id).src.endsWith(Game.serenade_img.substring(2))){Game.serenade = true;}
		if (document.getElementById(x.id).src.endsWith(Game.requiem_img.substring(2))){Game.requiem = true;}
		if (document.getElementById(x.id).src.endsWith(Game.nocturne_img.substring(2))){Game.nocturne = true;}
		if (document.getElementById(x.id).src.endsWith(Game.prelude_img.substring(2))){Game.prelude = true;}
	}
	else {
		if (document.getElementById(x.id).src.endsWith(Game.bomb_bag_img.substring(2))){Game.bomb_bag1 = false; Game.bomb_bag2 = false; Game.bomb_bag3 = false; }
		if (document.getElementById(x.id).src.endsWith(Game.iron_boots_img.substring(2))){Game.iron_boots = false;}
		if (document.getElementById(x.id).src.endsWith(Game.hover_boots_img.substring(2))){Game.hover_boots = false;}
		if (document.getElementById(x.id).src.endsWith(Game.hookshot_img.substring(2))){Game.hookshot1 = false; Game.hookshot2 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.bow_img.substring(2))){Game.bow1 = false; Game.bow2 = false; Game.bow3 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.goron_bracelet_img.substring(2))){Game.strength1 = false; Game.strength2 = false; Game.strength3 = false; Game.silver_gauntlets = false;}
		if (document.getElementById(x.id).src.endsWith(Game.hammer_img.substring(2))){Game.hammer = false;}
		if (document.getElementById(x.id).src.endsWith(Game.golden_scale_img.substring(2))){Game.scale2 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.silver_gauntlets_img.substring(2))){Game.strength2 = false; Game.strength3 = false; Game.silver_gauntlets = false;}
		if (document.getElementById(x.id).src.endsWith(Game.magic_meter_img.substring(2))){Game.magic1 = false; Game.magic2 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.longshot_img.substring(2))){Game.hookshot2 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.mirror_shield_img.substring(2))){Game.mirror_shield = false;}
		if (document.getElementById(x.id).src.endsWith(Game.dins_fire_img.substring(2))){Game.dins_fire = false;}
		if (document.getElementById(x.id).src.endsWith(Game.letter_img.substring(2))){Game.rutos_letter = false;}
		if (document.getElementById(x.id).src.endsWith(Game.boomerang_img.substring(2))){Game.boomerang = false;}
		if (document.getElementById(x.id).src.endsWith(Game.lens_img.substring(2))){Game.lens_of_truth = false;}
		if (document.getElementById(x.id).src.endsWith(Game.golden_gauntlets_img.substring(2))){Game.strength3 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.silver_scale_img.substring(2))){Game.scale1 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.light_arrows_img.substring(2))){Game.light_arrows = false;}
		if (document.getElementById(x.id).src.endsWith(Game.fire_arrows_img.substring(2))){Game.fire_arrows = false;}
		if (document.getElementById(x.id).src.endsWith(Game.farores_wind_img.substring(2))){Game.farores_wind = false;}
		if (document.getElementById(x.id).src.endsWith(Game.bottle_img.substring(2))){Game.bottle1 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.slingshot_img.substring(2))){Game.slingshot1 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.lullaby_img.substring(2))){Game.lullaby = false;}
		if (document.getElementById(x.id).src.endsWith(Game.eponas_img.substring(2))){Game.eponas = false;}
		if (document.getElementById(x.id).src.endsWith(Game.sarias_img.substring(2))){Game.sarias = false;}
		if (document.getElementById(x.id).src.endsWith(Game.suns_img.substring(2))){Game.suns = false; Game.suns_song = false;}
		if (document.getElementById(x.id).src.endsWith(Game.sot_img.substring(2))){Game.sot = false; Game.song_of_time = false;}
		if (document.getElementById(x.id).src.endsWith(Game.sos_img.substring(2))){Game.sos = false; Game.song_of_storms = false;}
		if (document.getElementById(x.id).src.endsWith(Game.minuet_img.substring(2))){Game.minuet = false;}
		if (document.getElementById(x.id).src.endsWith(Game.bolero_img.substring(2))){Game.bolero = false;}
		if (document.getElementById(x.id).src.endsWith(Game.serenade_img.substring(2))){Game.serenade = false;}
		if (document.getElementById(x.id).src.endsWith(Game.requiem_img.substring(2))){Game.requiem = false;}
		if (document.getElementById(x.id).src.endsWith(Game.nocturne_img.substring(2))){Game.nocturne = false;}
		if (document.getElementById(x.id).src.endsWith(Game.prelude_img.substring(2))){Game.prelude = false;}
	}
	
	if (x.id == "fir_med" && x.style.opacity==1) {Logic.fire_medallion = true;}
	if (x.id == "wat_med" && x.style.opacity==1) {Logic.water_medallion = true;}
	if (x.id == "spi_med" && x.style.opacity==1) {Logic.spirit_medallion = true;}
	if (x.id == "sha_med" && x.style.opacity==1) {Logic.shadow_medallion = true;}
	if (x.id == "lit_med" && x.style.opacity==1) {Logic.light_medallion = true;}
	
	if (x.id == "kok_eme" && x.style.opacity==1) {Logic.kokiri_emerald = true;}
	if (x.id == "gor_rub" && x.style.opacity==1) {Logic.goron_ruby = true;}
	if (x.id == "zor_sap" && x.style.opacity==1) {Logic.zora_sapphire = true;}
	
	modifieHistorique();
	
	Update(); Update(); Update();
}

function toggleHint(loc) {
	var location = "";
	var item = "";
	var itemText = "";
	if (loc.className == "logic_check_text" || loc.className == "ool_check_text" || loc.className == "access_check_text") {location = loc.id.slice(5); item = Check[location];} else {item = loc.id.slice(0, -9); location = Location[item];}
	if (item == "sos") {item = "song_of_storms";}
	if (item == "suns") {item = "suns_song";}
	if (item == "sot") {item = "song_of_time";}
	if (item == "serenade") {itemText = "Serenade";} else if (item == "prelude") {itemText = "Prelude"} else {itemText = ItemNames[Items.indexOf(item)];}
	if (item != "unknown" && location != undefined) {
		Hinted[location] = !Hinted[location];
		if (loc.className == "logic_check_text" || loc.className == "ool_check_text" || loc.className == "access_check_text") {
			text = Names[Locations.indexOf(location)] + ": " + itemText + "<br>";
		}
		else {
			text = Names[Locations.indexOf(location)].split(":")[1].slice(1) + ": " + ItemNames[Items.indexOf(item)] + "<br>";
		}
		if (Hinted[location]) {
			var hintText = document.createElement("small");
			hintText.innerHTML = text;
			document.getElementById("notes").insertBefore(hintText, document.getElementById("notes").firstChild);
		}
		else {
			for (i = 0; i < document.getElementById("notes").children.length; i++) {
				if (document.getElementById("notes").children[i].innerHTML == text) {
					document.getElementById("notes").children[i].remove();
					break;
				}
			}
		}
	}
}

function handleAlternateHintInput() {
	if (temptext2 != "") {
		var hintText = document.createElement("small");
		hintText.innerHTML = temptext2;
		document.getElementById("notes").insertBefore(hintText, document.getElementById("notes").firstChild);
		temptext2 = "";
	}

	var lines = document.getElementById("hintInput").value.split('\n');
	var new_lines = "";
	var flag = false;
	var str = "";
	for (var j=0; j < lines.length; j++) {
		for (var i= 0; i < hintNames.length; i++) {
			if (lines[j].startsWith(hintNames[i]+" ") || lines[j].startsWith(hintNames2[i]+" ") || lines[j].startsWith(hintNames3[i]+" ") || lines[j].startsWith(hintNames4[i]+" ") || lines[j].startsWith(hintNames5[i]+" ") || lines[j].startsWith(hintNames6[i]+" ")) {
				for (var k = 0; k < inputs.length; k++) {
					str = inputs[k];
					if (i < 6) {
						str = capitalizeThirdLetter(str);
					}
					else {
						str = capitalizeFirstLetter(str);
					}
					
					if (k == 0) { if (lines[j].endsWith(" " + inputs[k]) && Check[hintIndexes[i]] == "unknown") {document.getElementById("text_" + hintIndexes[i]).dispatchEvent(new Event('mousedown')); flag = true;} }
					else if (k == 1) { if (lines[j].endsWith(" " + inputs[k]) && Check[hintIndexes[i]] == "unknown") {thisIsAKey = true; document.getElementById("text_" + hintIndexes[i]).dispatchEvent(new Event('mousedown')); thisIsAKey = false; flag = true; } }
					else if (k == 2) { if (lines[j].endsWith(" " + inputs[k]) && Check[hintIndexes[i]] == "unknown") {thisIsABossKey = true; document.getElementById("text_" + hintIndexes[i]).dispatchEvent(new Event('mousedown')); thisIsABossKey = false; flag = true;} }
					else {if (lines[j].endsWith(" " + inputs[k])) {if (Check[hintIndexes[i]] == "unknown") {document.getElementById(hintIndexes[i]).value = str;} flag = true;}} 
					
					// if (k == 0) { if (lines[j].endsWith(" " + inputs[k]) && Check[hintIndexes[i]] == "unknown") {Hinted[hintIndexes[i]] = true; flag = true;} }
					// else if (k == 1) { if (lines[j].endsWith(" " + inputs[k]) && Check[hintIndexes[i]] == "unknown") {Hinted[hintIndexes[i]] = true; flag = true; } }
					// else if (k == 2) { if (lines[j].endsWith(" " + inputs[k]) && Check[hintIndexes[i]] == "unknown") {Hinted[hintIndexes[i]] = true; thisIsABossKey = false; flag = true;} }
					// else {if (lines[j].endsWith(" " + inputs[k])) {if (Check[hintIndexes[i]] == "unknown") {Hinted[hintIndexes[i]] = true;} flag = true;}} 
				} 
			}
			
		}
		if (!flag) {
			if (new_lines != "") {new_lines += "\n";}
				new_lines += lines[j];
		}
	}
	document.getElementById("hintInput").value = new_lines;
}

function handleAreaBreaks() {
	if (document.getElementById("mido_1").style.display == "none" && document.getElementById("mido_2").style.display == "none" && document.getElementById("mido_3").style.display == "none" && document.getElementById("mido_4").style.display == "none" && document.getElementById("kokiri_sword").style.display == "none" && document.getElementById("kokiri_song_of_storms").style.display == "none") {document.getElementById("kokiri_break").style.display = "none";} else {document.getElementById("kokiri_break").style.display = "inline-block";}
	if (document.getElementById("talons_chickens").style.display == "none" && document.getElementById("back_of_ranch").style.display == "none") {document.getElementById("ranch_break").style.display = "none";} else {document.getElementById("ranch_break").style.display = "inline-block";}
	if (document.getElementById("hyrule_forest_boulder").style.display == "none" && document.getElementById("hyrule_open_grotto").style.display == "none" && document.getElementById("hyrule_hp_scrub").style.display == "none" && document.getElementById("hyrule_boulder_of_destiny").style.display == "none" && document.getElementById("hyrule_tektite_grotto").style.display == "none") {document.getElementById("field_break").style.display = "none";} else {document.getElementById("field_break").style.display = "inline-block";}
	if (document.getElementById("gerudovalley_box").style.display == "none" && document.getElementById("gerudovalley_waterfall").style.display == "none" && document.getElementById("gerudo_hammer").style.display == "none") {document.getElementById("valley_break").style.display = "none";} else {document.getElementById("valley_break").style.display = "inline-block";}
	if (document.getElementById("hylia_child_fishing").style.display == "none" && document.getElementById("hylia_bottle").style.display == "none" && document.getElementById("hylia_adult_fishing").style.display == "none" && document.getElementById("hylia_lab_top").style.display == "none" && document.getElementById("hylia_lab_dive").style.display == "none" && document.getElementById("hylia_sun_shoot").style.display == "none") {document.getElementById("hylia_break").style.display = "none";} else {document.getElementById("hylia_break").style.display = "inline-block";}
	if (document.getElementById("market_slingshot_game").style.display == "none" && document.getElementById("richard").style.display == "none" && document.getElementById("market_bowling_1").style.display == "none" && document.getElementById("market_bowling_2").style.display == "none" && document.getElementById("market_lens_game").style.display == "none" && document.getElementById("poes").style.display == "none") {document.getElementById("market_break").style.display = "none";} else {document.getElementById("market_break").style.display = "inline-block";}
	if (document.getElementById("dins_fairy").style.display == "none") {document.getElementById("dfairy_break").style.display = "none";} else {document.getElementById("dfairy_break").style.display = "inline-block";}
	if (document.getElementById("g_fairy").style.display == "none") {document.getElementById("gfairy_break").style.display = "none";} else {document.getElementById("gfairy_break").style.display = "inline-block";}
	if (document.getElementById("lacs").style.display == "none") {document.getElementById("tot_break").style.display = "none";} else {document.getElementById("tot_break").style.display = "inline-block";}
	if (document.getElementById("fountain_fairy").style.display == "none" && document.getElementById("ice_glacier_hp").style.display == "none" && document.getElementById("ice_bottom_of_fountain").style.display == "none") {document.getElementById("fountain_break").style.display = "none";} else {document.getElementById("fountain_break").style.display = "inline-block";}
	if (document.getElementById("deku_lobby").style.display == "none" && document.getElementById("deku_slingshot").style.display == "none" && document.getElementById("deku_slingshot_room_side").style.display == "none" && document.getElementById("deku_compass").style.display == "none" && document.getElementById("deku_basement").style.display == "none" && document.getElementById("deku_queen_gohma").style.display == "none") {document.getElementById("deku_break").style.display = "none";} else {document.getElementById("deku_break").style.display = "inline-block";}
	if (document.getElementById("ocarina_game").style.display == "none" && document.getElementById("lost_woods_grotto").style.display == "none" && document.getElementById("lost_woods_scrub_grotto").style.display == "none" && document.getElementById("bridge_scrub").style.display == "none" && document.getElementById("target").style.display == "none" && document.getElementById("skull_kid").style.display == "none" && document.getElementById("theater").style.display == "none") {document.getElementById("lostwoods_break").style.display = "none";} else {document.getElementById("lostwoods_break").style.display = "inline-block";}
	if (document.getElementById("wolfos_grotto").style.display == "none") {document.getElementById("sfm_break").style.display = "none";} else {document.getElementById("sfm_break").style.display = "inline-block";}
	if (document.getElementById("rolling_goron").style.display == "none" && document.getElementById("goron_dance").style.display == "none" && document.getElementById("goron_pot").style.display == "none" && document.getElementById("goron_maze_1").style.display == "none" && document.getElementById("goron_maze_2").style.display == "none" && document.getElementById("goron_maze_3").style.display == "none" && document.getElementById("goron_link").style.display == "none") {document.getElementById("gcity_break").style.display = "none";} else {document.getElementById("gcity_break").style.display = "inline-block";}
	if (document.getElementById("dodongos_map").style.display == "none" && document.getElementById("dodongos_compass").style.display == "none" && document.getElementById("dodongos_bomb_flower_platform").style.display == "none" && document.getElementById("dodongos_bomb_bag").style.display == "none" && document.getElementById("dodongos_end_of_bridge").style.display == "none" && document.getElementById("dodongos_above_king").style.display == "none" && document.getElementById("dodongos_king_dodongo").style.display == "none") {document.getElementById("dodongos_break").style.display = "none";} else {document.getElementById("dodongos_break").style.display = "inline-block";}
	if (document.getElementById("trail_bombable").style.display == "none" && document.getElementById("trail_dodongos_top").style.display == "none" && document.getElementById("trail_song_of_storms").style.display == "none" && document.getElementById("crater_peak_fairy").style.display == "none" && document.getElementById("trade_quest").style.display == "none") {document.getElementById("trail_break").style.display = "none";} else {document.getElementById("trail_break").style.display = "inline-block";}
	if (document.getElementById("man_on_roof").style.display == "none" && document.getElementById("kakariko_grotto").style.display == "none" && document.getElementById("windmill").style.display == "none" && document.getElementById("anju").style.display == "none" && document.getElementById("cow_house").style.display == "none" && document.getElementById("archery_game").style.display == "none" && document.getElementById("redead_grotto").style.display == "none" && document.getElementById("anjus_chickens").style.display == "none" && document.getElementById("tokens_10").style.display == "none" && document.getElementById("tokens_20").style.display == "none" && document.getElementById("tokens_30").style.display == "none" && document.getElementById("tokens_40").style.display == "none" && document.getElementById("tokens_50").style.display == "none") {document.getElementById("kakariko_break").style.display = "none";} else {document.getElementById("kakariko_break").style.display = "inline-block";}
	if (document.getElementById("shield_grave").style.display == "none" && document.getElementById("gravedigging_tour").style.display == "none" && document.getElementById("suns_grave").style.display == "none" && document.getElementById("fire_grave").style.display == "none" && document.getElementById("graveyard_box").style.display == "none" && document.getElementById("race_1").style.display == "none" && document.getElementById("race_2").style.display == "none") {document.getElementById("graveyard_break").style.display = "none";} else {document.getElementById("graveyard_break").style.display = "inline-block";}
	if (document.getElementById("river_pillar").style.display == "none" && document.getElementById("river_grotto").style.display == "none" && document.getElementById("river_ledge").style.display == "none" && document.getElementById("frogs_1").style.display == "none" && document.getElementById("frogs_2").style.display == "none") {document.getElementById("river_break").style.display = "none";} else {document.getElementById("river_break").style.display = "inline-block";}
	if (document.getElementById("zora_diving").style.display == "none" && document.getElementById("zora_torches").style.display == "none" && document.getElementById("thaw_king").style.display == "none") {document.getElementById("domain_break").style.display = "none";} else {document.getElementById("domain_break").style.display = "inline-block";}
	if (document.getElementById("colossus_bean").style.display == "none" && document.getElementById("colossus_fairy").style.display == "none") {document.getElementById("colossus_break").style.display = "none";} else {document.getElementById("colossus_break").style.display = "inline-block";}
	if (document.getElementById("wasteland").style.display == "none") {document.getElementById("wasteland_break").style.display = "none";} else {document.getElementById("wasteland_break").style.display = "inline-block";}
	if (document.getElementById("gerudo_roof").style.display == "none" && document.getElementById("gerudo_archery_1").style.display == "none" && document.getElementById("gerudo_archery_2").style.display == "none") {document.getElementById("fortress_break").style.display = "none";} else {document.getElementById("fortress_break").style.display = "inline-block";}
}

function handleItemHighlights() {
	if (Game.bomb_bag1 || Game.bomb_bag2 || Game.bomb_bag3) {if(document.getElementById(dodongosPlacement +"_req1") != null) {document.getElementById(dodongosPlacement +"_req1").style.opacity =1; } if(document.getElementById(shadowPlacement +"_req4") != null) {document.getElementById(shadowPlacement +"_req4").style.opacity =1; } if(document.getElementById(spiritPlacement +"_req3") != null) {document.getElementById(spiritPlacement +"_req3").style.opacity =1; }}
	if (Game.magic1 || Game.magic2) {document.getElementById("gan_req1").style.opacity=1; if(document.getElementById(shadowPlacement +"_req2") != null) {document.getElementById(shadowPlacement +"_req2").style.opacity =1; }}
	if (Game.light_arrows) {document.getElementById("gan_req2").style.opacity=1;}
	if (Game.bow1 || Game.bow2 || Game.bow3) {document.getElementById("gan_req3").style.opacity=1; if(document.getElementById(forestPlacement +"_req2") != null) {document.getElementById(forestPlacement +"_req2").style.opacity =1; }}
	if (Game.hookshot) {if(document.getElementById(forestPlacement +"_req1") != null) {document.getElementById(forestPlacement +"_req1").style.opacity =1; } if(document.getElementById(shadowPlacement +"_req5") != null) {document.getElementById(shadowPlacement +"_req5").style.opacity =1; } if(document.getElementById(spiritPlacement +"_req4") != null) {document.getElementById(spiritPlacement +"_req4").style.opacity =1; }}
	if (Game.goron_bracelet) {if(document.getElementById(forestPlacement +"_req3") != null) {document.getElementById(forestPlacement +"_req3").style.opacity =1; }}
	if (Game.hammer) {if(document.getElementById(firePlacement +"_req1") != null) {document.getElementById(firePlacement +"_req1").style.opacity =1; }}
	if (Game.rutos_letter) {if(document.getElementById(jabuPlacement +"_req1") != null) {document.getElementById(jabuPlacement +"_req1").style.opacity =1; }}
	if (Game.boomerang) {if(document.getElementById(jabuPlacement +"_req2") != null) {document.getElementById(jabuPlacement +"_req2").style.opacity =1; }}
	if (Game.iron_boots) {if(document.getElementById(waterPlacement +"_req1") != null) {document.getElementById(waterPlacement +"_req1").style.opacity =1; }}
	if (Game.scale2) {if(document.getElementById(waterPlacement +"_req2") != null) {document.getElementById(waterPlacement +"_req2").style.opacity =1; }}
	if (Game.longshot) {if(document.getElementById(waterPlacement +"_req3") != null) {document.getElementById(waterPlacement +"_req3").style.opacity =1; }}
	if (Game.silver_gauntlets) {if(document.getElementById(spiritPlacement +"_req1") != null) {document.getElementById(spiritPlacement +"_req1").style.opacity =1; }}
	if (Game.mirror_shield) {if(document.getElementById(spiritPlacement +"_req2") != null) {document.getElementById(spiritPlacement +"_req2").style.opacity =1; }}
	if (Game.dins_fire) {if(document.getElementById(shadowPlacement +"_req1") != null) {document.getElementById(shadowPlacement +"_req1").style.opacity =1; }}
	if (Game.hover_boots) {if(document.getElementById(shadowPlacement +"_req3") != null) {document.getElementById(shadowPlacement +"_req3").style.opacity =1; }}
	
	if (!Game.bomb_bag1 && !Game.bomb_bag2 && !Game.bomb_bag3) {if(document.getElementById(dodongosPlacement +"_req1") != null) {document.getElementById(dodongosPlacement +"_req1").style.opacity =.2; } if(document.getElementById(shadowPlacement +"_req4") != null) {document.getElementById(shadowPlacement +"_req4").style.opacity =.2; } if(document.getElementById(spiritPlacement +"_req3") != null) {document.getElementById(spiritPlacement +"_req3").style.opacity =.2; }}
	if (!Game.magic1 && !Game.magic2) {document.getElementById("gan_req1").style.opacity = .2; if(document.getElementById(shadowPlacement +"_req2") != null) {document.getElementById(shadowPlacement +"_req2").style.opacity =.2; }}
	if (!Game.light_arrows) {document.getElementById("gan_req2").style.opacity = .2;}
	if (!Game.bow1 && !Game.bow2 && !Game.bow3) {document.getElementById("gan_req3").style.opacity = .2; if(document.getElementById(forestPlacement +"_req2") != null) {document.getElementById(forestPlacement +"_req2").style.opacity =.2; }}
	if (!Game.hookshot) {if(document.getElementById(forestPlacement +"_req1") != null) {document.getElementById(forestPlacement +"_req1").style.opacity =.2; } if(document.getElementById(shadowPlacement +"_req5") != null) {document.getElementById(shadowPlacement +"_req5").style.opacity =.2; } if(document.getElementById(spiritPlacement +"_req4") != null) {document.getElementById(spiritPlacement +"_req4").style.opacity =.2; }}
	if (!Game.goron_bracelet) {if(document.getElementById(forestPlacement +"_req3") != null) {document.getElementById(forestPlacement +"_req3").style.opacity =.2; }}
	if (!Game.hammer) {if(document.getElementById(firePlacement +"_req1") != null) {document.getElementById(firePlacement +"_req1").style.opacity =.2; }}
	if (!Game.rutos_letter) {if(document.getElementById(jabuPlacement +"_req1") != null) {document.getElementById(jabuPlacement +"_req1").style.opacity =.2; }}
	if (!Game.boomerang) {if(document.getElementById(jabuPlacement +"_req2") != null) {document.getElementById(jabuPlacement +"_req2").style.opacity =.2; }}
	if (!Game.iron_boots) {if(document.getElementById(waterPlacement +"_req1") != null) {document.getElementById(waterPlacement +"_req1").style.opacity =.2; }}
	if (!Game.scale2) {if(document.getElementById(waterPlacement +"_req2") != null) {document.getElementById(waterPlacement +"_req2").style.opacity =.2; }}
	if (!Game.longshot) {if(document.getElementById(waterPlacement +"_req3") != null) {document.getElementById(waterPlacement +"_req3").style.opacity =.2; }}
	if (!Game.silver_gauntlets) {if(document.getElementById(spiritPlacement +"_req1") != null) {document.getElementById(spiritPlacement +"_req1").style.opacity =.2; }}
	if (!Game.mirror_shield) {if(document.getElementById(spiritPlacement +"_req2") != null) {document.getElementById(spiritPlacement +"_req2").style.opacity =.2; }}
	if (!Game.dins_fire) {if(document.getElementById(shadowPlacement +"_req1") != null) {document.getElementById(shadowPlacement +"_req1").style.opacity =.2; }}
	if (!Game.hover_boots) {if(document.getElementById(shadowPlacement +"_req3") != null) {document.getElementById(shadowPlacement +"_req3").style.opacity =.2; }}
	
	if (Game.lullaby) {document.getElementById("lullabyimg").style.opacity =1;} else {document.getElementById("lullabyimg").style.opacity =.2;}
	if (Game.eponas) {document.getElementById("eponasimg").style.opacity =1;} else {document.getElementById("eponasimg").style.opacity =.2;}
	if (Game.sarias) {document.getElementById("sariasimg").style.opacity =1;} else {document.getElementById("sariasimg").style.opacity =.2;}
	if (Game.suns_song) {document.getElementById("sunsimg").style.opacity =1;} else {document.getElementById("sunsimg").style.opacity =.2;}
	if (Game.song_of_time) {document.getElementById("sotimg").style.opacity =1;} else {document.getElementById("sotimg").style.opacity =.2;}
	if (Game.song_of_storms) {document.getElementById("sosimg").style.opacity =1;} else {document.getElementById("sosimg").style.opacity =.2;}
	if (Game.minuet) {document.getElementById("minuetimg").style.opacity =1;} else {document.getElementById("minuetimg").style.opacity =.2;}
	if (Game.bolero) {document.getElementById("boleroimg").style.opacity =1;} else {document.getElementById("boleroimg").style.opacity =.2;}
	if (Game.serenade) {document.getElementById("serenadeimg").style.opacity =1;} else {document.getElementById("serenadeimg").style.opacity =.2;}
	if (Game.requiem) {document.getElementById("requiemimg").style.opacity =1;} else {document.getElementById("requiemimg").style.opacity =.2;}
	if (Game.nocturne) {document.getElementById("nocturneimg").style.opacity =1;} else {document.getElementById("nocturneimg").style.opacity =.2;}
	if (Game.prelude) {document.getElementById("preludeimg").style.opacity =1;} else {document.getElementById("preludeimg").style.opacity =.2;}
	
	if (Game.bottle1 || Logic.bottle) {document.getElementById("bottleimg").style.opacity =1;} else {document.getElementById("bottleimg").style.opacity =.2;}
	if (Game.farores_wind) {document.getElementById("faroresimg").style.opacity =1;} else {document.getElementById("faroresimg").style.opacity =.2;}
	if (Game.fire_arrows) {document.getElementById("firearrowsimg").style.opacity =1;} else {document.getElementById("firearrowsimg").style.opacity =.2;}
	if (Game.scale1) {document.getElementById("silverscaleimg").style.opacity =1;} else {document.getElementById("silverscaleimg").style.opacity =.2;}
	if (Game.lens_of_truth) {document.getElementById("lensimg").style.opacity =1;} else {document.getElementById("lensimg").style.opacity =.2;}
	if (Game.golden_gauntlets) {document.getElementById("goldengauntletsimg").style.opacity =1;} else {document.getElementById("goldengauntletsimg").style.opacity =.2;}
	if (Game.slingshot1) {document.getElementById("slingshotimg").style.opacity =1;} else {document.getElementById("slingshotimg").style.opacity =.2;}
}

function handleDungeonHighlights() {
	if (Game.forest_medallion) {document.getElementById("dung4_icon").style.opacity=1; document.getElementById("text_dung4").style.opacity=.2;} else{document.getElementById("dung4_icon").style.opacity=.2; document.getElementById("text_dung4").style.opacity=1;}
	if (Game.fire_medallion) {document.getElementById("dung5_icon").style.opacity=1; document.getElementById("text_dung5").style.opacity=.2;} else{document.getElementById("dung5_icon").style.opacity=.2; document.getElementById("text_dung5").style.opacity=1;}
	if (Game.water_medallion) {document.getElementById("dung6_icon").style.opacity=1; document.getElementById("text_dung6").style.opacity=.2;} else{document.getElementById("dung6_icon").style.opacity=.2; document.getElementById("text_dung6").style.opacity=1;}
	if (Game.gen1) {document.getElementById("dung7_icon").style.opacity=1; document.getElementById("text_dung7").style.opacity=.2;} else{document.getElementById("dung7_icon").style.opacity=.2; document.getElementById("text_dung7").style.opacity=1;}
	if (Game.gen2) {document.getElementById("dung8_icon").style.opacity=1; document.getElementById("text_dung8").style.opacity=.2;} else{document.getElementById("dung8_icon").style.opacity=.2; document.getElementById("text_dung8").style.opacity=1;}
	if (Game.gen3) {document.getElementById("dung9_icon").style.opacity=1; document.getElementById("text_dung9").style.opacity=.2;} else{document.getElementById("dung9_icon").style.opacity=.2; document.getElementById("text_dung9").style.opacity=1;}
	if (Game.emerald) {document.getElementById("dung1_icon").style.opacity=1; document.getElementById("text_dung1").style.opacity=.2;} else{document.getElementById("dung1_icon").style.opacity=.2; document.getElementById("text_dung1").style.opacity=1;}
	if (Game.ruby) {document.getElementById("dung2_icon").style.opacity=1; document.getElementById("text_dung2").style.opacity=.2;} else{document.getElementById("dung2_icon").style.opacity=.2; document.getElementById("text_dung2").style.opacity=1;}
	if (Game.sapphire) {document.getElementById("dung3_icon").style.opacity=1; document.getElementById("text_dung3").style.opacity=.2;} else{document.getElementById("dung3_icon").style.opacity=.2; document.getElementById("text_dung3").style.opacity=1;}

	if (Check.deku_queen_gohma != "unknown") {if (document.getElementById("text_" + dekuPlacement) != null) {document.getElementById("text_" + dekuPlacement).style.opacity=.2}}
	if (Check.dodongos_king_dodongo != "unknown") {if (document.getElementById("text_" + dodongosPlacement) != null) {document.getElementById("text_" + dodongosPlacement).style.opacity=.2}}
	if (Check.jabu_barinade != "unknown") {if (document.getElementById("text_" + jabuPlacement) != null) {document.getElementById("text_" + jabuPlacement).style.opacity=.2}}
	if (Check.forest14 != "unknown") {if (document.getElementById("text_" + forestPlacement) != null) {document.getElementById("text_" + forestPlacement).style.opacity=.2}}
	if (Check.fire6 != "unknown") {if (document.getElementById("text_" + firePlacement) != null) {document.getElementById("text_" + firePlacement).style.opacity=.2}}
	if (Check.water11 != "unknown") {if (document.getElementById("text_" + waterPlacement) != null) {document.getElementById("text_" + waterPlacement).style.opacity=.2}}
	if (Check.spirit20 != "unknown") {if (document.getElementById("text_" + spiritPlacement) != null) {document.getElementById("text_" + spiritPlacement).style.opacity=.2}}
	if (Check.shadow18 != "unknown") {if (document.getElementById("text_" + shadowPlacement) != null) {document.getElementById("text_" + shadowPlacement).style.opacity=.2}}
	if (document.getElementById("text_" + pocketPlacement) != null) {document.getElementById("text_" + pocketPlacement).style.opacity=.2}
}

function checkGanons() {
	if (Game.magic1 && Game.light_arrows && Game.bow1 && Game.ganons_checks_remaining > 0) {
		document.getElementById("ganons").click();
	}
}

function setInLogicMaxForDungeons() {
	if (Game.forest_checks_remaining >=0 && (Game.forest_checks_remaining < Game.forest_logically_accessible)) {Game.logically_accessible -= (Game.forest_logically_accessible - Game.forest_checks_remaining);}
	if (Game.fire_checks_remaining >=0 && (Game.fire_checks_remaining < Game.fire_logically_accessible)) {Game.logically_accessible -= (Game.fire_logically_accessible - Game.fire_checks_remaining);}
	if (Game.water_checks_remaining >=0 && (Game.water_checks_remaining < Game.water_logically_accessible)) {Game.logically_accessible -= (Game.water_logically_accessible - Game.water_checks_remaining);}
	if (Game.spirit_checks_remaining >=0 && (Game.spirit_checks_remaining < Game.spirit_logically_accessible)) {Game.logically_accessible -= (Game.spirit_logically_accessible - Game.spirit_checks_remaining);}
	if (Game.shadow_checks_remaining >=0 && (Game.shadow_checks_remaining < Game.shadow_logically_accessible)) {Game.logically_accessible -= (Game.shadow_logically_accessible - Game.shadow_checks_remaining);}
	if (Game.gtg_checks_remaining >=0 && (Game.gtg_checks_remaining < Game.gtg_logically_accessible)) {Game.logically_accessible -= (Game.gtg_logically_accessible - Game.gtg_checks_remaining);}
	if (Game.well_checks_remaining >=0 && (Game.well_checks_remaining < Game.well_logically_accessible)) {Game.logically_accessible -= (Game.well_logically_accessible - Game.well_checks_remaining);}
	if (Game.ganons_checks_remaining >=0 && (Game.ganons_checks_remaining < Game.ganons_logically_accessible)) {Game.logically_accessible -= (Game.ganons_logically_accessible - Game.ganons_checks_remaining);}
}

function update_logic_info() {
	Logic.gold_skulltulas = 0;
	var i;
	document.getElementById("skullsTextBlock").innerHTML = "";
	for (i = 1; i<=100; i++) {
		if (gs[i] == true) {Logic.gold_skulltulas +=1; document.getElementById("skullsTextBlock").innerHTML += gsText[i] + "<br />" ;};
	}
	document.getElementById("skulls_in_logic").innerHTML = "Skulls: " + Logic.gold_skulltulas;

	Game.logically_accessible = 0;
	Game.forest_logically_accessible=0;
	Game.fire_logically_accessible=0;
	Game.water_logically_accessible=0;
	Game.spirit_logically_accessible=0;
	Game.shadow_logically_accessible=0;
	Game.gtg_logically_accessible=0;
	Game.well_logically_accessible=0;
	Game.ganons_logically_accessible=0;

	temp = 0;
	var colorChange = false;
	for (const key of Object.keys(Location_Logic)) {
		if (temp == 256) {break; }
		temp +=1;
		str = "text_" + key;
		str2 = "br_" + key;
		if (Check[key] == "unknown") {document.getElementById(str).style.display = "inline-block";}
		if (Check[key] == "unknown") {document.getElementById(key).style.display = "inline-block";}
		if (Check[key] == "unknown") {document.getElementById(str2).style.display = "inline-block";}
		
		if (document.getElementById(str).style.display != "none") {if (document.getElementById(str).style.color == "orange") {colorChange = true;} else {colorChange = false;}} else {colorChange = false;}
		if(document.getElementById(str).style.display == "none") {continue;}
		if(Location_Logic[key] == true) {
			document.getElementById(str).className= "logic_check_text";
			//document.getElementById(str).innerHTML = Names[Locations.indexOf(key)];
			if ((!woth1Locations.includes(key) && !woth2Locations.includes(key) && !woth3Locations.includes(key) && !woth4Locations.includes(key) && !woth5Locations.includes(key)) || !circus) {document.getElementById(str).style.color = "chartreuse";}
			else {
				var woths = [woth1Locations.includes(key), woth2Locations.includes(key), woth3Locations.includes(key), woth4Locations.includes(key), woth5Locations.includes(key)];
				var i;
				var j;
				var k;
				var text = document.getElementById(str).innerHTML;
				document.getElementById(str).innerHTML = ""
				for (i = 0; i < text.length; i++) {
					for (j = 0; j < woths.length; j++) {
						if (woths[j]) {
							let charElem = document.createElement("span");
							charElem.style.color = WotHColors[j+1];
							charElem.innerHTML = text[i];
							document.getElementById(str).appendChild(charElem);
							for (k = j + 1; k < woths.length; k++) {
								if (woths[k]) {
									woths[j] = false;
								}
							}
							break;
						}
					}
				}
			}
			if(document.getElementById(key).style.display != "none") {
				if (temp <= 242) {Game.logically_accessible += 1;}
				if (temp == 44 && Game.deku_checks_remaining == 0) {Game.logically_accessible -= 1;}
			    if (temp == 66 && Game.dodongos_checks_remaining == 0) {Game.logically_accessible -= 1;}
				if (temp == 113 && Game.jabu_checks_remaining == 0) {Game.logically_accessible -= 1;}
				if (temp >= 115 && temp <= 128) {Game.forest_logically_accessible += 1;}
				if (temp >= 129 && temp <= 143) {Game.fire_logically_accessible += 1;}
				if (temp >= 144 && temp <= 154) {Game.water_logically_accessible += 1;}
				if (temp >= 155 && temp <= 174) {Game.spirit_logically_accessible += 1;}
				if (temp >= 175 && temp <= 192) {Game.shadow_logically_accessible += 1;}
				if (temp >= 193 && temp <= 208) {Game.ganons_logically_accessible += 1;}
				if (temp >= 209 && temp <= 230) {Game.gtg_logically_accessible += 1;}
				if (temp >= 231 && temp <= 244) {Game.well_logically_accessible += 1;}
			}
		}
		else if (Location_Access[key] == true) {
			document.getElementById(str).className= "access_check_text";
			document.getElementById(str).style.color ="yellow";
		}
		else {
			if (hideInaccessible) {
				if (document.getElementById(str).style.display != "none") {document.getElementById(str).style.display = "none";}
				if (document.getElementById(key).style.display != "none") {document.getElementById(key).style.display = "none";}
				if (document.getElementById(str2).style.display != "none") {document.getElementById(str2).style.display = "none";}
			}
			document.getElementById(str).className= "ool_check_text";
			document.getElementById(str).style.color ="black";
		}
		if (colorChange) {document.getElementById(str).style.color = "orange";}
	}
	
	Game.logically_accessible = Number(Game.logically_accessible);
	Game.logically_accessible=Game.logically_accessible.toFixed(0);
	document.getElementById("checks_remaining").innerHTML="Remaining: "+Game.checks_remaining;
	document.getElementById("logically_accessible").innerHTML="&nbsp; &nbsp; In Logic: "+Game.logically_accessible;
}

