#pragma strict

function OnTriggerEnter (col : Collider){
	if(col.gameObject.tag == "Player" && Uniplayer.animated == false){
		col.GetComponent(NavMeshAgent).enabled = false;
		Uniplayer.animated = true;
		Uniplayer.time = 0;
		col.animation.Play("secret_room_out");
		yield WaitForSeconds (col.animation["secret_room_out"].length);
		Uniplayer.animated = false;
	}
}