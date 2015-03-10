#pragma strict

public var object : GameObject;

function Start () {

}

function Update () {

}

function OnTriggerEnter (col : Collider){
	if(col.gameObject.tag == "Player" && Uniplayer.animated == false && col.GetComponent(Navigation).isEnabled()){
		col.GetComponent(NavMeshAgent).enabled = false;
		object.GetComponent(InteractionObject).interacte();
	}
}