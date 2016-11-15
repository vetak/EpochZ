using UnityEngine;
using System.Collections;

public class ShowText : MonoBehaviour {

	private bool guiShow = false; 
	public int distance = 3; 
	RaycastHit hit;

	void Update() { 
		//RaycastHit hit; 
		Vector3 fwd = transform.TransformDirection(Vector3.forward); 

		if(Physics.Raycast(transform.position, fwd, out hit, distance)) { 
			if(hit.collider.gameObject.GetComponent<ItemProperties>()) { 
				guiShow = true;
			} 
		}
		else 
			guiShow = false; 
	} 

	void OnGUI() { 
		if (guiShow == true) {
			GUI.Box (new Rect (Screen.width / 2 + 20, Screen.height / 2 + 20, 300, 25), hit.collider.GetComponent<ItemProperties>().itname);
		}
	} 
}