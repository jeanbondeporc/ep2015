using UnityEngine;
using System.Collections;

public class ShadowsTransformController : MonoBehaviour {
			
		public float MvtSpeed = 1f;
		public float epsilon = 0.1f;
		public float Hauteur = 1f;
		public float DistanceFront = 1f;
		public float strengthShadowMax = 0.25f; 
		public float strengthShadowMin = 0.01f; 
		public float toShadowSpeed = 1f;
		
		
		private Transform follow ;
		private Vector3 targetPosition;
		private float current;
		private float random;
		
		// Use this for initialization
		void Start () {
			follow = GameObject.FindWithTag("Player").transform;
			current = 1f;
		random= 0.5f;
		}
		
		// Update is called once per frame
		void Update () {

			follow = GameObject.FindWithTag("Player").transform;
			// Position de la lumiere
			targetPosition = follow.position + Vector3.up*Hauteur + follow.forward*DistanceFront;
			// Mouvement epsilon
			targetPosition += new Vector3(Random.Range(0,epsilon),Random.Range(0,epsilon),Random.Range(0,epsilon));
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

