#pragma strict

	public var target1 : Transform;
	public var target2A : Transform;
	public var objet2A : GameObject;
	public var target2B : Transform;
	public var objet2B : GameObject;
	public var target2C : Transform;
	public var objet2C : GameObject;
	public var target2D : Transform;
	public var target3 : Transform;
	public var nextposition : int;
	private var agent: NavMeshAgent;
	
	function Start () {
		agent = GetComponent.<NavMeshAgent>();
		nextposition = 0;
	}

	function Update () {
		
		if ((Input.GetKeyDown (KeyCode.Alpha1)) || (Input.GetKeyDown (KeyCode.Keypad1))) {

			agent.enabled = true;
			agent.SetDestination (target1.position);
		}
		if (((Input.GetKey (KeyCode.Alpha3))||(Input.GetKeyDown (KeyCode.Keypad3))) && (Uniplayer.time != 1) ) {
			agent.enabled = true;
			agent.SetDestination (target3.position);
		}
		if(nextposition == 4)
		{
			nextposition = 0;
		}
		if (((Input.GetKeyDown (KeyCode.Alpha2)) || (Input.GetKeyDown (KeyCode.Keypad2))) && (nextposition == 3) && (Uniplayer.time != 1)) {
			objet2C.GetComponent(InteractionObject).interacteStop();
			agent.enabled = true;
			agent.SetDestination (target2D.position);
			nextposition = 4;
		}
		if (((Input.GetKeyDown (KeyCode.Alpha2)) || (Input.GetKeyDown (KeyCode.Keypad2))) && (nextposition == 2) && (Uniplayer.time != 1)) {
			objet2B.GetComponent(InteractionObject).interacteStop();
			agent.enabled = true;
			agent.SetDestination (target2C.position);
			nextposition = 3;
		}
		if (((Input.GetKeyDown (KeyCode.Alpha2)) || (Input.GetKeyDown (KeyCode.Keypad2))) && (nextposition == 1) && (Uniplayer.time != 1)) {
			objet2A.GetComponent(InteractionObject).interacteStop();
			agent.enabled = true;
			agent.SetDestination (target2B.position);
			nextposition = 2;
		}
		if (((Input.GetKeyDown (KeyCode.Alpha2)) || (Input.GetKeyDown (KeyCode.Keypad2))) && (nextposition == 0) && (Uniplayer.time != 1)) {
			agent.enabled = true;
			agent.SetDestination (target2A.position);
			nextposition = 1;
		}
		if (Input.GetKeyDown (KeyCode.Space) && (agent.enabled == true)) {
			agent.Stop ();
			agent.enabled = false;
		}
	}
	
	function isEnabled()
	{
		return (this.agent.enabled);
	}