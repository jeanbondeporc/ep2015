
using UnityEngine;
using System.Collections;

public class ShadowsTransform : MonoBehaviour {
	
	public float MvtSpeed = 3f;
	public float epsilon = 0.02f;
	public float Hauteur = 0.02f;
	private float DistanceFront = 0f;
	public float strengthShadowMax = 0.5f; 
	public float strengthShadowMin = 0.2f; 
	public float toShadowSpeed = 2.5f;
	
	
	private Transform follow ;
	private Vector3 targetPosition;
	private float current;
	private float random;
	
	// Use this for initialization
	void Start () {
		//follow = GameObject.FindWithTag("Player").transform;
		current = 1f;
		random= 0.5f;
	}
	
	// Update is called once per frame
	void Update () {
		
		follow = gameObject.transform.parent ;
		// Position de la lumiere
		targetPosition = follow.position + Vector3.up*Hauteur + follow.forward*DistanceFront;
		// Mouvement epsilon
		targetPosition += new Vector3(Random.Range(-epsilon,epsilon),Random.Range(-epsilon,epsilon),Random.Range(-epsilon,epsilon));
		transform.position = Vector3.Lerp(transform.position, targetPosition, (Time.deltaTime * MvtSpeed)/10) ;
		transform.LookAt(follow);
		
		
		if(Mathf.Abs (current - random) > 0.01){
			if(current < random){
				// +++ 
				current = (light.shadowStrength += toShadowSpeed/100);
			}else{
				// --
				current = (light.shadowStrength -= toShadowSpeed/100);
			}
		}else{
			current = Random.Range(strengthShadowMin,strengthShadowMax);
			random = Random.Range(strengthShadowMin,strengthShadowMax);
		}
		
		
	}
	
}

