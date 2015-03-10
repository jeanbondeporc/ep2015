#pragma strict

var guide_GUIStyle : GUIStyle;
var tresor_GUIStyle : GUIStyle;
var couloir_GUIStyle : GUIStyle;

public var text : String = "\nINSTRUCTIONS\n\n\nUtilisez les touches ZQSD pour vous déplacer\nLa touche T pour allumer ou éteindre la torche\nLa touche C pour interagir avec le soleil\nLa touche Echap pour quitter ou faire apparaitre cette fenetre\n\n Si vous souhaitez faire des visites du donjon, nous vous invitons à suivre les instructions ci-dessous.\nVous pourrez arreter ces visites à tout moment grace à la touche Espace.  \n";
private var menu : boolean = false;
	
function Start () {
	menu = true;
}

function Update () {
		if (menu) {
			if (Input.GetKeyDown(KeyCode.Escape)) {
            	menu = false;
			}
		}else {
			if (Input.GetKeyDown(KeyCode.Escape)) {
            	menu = true;
            }

		}

}

	
function OnGUI() {
		if(menu) {
			GUI.Box(new Rect(-5,-5,3000,1000), "");
			GUI.Box(new Rect(10,30,1000,200), text);
			GUI.Window(0, new Rect(180,300,200,200), myWindow ,"Salle du trésor\n\n Appuyez sur la touche 1" ,tresor_GUIStyle );
			GUI.Window(1, new Rect(400,300,200,200), myWindow ,"Visite guidée\n\n Appuyez sur la touche 2\n tout au long de la visite" ,guide_GUIStyle );
			GUI.Window(2, new Rect(620,300,200,200), myWindow , "Les couloirs du donjon\n\n Appuyez sur la touche 3", couloir_GUIStyle);
		}
	}
	
function myWindow () {
	GUI.DragWindow();
}

