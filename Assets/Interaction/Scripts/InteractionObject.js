#pragma strict

private var colorInit : Color;
private var windows : boolean = false;
private var clic : boolean = false;
private var windows_Rect : Rect = Rect (1,1,512,512);
private var clic_windows_Rect : Rect = Rect (1,1,400,50);
private var windows_id : int = 0;
private var clic_windows_id : int = 1;
var windows_GUIStyle : GUIStyle;
var clic_GUIStyle : GUIStyle;


function Start () {
	colorInit = renderer.material.color;
}

function Update () {
	if (Input.GetKeyDown (KeyCode.Return)){
		windows = false;
	}
}

function OnMouseEnter () {
	clic = true;
	renderer.material.color = colorInit + (Color.white);

}

function OnMouseExit () {
	clic = false;
	renderer.material.color = colorInit;

}

function OnMouseDown () {
	if (windows)
		windows = false;
	else
		windows = true;
}


function OnGUI () {
	if (windows)
		windows_Rect = GUI.Window(windows_id, windows_Rect, myWindow , "", windows_GUIStyle);
	else if (clic)
		clic_windows_Rect = GUI.Window(clic_windows_id, clic_windows_Rect, myWindow , "", clic_GUIStyle);
		
}

function myWindow () {
	GUI.DragWindow();
}

function interacte(){
		windows = true;
};

function interacteStop(){
		windows = false;
};

















