#pragma strict

public class Uniplayer
{
	public static var animated : boolean = false;
	public static var time : int = 0;
}

function OnTriggerEnter (col : Collider){
	if(col.gameObject.tag == "Player" && Uniplayer.animated == false){
		col.GetComponent(NavMeshAgent).enabled = false;
		Uniplayer.animated = true;
		Uniplayer.time = 1;
		col.animation.Play("secret_room_in");
		yield WaitForSeconds (col.animation["secret_room_in"].length);
		Uniplayer.animated = false;
	}
}