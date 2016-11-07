@HideInInspector
var paused = false;

var music : GameObject;
var Obj1 : GameObject;
var Obj2 : GameObject;
var Obj3 : GameObject;
function Update(){
if (Input.GetKeyDown(KeyCode.Escape))
{
if (!paused){
Time.timeScale = 0;
paused = true;
music.audio.Pause();
Obj1.GetComponent(MouseLook).enabled = false;
Obj2.GetComponent(MouseLook).enabled = false;
Obj3.GetComponent(MouseLook).enabled = false;
}
else{
Time.timeScale = 1;
paused = false;
music.audio.Play();
Obj1.GetComponent(MouseLook).enabled = true;
Obj2.GetComponent(MouseLook).enabled = true;
Obj3.GetComponent(MouseLook).enabled = true;
}
}

}