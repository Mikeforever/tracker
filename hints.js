function woth_and_barren_processing() {
	for( var i = 1; i <= 34; i++) {
	Area[i] = "normal";
	}

	for (var i = 1; i <= 5; i++) {
		var str = document.getElementById("woth_input" + i).value;
		str = str.replace("2","");
		if (str == "kok" || str == "kf" || str == "koki" || str == "kfc") {if (Area[1] == "4woth") {Area[1] = "5woth";} else if (Area[1] == "3woth") {Area[1] = "4woth";} else if (Area[1] == "2woth") {Area[1] = "3woth";} else if (Area[1] == "woth") {Area[1] = "2woth";} else {Area[1] = "woth";}}
		if (str == "llr" || str == "ranch" || str == "lon" || str == "ran") {if (Area[2] == "4woth") {Area[2] = "5woth";} else if (Area[2] == "3woth") {Area[2] = "4woth";} else if (Area[2] == "2woth") {Area[2] = "3woth";} else if (Area[2] == "woth") {Area[2] = "2woth";} else {Area[2] = "woth";}} 
		if (str == "fie" || str == "hf" || str == "field") {if (Area[3] == "4woth") {Area[3] = "5woth";} else if (Area[3] == "3woth") {Area[3] = "4woth";} else if (Area[3] == "2woth") {Area[3] = "3woth";} else if (Area[3] == "woth") {Area[3] = "2woth";} else {Area[3] = "woth";}} 
		if (str == "gv" || str == "val" || str == "valley") {if (Area[4] == "4woth") {Area[4] = "5woth";} else if (Area[4] == "3woth") {Area[4] = "4woth";} else if (Area[4] == "2woth") {Area[4] = "3woth";} else if (Area[4] == "woth") {Area[4] = "2woth";} else {Area[4] = "woth";}} 
		if (str == "hyl" || str == "hylia" || str == "lh" || str == "lake") {if (Area[5] == "4woth") {Area[5] = "5woth";} else if (Area[5] == "3woth") {Area[5] = "4woth";} else if (Area[5] == "2woth") {Area[5] = "3woth";} else if (Area[5] == "woth") {Area[5] = "2woth";} else {Area[5] = "woth";}} 
		if (str == "mkt" || str == "market" || str == "mar") {if (Area[6] == "4woth") {Area[6] = "5woth";} else if (Area[6] == "3woth") {Area[6] = "4woth";} else if (Area[6] == "2woth") {Area[6] = "3woth";} else if (Area[6] == "woth") {Area[6] = "2woth";} else {Area[6] = "woth";}} 
		if (str == "hyr c" || str == "hcast" || str == "hc") {if (Area[7] == "4woth") {Area[7] = "5woth";} else if (Area[7] == "3woth") {Area[7] = "4woth";} else if (Area[7] == "2woth") {Area[7] = "3woth";} else if (Area[7] == "woth") {Area[7] = "2woth";} else {Area[7] = "woth";}} 
		if (str == "ogc" || str == "out g" || str == "gfairy" || str == "og" || str == "out") {if (Area[8] == "4woth") {Area[8] = "5woth";} else if (Area[8] == "3woth") {Area[8] = "4woth";} else if (Area[8] == "2woth") {Area[8] = "3woth";} else if (Area[8] == "woth") {Area[8] = "2woth";} else {Area[8] = "woth";}} 
		if (str == "tot" || str == "temple" || str == "time") {if (Area[9] == "4woth") {Area[9] = "5woth";} else if (Area[9] == "3woth") {Area[9] = "4woth";} else if (Area[9] == "2woth") {Area[9] = "3woth";} else if (Area[9] == "woth") {Area[9] = "2woth";} else {Area[9] = "woth";}} 
		if (str == "fountain" || str == "fount" || str == "fou" || str == "zf") {if (Area[10] == "4woth") {Area[10] = "5woth";} else if (Area[10] == "3woth") {Area[10] = "4woth";} else if (Area[10] == "2woth") {Area[10] = "3woth";} else if (Area[10] == "woth") {Area[10] = "2woth";} else {Area[10] = "woth";}} 
		if (str == "ice" || str == "ic" || str == "cavern") {if (Area[11] == "4woth") {Area[11] = "5woth";} else if (Area[11] == "3woth") {Area[11] = "4woth";} else if (Area[11] == "2woth") {Area[11] = "3woth";} else if (Area[11] == "woth") {Area[11] = "2woth";} else {Area[11] = "woth";}} 
		if (str == "deku" || str == "dek" || str == "dt") {if (Area[12] == "4woth") {Area[12] = "5woth";} else if (Area[12] == "3woth") {Area[12] = "4woth";} else if (Area[12] == "2woth") {Area[12] = "3woth";} else if (Area[12] == "woth") {Area[12] = "2woth";} else {Area[12] = "woth";}} 
		if (str == "lw" || str == "lost" || str == "woods") {if (Area[13] == "4woth") {Area[13] = "5woth";} else if (Area[13] == "3woth") {Area[13] = "4woth";} else if (Area[13] == "2woth") {Area[13] = "3woth";} else if (Area[13] == "woth") {Area[13] = "2woth";} else {Area[13] = "woth";}} 
		if (str == "sfm" || str == "mea" || str == "mead") {if (Area[14] == "4woth") {Area[14] = "5woth";} else if (Area[14] == "3woth") {Area[14] = "4woth";} else if (Area[14] == "2woth") {Area[14] = "3woth";} else if (Area[14] == "woth") {Area[14] = "2woth";} else {Area[14] = "woth";}} 
		if (str == "gor" || str == "gc" || str == "goron") {if (Area[15] == "4woth") {Area[15] = "5woth";} else if (Area[15] == "3woth") {Area[15] = "4woth";} else if (Area[15] == "2woth") {Area[15] = "3woth";} else if (Area[15] == "woth") {Area[15] = "2woth";} else {Area[15] = "woth";}} 
		if (str == "dod" || str == "dodo" || str == "dc") {if (Area[16] == "4woth") {Area[16] = "5woth";} else if (Area[16] == "3woth") {Area[16] = "4woth";} else if (Area[16] == "2woth") {Area[16] = "3woth";} else if (Area[16] == "woth") {Area[16] = "2woth";} else {Area[16] = "woth";}} 
		if (str == "tra" || str == "trail" || str == "dmt") {if (Area[17] == "4woth") {Area[17] = "5woth";} else if (Area[17] == "3woth") {Area[17] = "4woth";} else if (Area[17] == "2woth") {Area[17] = "3woth";} else if (Area[17] == "woth") {Area[17] = "2woth";} else {Area[17] = "woth";}} 
		if (str == "cra" || str == "crater" || str == "dmc") {if (Area[18] == "4woth") {Area[18] = "5woth";} else if (Area[18] == "3woth") {Area[18] = "4woth";} else if (Area[18] == "2woth") {Area[18] = "3woth";} else if (Area[18] == "woth") {Area[18] = "2woth";} else {Area[18] = "woth";}} 
		if (str == "kak" || str == "kaki" || str == "kv") {if (Area[19] == "4woth") {Area[19] = "5woth";} else if (Area[19] == "3woth") {Area[19] = "4woth";} else if (Area[19] == "2woth") {Area[19] = "3woth";} else if (Area[19] == "woth") {Area[19] = "2woth";} else {Area[19] = "woth";}} 
		if (str == "gra" || str == "grave" || str == "gy") {if (Area[20] == "4woth") {Area[20] = "5woth";} else if (Area[20] == "3woth") {Area[20] = "4woth";} else if (Area[20] == "2woth") {Area[20] = "3woth";} else if (Area[20] == "woth") {Area[20] = "2woth";} else {Area[20] = "woth";}} 
		if (str == "riv" || str == "river" || str == "zr") {if (Area[21] == "4woth") {Area[21] = "5woth";} else if (Area[21] == "3woth") {Area[21] = "4woth";} else if (Area[21] == "2woth") {Area[21] = "3woth";} else if (Area[21] == "woth") {Area[21] = "2woth";} else {Area[21] = "woth";}} 
		if (str == "dom" || str == "domain" || str == "zd") {if (Area[22] == "4woth") {Area[22] = "5woth";} else if (Area[22] == "3woth") {Area[22] = "4woth";} else if (Area[22] == "2woth") {Area[22] = "3woth";} else if (Area[22] == "woth") {Area[22] = "2woth";} else {Area[22] = "woth";}} 
		if (str == "col" || str == "colo" || str == "colossus" || str == "co") {if (Area[23] == "4woth") {Area[23] = "5woth";} else if (Area[23] == "3woth") {Area[23] = "4woth";} else if (Area[23] == "2woth") {Area[23] = "3woth";} else if (Area[23] == "woth") {Area[23] = "2woth";} else {Area[23] = "woth";}} 
		if (str == "was" || str == "waste" || str == "wl" || str == "hw") {if (Area[24] == "4woth") {Area[24] = "5woth";} else if (Area[24] == "3woth") {Area[24] = "4woth";} else if (Area[24] == "2woth") {Area[24] = "3woth";} else if (Area[24] == "woth") {Area[24] = "2woth";} else {Area[24] = "woth";}} 
		if (str == "fort" || str == "fortress" || str == "gf") {if (Area[25] == "4woth") {Area[25] = "5woth";} else if (Area[25] == "3woth") {Area[25] = "4woth";} else if (Area[25] == "2woth") {Area[25] = "3woth";} else if (Area[25] == "woth") {Area[25] = "2woth";} else {Area[25] = "woth";}} 
		if (str == "jab" || str == "jabu" || str == "jjb" || str == "jj") {if (Area[26] == "4woth") {Area[26] = "5woth";} else if (Area[26] == "3woth") {Area[26] = "4woth";} else if (Area[26] == "2woth") {Area[26] = "3woth";} else if (Area[26] == "woth") {Area[26] = "2woth";} else {Area[26] = "woth";}} 
		if (str == "for" || str == "forest" || str == "fot" || str == "fo") {if (Area[27] == "4woth") {Area[27] = "5woth";} else if (Area[27] == "3woth") {Area[27] = "4woth";} else if (Area[27] == "2woth") {Area[27] = "3woth";} else if (Area[27] == "woth") {Area[27] = "2woth";} else {Area[27] = "woth";}} 
		if (str == "fir" || str == "fire" || str == "fit" || str == "fi") {if (Area[28] == "4woth") {Area[28] = "5woth";} else if (Area[28] == "3woth") {Area[28] = "4woth";} else if (Area[28] == "2woth") {Area[28] = "3woth";} else if (Area[28] == "woth") {Area[28] = "2woth";} else {Area[28] = "woth";}} 
		if (str == "wat" || str == "wata" || str == "water" || str == "wa") {if (Area[29] == "4woth") {Area[29] = "5woth";} else if (Area[29] == "3woth") {Area[29] = "4woth";} else if (Area[29] == "2woth") {Area[29] = "3woth";} else if (Area[29] == "woth") {Area[29] = "2woth";} else {Area[29] = "woth";}} 
		if (str == "spi" || str == "spirit" || str == "sprt" || str == "sp") {if (Area[30] == "4woth") {Area[30] = "5woth";} else if (Area[30] == "3woth") {Area[30] = "4woth";} else if (Area[30] == "2woth") {Area[30] = "3woth";} else if (Area[30] == "woth") {Area[30] = "2woth";} else {Area[30] = "woth";}} 
		if (str == "sha" || str == "shadow" || str == "shad" || str == "sh") {if (Area[31] == "4woth") {Area[31] = "5woth";} else if (Area[31] == "3woth") {Area[31] = "4woth";} else if (Area[31] == "2woth") {Area[31] = "3woth";} else if (Area[31] == "woth") {Area[31] = "2woth";} else {Area[31] = "woth";}} 
		if (str == "gan" || str == "gan c" || str == "ganons" || str == "ganon" || str == "ga") {if (Area[32] == "4woth") {Area[32] = "5woth";} else if (Area[32] == "3woth") {Area[32] = "4woth";} else if (Area[32] == "2woth") {Area[32] = "3woth";} else if (Area[32] == "woth") {Area[32] = "2woth";} else {Area[32] = "woth";}} 
		if (str == "gtg" || str == "tg" || str == "gt") {if (Area[33] == "4woth") {Area[33] = "5woth";} else if (Area[33] == "3woth") {Area[33] = "4woth";} else if (Area[33] == "2woth") {Area[33] = "3woth";} else if (Area[33] == "woth") {Area[33] = "2woth";} else {Area[33] = "woth";}} 
		if (str == "well" || str == "botw" || str == "wel") {if (Area[34] == "4woth") {Area[34] = "5woth";} else if (Area[34] == "3woth") {Area[34] = "4woth";} else if (Area[34] == "2woth") {Area[34] = "3woth";} else if (Area[34] == "woth") {Area[34] = "2woth";} else {Area[34] = "woth";}}
		if (i <= 3) {
			var str2 = document.getElementById("barren_input" + i).value;
			if (str2 == "kok" || str2 == "kf" || str2 == "koki" || str2 == "kfc") {Area[1] = "barren";}
			if (str2 == "llr" || str2 == "ranch" || str2 == "lon" || str2 == "ran") {Area[2] = "barren";} 
			if (str2 == "fie" || str2 == "hf" || str2 == "field") {Area[3] = "barren";} 
			if (str2 == "gv" || str2 == "val" || str2 == "valley") {Area[4] = "barren";} 
			if (str2 == "hyl" || str2 == "hylia" || str2 == "lh" || str2 == "lake") {Area[5] = "barren";} 
			if (str2 == "mkt" || str2 == "market" || str2 == "mar") {Area[6] = "barren";} 
			if (str2 == "hyr c" || str2 == "hcast" || str2 == "hc") {Area[7] = "barren";} 
			if (str2 == "ogc" || str2 == "out g" || str2 == "gfairy" || str2 == "og" || str2 == "out") {Area[8] = "barren";} 
			if (str2 == "tot" || str2 == "temple" || str2 == "time") {Area[9] = "barren";} 
			if (str2 == "fountain" || str2 == "fount" || str2 == "fou" || str2 == "zf") {Area[10] = "barren";} 
			if (str2 == "ice" || str2 == "ic" || str2 == "cavern") {Area[11] = "barren";} 
			if (str2 == "deku" || str2 == "dek" || str2 == "dt") {Area[12] = "barren";} 
			if (str2 == "lw" || str2 == "lost" || str2 == "woods") {Area[13] = "barren";} 
			if (str2 == "sfm" || str2 == "mea" || str2 == "mead") {Area[14] = "barren";} 
			if (str2 == "gor" || str2 == "gc" || str2 == "goron") {Area[15] = "barren";} 
			if (str2 == "dod" || str2 == "dodo" || str2 == "dc") {Area[16] = "barren";} 
			if (str2 == "tra" || str2 == "trail" || str2 == "dmt") {Area[17] = "barren";} 
			if (str2 == "cra" || str2 == "crater" || str2 == "dmc") {Area[18] = "barren";} 
			if (str2 == "kak" || str2 == "kaki" || str2 == "kv") {Area[19] = "barren";} 
			if (str2 == "gra" || str2 == "grave" || str2 == "gy") {Area[20] = "barren";} 
			if (str2 == "riv" || str2 == "river" || str2 == "zr") {Area[21] = "barren";} 
			if (str2 == "dom" || str2 == "domain" || str2 == "zd") {Area[22] = "barren";} 
			if (str2 == "col" || str2 == "colo" || str2 == "colossus" || str2 == "co") {Area[23] = "barren";} 
			if (str2 == "was" || str2 == "waste" || str2 == "wl" || str2 == "hw") {Area[24] = "barren";} 
			if (str2 == "fort" || str2 == "fortress" || str2 == "gf") {Area[25] = "barren";} 
			if (str2 == "jab" || str2 == "jabu" || str2 == "jjb" || str2 == "jj") {Area[26] = "barren";} 
			if (str2 == "for" || str2 == "forest" || str2 == "fot" || str2 == "fo") {Area[27] = "barren";} 
			if (str2 == "fir" || str2 == "fire" || str2 == "fit" || str2 == "fi") {Area[28] = "barren";} 
			if (str2 == "wat" || str2 == "wata" || str2 == "water" || str2 == "wa") {Area[29] = "barren";} 
			if (str2 == "spi" || str2 == "spirit" || str2 == "sprt" || str2 == "sp") {Area[30] = "barren";} 
			if (str2 == "sha" || str2 == "shadow" || str2 == "shad" || str2 == "sh") {Area[31] = "barren";} 
			if (str2 == "gan" || str2 == "gan c" || str2 == "ganons" || str2 == "ganon" || str2 == "ga") {Area[32] = "barren";} 
			if (str2 == "gtg" || str2 == "tg" || str2 == "gt") {Area[33] = "barren";} 
			if (str2 == "well" || str2 == "botw" || str2 == "wel") {Area[34] = "barren";} 
		}
	}
	
	AreaColors = ["", "00ff88", " aaaa00", " ffff00", " ffaa00", " 00aaff", " aaaaaa", " 84FFFF", " FE0404", " ffffff", " 70ffff", " aaffff", " 996000", " 009000", " 80ff80", " ffcc00", " B35705", " 573E02", " ff5050", " 678C8A", " 8f8493", " 5DB8FE", " 00ffff", " cccc90", " cccc30", " ffff90", " ff0080", " 5FAF36", " ff0000", " 00cccc", " ffff50", " c900c9", " 990000", " ffcc60", " ff00ff"];
	WotHColors = ["", "9cc4d9", "white", "b19cd9","d09cd9","cyan"];

	for (var i = 1; i <= 34; i++) {
		if (Area[i] == "woth" && AreaWotHAge[i] != 1) {
			if (woth1 == "unknown" || !Area[AreaNames.indexOf(woth1)].includes("woth")) {document.getElementById("woth1_title").innerHTML = AreaNames[i]; woth1 = AreaNames[i];}
			else if (woth2 == "unknown" || !Area[AreaNames.indexOf(woth2)].includes("woth")) {document.getElementById("woth2_title").innerHTML = AreaNames[i]; woth2 = AreaNames[i];}
			else if (woth3 == "unknown" || !Area[AreaNames.indexOf(woth3)].includes("woth")) {document.getElementById("woth3_title").innerHTML = AreaNames[i]; woth3 = AreaNames[i];}
			else if (woth4 == "unknown" || !Area[AreaNames.indexOf(woth4)].includes("woth")) {document.getElementById("woth4_title").innerHTML = AreaNames[i]; woth4 = AreaNames[i];}
			else if (woth5 == "unknown" || !Area[AreaNames.indexOf(woth5)].includes("woth")) {document.getElementById("woth5_title").innerHTML = AreaNames[i]; woth5 = AreaNames[i];}
			AreaWotHAge[i] = 1;
		}
		else if (Area[i] == "2woth" && AreaWotHAge[i] != 2) {		
			if (woth1 == "unknown" || !Area[AreaNames.indexOf(woth1)].includes("woth")) {woth1 = AreaNames[i];}
			else if (woth2 == "unknown" || !Area[AreaNames.indexOf(woth2)].includes("woth")) {woth2 = AreaNames[i];}
			else if (woth3 == "unknown" || !Area[AreaNames.indexOf(woth3)].includes("woth")) {woth3 = AreaNames[i];}
			else if (woth4 == "unknown" || !Area[AreaNames.indexOf(woth4)].includes("woth")) {woth4 = AreaNames[i];}
			else if (woth5 == "unknown" || !Area[AreaNames.indexOf(woth5)].includes("woth")) {woth5 = AreaNames[i];}
			AreaWotHAge[i] = 2;
		}
		else if (Area[i] == "3woth" && AreaWotHAge[i] != 3) {		
			if (woth1 == "unknown" || !Area[AreaNames.indexOf(woth1)].includes("woth")) {woth1 = AreaNames[i];}
			else if (woth2 == "unknown" || !Area[AreaNames.indexOf(woth2)].includes("woth")) {woth2 = AreaNames[i];}
			else if (woth3 == "unknown" || !Area[AreaNames.indexOf(woth3)].includes("woth")) {woth3 = AreaNames[i];}
			else if (woth4 == "unknown" || !Area[AreaNames.indexOf(woth4)].includes("woth")) {woth4 = AreaNames[i];}
			else if (woth5 == "unknown" || !Area[AreaNames.indexOf(woth5)].includes("woth")) {woth5 = AreaNames[i];}
			AreaWotHAge[i] = 3;
		}
		else if (Area[i] == "4woth" && AreaWotHAge[i] != 4) {		
			if (woth1 == "unknown" || !Area[AreaNames.indexOf(woth1)].includes("woth")) {woth1 = AreaNames[i];}
			else if (woth2 == "unknown" || !Area[AreaNames.indexOf(woth2)].includes("woth")) {woth2 = AreaNames[i];}
			else if (woth3 == "unknown" || !Area[AreaNames.indexOf(woth3)].includes("woth")) {woth3 = AreaNames[i];}
			else if (woth4 == "unknown" || !Area[AreaNames.indexOf(woth4)].includes("woth")) {woth4 = AreaNames[i];}
			else if (woth5 == "unknown" || !Area[AreaNames.indexOf(woth5)].includes("woth")) {woth5 = AreaNames[i];}
			AreaWotHAge[i] = 4;
		}
		else if (Area[i] == "5woth" && AreaWotHAge[i] != 5) {		
			if (woth1 == "unknown" || !Area[AreaNames.indexOf(woth1)].includes("woth")) {woth1 = AreaNames[i];}
			else if (woth2 == "unknown" || !Area[AreaNames.indexOf(woth2)].includes("woth")) {woth2 = AreaNames[i];}
			else if (woth3 == "unknown" || !Area[AreaNames.indexOf(woth3)].includes("woth")) {woth3 = AreaNames[i];}
			else if (woth4 == "unknown" || !Area[AreaNames.indexOf(woth4)].includes("woth")) {woth4 = AreaNames[i];}
			else if (woth5 == "unknown" || !Area[AreaNames.indexOf(woth5)].includes("woth")) {woth5 = AreaNames[i];}
			AreaWotHAge[i] = 5;
		}
		else if (Area[i] == "normal" || Area[i] == "barren") {
			if (woth1 == AreaNames[i]) {woth1 = "unknown"}
			if (woth2 == AreaNames[i]) {woth2 = "unknown"}
			if (woth3 == AreaNames[i]) {woth3 = "unknown"}
			if (woth4 == AreaNames[i]) {woth4 = "unknown"}
			if (woth5 == AreaNames[i]) {woth5 = "unknown"}
		AreaWotHAge[i] = 0;	
		}
	}

	var med_locations_found = 1;
	for (var i =0; i<8; i++) {
			if (Logic.emerald != dungeonStrings[i] && Logic.ruby != dungeonStrings[i] && Logic.sapphire != dungeonStrings[i] && Logic.emerald != "unknown" && Logic.ruby != "unknown" && Logic.sapphire != "unknown") {Location["med" + med_locations_found] = bossStrings[i]; med_locations_found += 1;}
	}

	if (!WotHItems.includes("med1")) { WotHItems.push("med1");}
	if (!WotHItems.includes("med2")) { WotHItems.push("med2");}
	if (!WotHItems.includes("med3")) { WotHItems.push("med3");}
	if (!WotHItems.includes("med4")) { WotHItems.push("med4");}
	if (!WotHItems.includes("med5")) { WotHItems.push("med5");}
	if (!WotHItems.includes("med6")) { WotHItems.push("med6");}
	if (!WotHItems.includes("light_arrows")) {WotHItems.push("light_arrows");}

		if (Known.bow1 && Known.bow2 && Known.bow3) {
			if (ChecksLockedBy.bow1.includes(Location.bow2) && ChecksLockedBy.bow1.includes(Location.bow3)) {if (!WotHItems.includes("bow1")) {WotHItems.push("bow1")}}
			if (ChecksLockedBy.bow2.includes(Location.bow1) && ChecksLockedBy.bow2.includes(Location.bow3)) {if (!WotHItems.includes("bow2")) {WotHItems.push("bow2")}}
			if (ChecksLockedBy.bow3.includes(Location.bow2) && ChecksLockedBy.bow3.includes(Location.bow1)) {if (!WotHItems.includes("bow3")) {WotHItems.push("bow3")}}
			}
		if (ChecksLockedBy.magic1.includes(Location.magic2)) {if (!WotHItems.includes("magic1")) {WotHItems.push("magic1")}}
		if (ChecksLockedBy.magic2.includes(Location.magic1)) {if (!WotHItems.includes("magic2")) {WotHItems.push("magic2")}}
		for (var i = 0; i<Items.length; i++) {
				for (var j = 0; j<WotHItems.length; j++){
					if (Location[WotHItems[j]] != null) {
						if (ChecksLockedBy[Items[i]].includes(Location[WotHItems[j]])) {
							
								if (!WotHItems.includes(Items[i])) {WotHItems.push(Items[i]);}
						}
					}
				}
		}
		var temp = 6;
		document.getElementById("confirmed_logically_required").innerHTML = "";
		while (temp < WotHItems.length) {
		if (!Known[WotHItems[temp]]) {
			if (document.getElementById("confirmed_logically_required").innerHTML != "") {document.getElementById("confirmed_logically_required").innerHTML += ", ";}
			document.getElementById("confirmed_logically_required").innerHTML += ItemNames[Items.indexOf(WotHItems[temp])];
		}
		temp++;
		}
		for (var i = 1; i <= 34; i++) {
			
			var tempnumber1 = 1;
			var tempnumber2 = 0;
			var tempnumber3 = 1;
			var tempbool = false;
		
			
			if (woth1 == AreaNames[i] || woth2 == AreaNames[i] || woth3 == AreaNames[i] || woth4 == AreaNames[i] || woth5 == AreaNames[i]) {
				
				if (woth1 == AreaNames[i]) {tempnumber2 = 1;}
				else if (woth2 == AreaNames[i]) {tempnumber2 = 2;}
				else if (woth3 == AreaNames[i]) {tempnumber2 = 3;}
				else if (woth4 == AreaNames[i]) {tempnumber2 = 4;}
				else if (woth5 == AreaNames[i]) {tempnumber2 = 5;}
				var tempArray = [];
				document.getElementById("woth" + tempnumber2 + "_text" + 1).innerHTML="";
				document.getElementById("woth" + tempnumber2 + "_text" + 2).innerHTML="";
				document.getElementById("woth" + tempnumber2 + "_text" + 3).innerHTML="";
				document.getElementById("woth" + tempnumber2 + "_text" + 4).innerHTML="";
				document.getElementById("woth" + tempnumber2 + "_text" + 5).innerHTML="";
				document.getElementById("woth" + tempnumber2 + "_text" + 6).innerHTML="";
	
				for (var k = 0; k<Items.length; k++) {
					if (Items[k] == "light_arrows") {continue;}
					// Si l'item a été trouvé et n'est pas un hint
					if (Location[Items[k]] != null && (Hinted[Location[Items[k]]] == false || typeof Hinted[Location[Items[k]]] == "undefined")) {
						if ((Locations.indexOf(Location[Items[k]]) >= AreaIndexes[i-1] && Locations.indexOf(Location[Items[k]]) < AreaIndexes[i]) || Locations.indexOf(Location[Items[k]]) == SongIndexes[i-1] || Locations.indexOf(Location[Items[k]]) == SongIndexes2[i-1]) {
						    if (Items[k] == "slingshot1" && ((Logic.slingshot2 && !ChecksPutInLogicBy.slingshot1.includes(Location.slingshot2)) || (Logic.slingshot3 && ChecksPutInLogicBy.slingshot1.includes(Location.slingshot3)))){continue}
							else if (Items[k] == "slingshot2" && ((Logic.slingshot1 && !ChecksPutInLogicBy.slingshot2.includes(Location.slingshot1)) || (Logic.slingshot3 && ChecksPutInLogicBy.slingshot2.includes(Location.slingshot3)))){continue}
							else if (Items[k] == "slingshot3" && ((Logic.slingshot1 && !ChecksPutInLogicBy.slingshot3.includes(Location.slingshot1)) || (Logic.slingshot2 && ChecksPutInLogicBy.slingshot3.includes(Location.slingshot2)))){continue}
							else if (Items[k] == "bomb_bag1" && ((Logic.bomb_bag2 && !ChecksPutInLogicBy.bomb_bag1.includes(Location.bomb_bag2)) || (Logic.bomb_bag3 && ChecksPutInLogicBy.bomb_bag1.includes(Location.bomb_bag3)))){continue}
							else if (Items[k] == "bomb_bag2" && ((Logic.bomb_bag1 && !ChecksPutInLogicBy.bomb_bag2.includes(Location.bomb_bag1)) || (Logic.bomb_bag3 && ChecksPutInLogicBy.bomb_bag2.includes(Location.bomb_bag3)))){continue}
							else if (Items[k] == "bomb_bag3" && ((Logic.bomb_bag1 && !ChecksPutInLogicBy.bomb_bag3.includes(Location.bomb_bag1)) || (Logic.bomb_bag2 && ChecksPutInLogicBy.bomb_bag3.includes(Location.bomb_bag2)))){continue}
							else if (Items[k] == "bow1" && ((Logic.bow2 && !ChecksPutInLogicBy.bow1.includes(Location.bow2)) || (Logic.bow3 && ChecksPutInLogicBy.bow1.includes(Location.bow3)))){continue}
							else if (Items[k] == "bow2" && ((Logic.bow1 && !ChecksPutInLogicBy.bow2.includes(Location.bow1)) || (Logic.bow3 && ChecksPutInLogicBy.bow2.includes(Location.bow3)))){continue}
							else if (Items[k] == "bow3" && ((Logic.bow1 && !ChecksPutInLogicBy.bow3.includes(Location.bow1)) || (Logic.bow2 && ChecksPutInLogicBy.bow3.includes(Location.bow2)))){continue}
							else if (Items[k] == "magic1" && Logic.magic2 && !ChecksPutInLogicBy.magic1.includes(Location.magic2)){continue}
							else if (Items[k] == "magic2" && Logic.magic1 && !ChecksPutInLogicBy.magic2.includes(Location.magic1)){continue}
							else if (Items[k] == "goron_tunic" && Logic.can_stop_link_the_goron && !ChecksPutInLogicBy.goron_tunic.includes("goron_link") && (Logic.wallet1 && !ChecksPutInLogicBy.goron_tunic.includes(Location.wallet1) || Logic.wallet2 && !ChecksPutInLogicBy.goron_tunic.includes(Location.wallet2))){continue}
							else if (Items[k] == "fire_arrows" && Logic.dins_fire && !ChecksPutInLogicBy.fire_arrows.includes(Location.dins_fire)){continue}
							console.log("i :" + i + "/k : " + k + "/tempnumber2 : " + tempnumber2 + "/Items : " + Items[k]); 
							document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "<img id = 'wothMajor" + k + tempnumber2 + "'" + " class = 'wothMajorImages' src=" + ItemImages[k] + ">"; 
							if (WotHItems.includes(Items[k])) {
								document.getElementById("wothMajor" + k + tempnumber2).style.setProperty("-webkit-filter", "drop-shadow(0px 0px 5px lightblue)"); 
								tempnumber3 +=1;
								} 
							for (var j = 0; j < Items.length; j++) {
								if (ChecksLockedBy[Items[k]].includes(Location[Items[j]])){
									document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += "<img id = 'wothMinor" + j + tempnumber2 + "'" + "class = 'wothImages' src=" + ItemImages[j] + ">";
									if (WotHItems.includes(Items[j])) {
										document.getElementById("wothMinor" + j + tempnumber2).style.setProperty("-webkit-filter", "drop-shadow(0px 0px 5px lightblue)"); 
									} 
								}
							} 
						document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push(Items[k]); 
						}
					} 	
				}
				var tempArray2 = [];
				for (k = 0; k < tempArray.length; k++) {
					var tempArray3 = [];
					for (l = 0; l < ChecksPutInLogicBy[tempArray[k]].length; l++) {
						if (Check[ChecksPutInLogicBy[tempArray[k]][l]] == "unknown") {
							tempArray3.push(ChecksPutInLogicBy[tempArray[k]][l]);
						}
					}
					tempArray2.push.apply(tempArray2, tempArray3);
				}
				
				document.getElementById("woth" + tempnumber2 + "_title").style.color= WotHColors[tempnumber2];
				if (AreaWotHAge[i] < tempnumber3) {
					document.getElementById("woth" + tempnumber2 + "_title").style.opacity = .2;
					if (tempnumber2 == 1) {woth1Locations =[];}
					if (tempnumber2 == 2) {woth2Locations = [];}
					if (tempnumber2 == 3) {woth3Locations = [];}
					if (tempnumber2 == 4) {woth4Locations =[];}
					if (tempnumber2 == 5) {woth5Locations = [];}
				}
				if (AreaWotHAge[i] >= tempnumber3) {
					document.getElementById("woth" + tempnumber2 + "_title").style.opacity = 1;
					if (tempnumber2 == 1) {woth1Locations = tempArray2.slice(0);}
					if (tempnumber2 == 2) {woth2Locations = tempArray2.slice(0);}
					if (tempnumber2 == 3) {woth3Locations = tempArray2.slice(0);}
					if (tempnumber2 == 4) {woth4Locations = tempArray2.slice(0);}
					if (tempnumber2 == 5) {woth5Locations = tempArray2.slice(0);}
				}
			}
			
		}
		
	for (var i = 1; i <= 34; i++) {
		
		// if (Area[i] == "barren") {AreaAge[i] += 1;}
		// else {AreaAge[i] = 0;}
		
		// if (AreaAge[i] == 10) {
		if (Area[i] == "barren") {
			hinted = true;
			if (i == 1) {
				if(Check[Locations[0]] == "unknown") {document.getElementById("text_" + Locations[0]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[1]] == "unknown") {document.getElementById("text_" + Locations[1]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[2]] == "unknown") {document.getElementById("text_" + Locations[2]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[3]] == "unknown") {document.getElementById("text_" + Locations[3]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[4]] == "unknown") {document.getElementById("text_" + Locations[4]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[5]] == "unknown") {document.getElementById("text_" + Locations[5]).dispatchEvent(new Event('mousedown'));}
			}
			if (i == 2) {
				if(Check[Locations[6]] == "unknown") {document.getElementById("text_" + Locations[6]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[7]] == "unknown") {document.getElementById("text_" + Locations[7]).dispatchEvent(new Event('mousedown'));}
			}
			if (i == 3) {
				if(Check[Locations[8]] == "unknown") {document.getElementById("text_" + Locations[8]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[9]] == "unknown") {document.getElementById("text_" + Locations[9]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[10]] == "unknown") {document.getElementById("text_" + Locations[10]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[11]] == "unknown") {document.getElementById("text_" + Locations[11]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[12]] == "unknown") {document.getElementById("text_" + Locations[12]).dispatchEvent(new Event('mousedown'));}
			}
			if (i == 4) {
				if(Check[Locations[13]] == "unknown") {document.getElementById("text_" + Locations[13]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[14]] == "unknown") {document.getElementById("text_" + Locations[14]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[15]] == "unknown") {document.getElementById("text_" + Locations[15]).dispatchEvent(new Event('mousedown'));}
			}
			if (i == 5) {
				if(Check[Locations[16]] == "unknown") {document.getElementById("text_" + Locations[16]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[17]] == "unknown") {document.getElementById("text_" + Locations[17]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[18]] == "unknown") {document.getElementById("text_" + Locations[18]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[19]] == "unknown") {document.getElementById("text_" + Locations[19]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[20]] == "unknown") {document.getElementById("text_" + Locations[20]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[21]] == "unknown") {document.getElementById("text_" + Locations[21]).dispatchEvent(new Event('mousedown'));}
			}
			if (i == 6) {
				if(Check[Locations[22]] == "unknown") {document.getElementById("text_" + Locations[22]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[23]] == "unknown") {document.getElementById("text_" + Locations[23]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[24]] == "unknown") {document.getElementById("text_" + Locations[24]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[25]] == "unknown") {document.getElementById("text_" + Locations[25]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[26]] == "unknown") {document.getElementById("text_" + Locations[26]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[27]] == "unknown") {document.getElementById("text_" + Locations[27]).dispatchEvent(new Event('mousedown'));}
			}
			if (i == 7) {
				if(Check[Locations[28]] == "unknown") {document.getElementById("text_" + Locations[28]).dispatchEvent(new Event('mousedown'));}
			}
			if (i == 8) {
				if(Check[Locations[29]] == "unknown") {document.getElementById("text_" + Locations[29]).dispatchEvent(new Event('mousedown'));}
			}
			if (i == 9) {
				if(Check[Locations[30]] == "unknown") {document.getElementById("text_" + Locations[30]).dispatchEvent(new Event('mousedown'));}
			}
			if (i == 10) {
				if(Check[Locations[31]] == "unknown") {document.getElementById("text_" + Locations[31]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[32]] == "unknown") {document.getElementById("text_" + Locations[32]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[33]] == "unknown") {document.getElementById("text_" + Locations[33]).dispatchEvent(new Event('mousedown'));}
			}
			if (i == 11) {
				if(Check[Locations[34]] == "unknown") {document.getElementById("text_" + Locations[34]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[35]] == "unknown") {document.getElementById("text_" + Locations[35]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[36]] == "unknown") {document.getElementById("text_" + Locations[36]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[37]] == "unknown") {document.getElementById("text_" + Locations[37]).dispatchEvent(new Event('mousedown'));}
			}
			if (i == 12) {
				if(Check[Locations[38]] == "unknown") {document.getElementById("text_" + Locations[38]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[39]] == "unknown") {document.getElementById("text_" + Locations[39]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[40]] == "unknown") {document.getElementById("text_" + Locations[40]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[41]] == "unknown") {document.getElementById("text_" + Locations[41]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[42]] == "unknown") {document.getElementById("text_" + Locations[42]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[43]] == "unknown") {document.getElementById("text_" + Locations[43]).dispatchEvent(new Event('mousedown'));}
				Game.deku_checks_remaining = 0;
				Game.checks_remaining -= 1;
			}
			if (i == 13) {
				if(Check[Locations[45]] == "unknown") {document.getElementById("text_" + Locations[45]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[46]] == "unknown") {document.getElementById("text_" + Locations[46]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[47]] == "unknown") {document.getElementById("text_" + Locations[47]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[48]] == "unknown") {document.getElementById("text_" + Locations[48]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[49]] == "unknown") {document.getElementById("text_" + Locations[49]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[50]] == "unknown") {document.getElementById("text_" + Locations[50]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[51]] == "unknown") {document.getElementById("text_" + Locations[51]).dispatchEvent(new Event('mousedown'));}
			}
			if (i == 14) {
				if(Check[Locations[52]] == "unknown") {document.getElementById("text_" + Locations[52]).dispatchEvent(new Event('mousedown'));}
			}
			if (i == 15) {
				if(Check[Locations[53]] == "unknown") {document.getElementById("text_" + Locations[53]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[54]] == "unknown") {document.getElementById("text_" + Locations[54]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[55]] == "unknown") {document.getElementById("text_" + Locations[55]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[56]] == "unknown") {document.getElementById("text_" + Locations[56]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[57]] == "unknown") {document.getElementById("text_" + Locations[57]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[58]] == "unknown") {document.getElementById("text_" + Locations[58]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[59]] == "unknown") {document.getElementById("text_" + Locations[59]).dispatchEvent(new Event('mousedown'));}
			}
			if (i == 16) {
				if(Check[Locations[60]] == "unknown") {document.getElementById("text_" + Locations[60]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[61]] == "unknown") {document.getElementById("text_" + Locations[61]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[62]] == "unknown") {document.getElementById("text_" + Locations[62]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[63]] == "unknown") {document.getElementById("text_" + Locations[63]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[64]] == "unknown") {document.getElementById("text_" + Locations[64]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[65]] == "unknown") {document.getElementById("text_" + Locations[65]).dispatchEvent(new Event('mousedown'));}
				Game.dodongos_checks_remaining = 0;
				Game.checks_remaining -= 1;
			}
			if (i == 17) {
				if(Check[Locations[67]] == "unknown") {document.getElementById("text_" + Locations[67]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[68]] == "unknown") {document.getElementById("text_" + Locations[68]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[69]] == "unknown") {document.getElementById("text_" + Locations[69]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[70]] == "unknown") {document.getElementById("text_" + Locations[70]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[71]] == "unknown") {document.getElementById("text_" + Locations[71]).dispatchEvent(new Event('mousedown'));}
			}
			if (i == 18) {
				if(Check[Locations[72]] == "unknown") {document.getElementById("text_" + Locations[72]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[73]] == "unknown") {document.getElementById("text_" + Locations[73]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[74]] == "unknown") {document.getElementById("text_" + Locations[74]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[75]] == "unknown") {document.getElementById("text_" + Locations[75]).dispatchEvent(new Event('mousedown'));}
			}
			if (i == 19) {
				if(Check[Locations[76]] == "unknown") {document.getElementById("text_" + Locations[76]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[77]] == "unknown") {document.getElementById("text_" + Locations[77]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[78]] == "unknown") {document.getElementById("text_" + Locations[78]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[79]] == "unknown") {document.getElementById("text_" + Locations[79]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[80]] == "unknown") {document.getElementById("text_" + Locations[80]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[81]] == "unknown") {document.getElementById("text_" + Locations[81]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[82]] == "unknown") {document.getElementById("text_" + Locations[82]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[83]] == "unknown") {document.getElementById("text_" + Locations[83]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[84]] == "unknown") {document.getElementById("text_" + Locations[84]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[85]] == "unknown") {document.getElementById("text_" + Locations[85]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[86]] == "unknown") {document.getElementById("text_" + Locations[86]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[87]] == "unknown") {document.getElementById("text_" + Locations[87]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[88]] == "unknown") {document.getElementById("text_" + Locations[88]).dispatchEvent(new Event('mousedown'));}
			}
			if (i == 20) {
				if(Check[Locations[89]] == "unknown") {document.getElementById("text_" + Locations[89]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[90]] == "unknown") {document.getElementById("text_" + Locations[90]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[91]] == "unknown") {document.getElementById("text_" + Locations[91]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[92]] == "unknown") {document.getElementById("text_" + Locations[92]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[93]] == "unknown") {document.getElementById("text_" + Locations[93]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[94]] == "unknown") {document.getElementById("text_" + Locations[94]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[95]] == "unknown") {document.getElementById("text_" + Locations[95]).dispatchEvent(new Event('mousedown'));}
			}
			if (i == 21) {
				if(Check[Locations[96]] == "unknown") {document.getElementById("text_" + Locations[96]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[97]] == "unknown") {document.getElementById("text_" + Locations[97]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[98]] == "unknown") {document.getElementById("text_" + Locations[98]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[99]] == "unknown") {document.getElementById("text_" + Locations[99]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[100]] == "unknown") {document.getElementById("text_" + Locations[100]).dispatchEvent(new Event('mousedown'));}
			}
			if (i == 22) {
				if(Check[Locations[101]] == "unknown") {document.getElementById("text_" + Locations[101]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[102]] == "unknown") {document.getElementById("text_" + Locations[102]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[103]] == "unknown") {document.getElementById("text_" + Locations[103]).dispatchEvent(new Event('mousedown'));}
			}
			if (i == 23) {
				if(Check[Locations[104]] == "unknown") {document.getElementById("text_" + Locations[104]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[105]] == "unknown") {document.getElementById("text_" + Locations[105]).dispatchEvent(new Event('mousedown'));}
			}
			if (i == 24) {
				if(Check[Locations[106]] == "unknown") {document.getElementById("text_" + Locations[106]).dispatchEvent(new Event('mousedown'));}
			}
			if (i == 25) {
				if(Check[Locations[107]] == "unknown") {document.getElementById("text_" + Locations[107]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[108]] == "unknown") {document.getElementById("text_" + Locations[108]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[109]] == "unknown") {document.getElementById("text_" + Locations[109]).dispatchEvent(new Event('mousedown'));}
			}
			if (i == 26) {
				if(Check[Locations[110]] == "unknown") {document.getElementById("text_" + Locations[110]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[111]] == "unknown") {document.getElementById("text_" + Locations[111]).dispatchEvent(new Event('mousedown'));}
				if(Check[Locations[112]] == "unknown") {document.getElementById("text_" + Locations[112]).dispatchEvent(new Event('mousedown'));}
				Game.jabu_checks_remaining = 0;
				Game.checks_remaining -= 1;
			}
			if (i == 27) {
				Game.checks_remaining -= Game.forest_checks_remaining;
				Game.forest_checks_remaining = 0;
			}
			if (i == 28) {
				Game.checks_remaining -= Game.fire_checks_remaining;
				Game.fire_checks_remaining = 0;
			}
			if (i == 29) {
				Game.checks_remaining -= Game.water_checks_remaining;
				Game.water_checks_remaining = 0;
			}
			if (i == 30) {
				Game.checks_remaining -= Game.spirit_checks_remaining;
				Game.spirit_checks_remaining = 0;
			}
			if (i == 31) {
				Game.checks_remaining -= Game.shadow_checks_remaining;
				Game.shadow_checks_remaining = 0;
			}
			if (i == 32) {
				if (Game.ganon_checks_remaining != 0) { document.getElementById("ganons").click(); }
			}
			if (i == 33) {
				Game.checks_remaining -= Game.gtg_checks_remaining;
				Game.gtg_checks_remaining = 0;
			}
			if (i == 34) {
				Game.checks_remaining -= Game.well_checks_remaining;
				Game.well_checks_remaining = 0;
			}
			hinted = false;
		}
	}
}

function trackUnreadHints() {
	var temptext = document.getElementById("unread").innerHTML.split("Unread: ");
	temptext[1] = "";
	if (Check.tokens_30 == "unknown") temptext[1] += "30 "; 
	if (Check.tokens_40 == "unknown") temptext[1] += "40 "; 
	if (Check.tokens_50 == "unknown") temptext[1] += "50 "; 
	if (Check.oot == "unknown") temptext[1] += "OoT "; 
	if (Check.trade_quest == "unknown") temptext[1] += "Bigo "; 
	if (Check.frogs_2 == "unknown") temptext[1] += "Frogs2 "; 
	if (Check.theater == "unknown") temptext[1] += "Mask ";  
	document.getElementById("unread").innerHTML = temptext[0] + "Unread: " + temptext[1];
}


