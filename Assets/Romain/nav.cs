using UnityEngine;
using System.Collections;

public class nav : MonoBehaviour {
	public Transform target1;
	public Transform target2A;
	public Transform target2B;
	public int nextposition = 1;

	NavMeshAgent agent;
	// Use this for initialization
	void Start () {
		agent = GetComponent<NavMeshAgent> ();
		agent.enabled = false;
	}
	
	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown (KeyCode.Alpha1)) {
			agent.enabled = true;
			agent.SetDestination (target1.position);
		}
		if (Input.GetKeyDown (KeyCode.Alpha2)) {
			agent.enabled = true;
			agent.SetDestination (target2A.position);
			nextposition = 2;
		}
		if (Input.GetKeyDown (KeyCode.Alpha2) && (nextposition == 2)) {
			agent.enabled = true;
			agent.SetDestination (target2B.position);
			nextposition = 3;
		}
		if (Input.GetKeyDown (KeyCode.Space) && agent.enabled == true) {
			agent.Stop ();
			agent.enabled = false;
		}
	}
}
