using UnityEngine;
using System.Collections;

public class Torche : MonoBehaviour
{
	 private bool isObjectVisible = true;

	
	void Start ()
	{
		isObjectVisible =true;
	}

	void Update ()
	{
		if(Input.GetKeyDown(KeyCode.T))
		{
			foreach (Transform child in this.transform)
			{
				if(isObjectVisible){
					//child.gameObject.active = !child.gameObject.active;
					child.gameObject.SetActive(false);	
					//Debug.Log(child);
					//isObjectVisible = false;
				}else{	
					//isObjectVisible = true;
				child.gameObject.SetActive(true);	
				}
			
			}
			isObjectVisible = !isObjectVisible;
		}
	}

}
