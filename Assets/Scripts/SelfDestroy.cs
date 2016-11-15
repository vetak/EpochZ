using UnityEngine;
using System.Collections;

public class SelfDestroy : MonoBehaviour {
	public int destroytime = 5;

	// Update is called once per frame
	void Update () {
		Destroy (this.gameObject, destroytime);
	}
}
