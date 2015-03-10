#pragma strict

function OnTriggerEnter (col : Collider){
	if(col.gameObject.tag == "Player" && Uniplayer.animated == false){
		col.GetComponent(NavMeshAgent).enabled = false;
	}
}