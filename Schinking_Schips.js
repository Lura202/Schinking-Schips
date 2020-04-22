			var treffer = 0;
			var schuesse = 15;
			var sendet = 0;
			function reply_click(id){
				if(sendet == 0){
					send_Schips();
					sendet += 1;
				}
				if(treffer>=5){
					alert("Du hast doch schon Gewonnen!");
				}
				else{
					if(schuesse>0){
						
						var name = document.getElementById(id).name;
						if(name=="schip"){	
							document.getElementById(id).classList.add('button2');
							document.getElementById(id).classList.remove('button');
							document.getElementById(id).disabled = true;
							treffer += 1;
						}
						else{
							document.getElementById(id).disabled = true;
						}
						schuesse -= 1;
					}
					else{
						alert("Du hast alle Versuche verbraucht!");
					}
				}
			}
			function send_Schips(){
				var i = 0;
				while (i < 5){
					var schip_id= Math.floor(Math.random() * Math.floor(25));
						if(document.getElementById(schip_id).name == "water"){
						document.getElementById(schip_id).name = "schip";
						i += 1;
					}
				}
				//alert("Schipas has been sended");
			}
