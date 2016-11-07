public var objectForDestroy : GameObject; // Объект , который будет уничтожаться.
public var timeInSecond : float = 10.0; // время , по истечению которого, обьект , указанный выше уничтожиться.


function Update ()
{
if (timeInSecond > 0)
{
timeInSecond -= Time.deltaTime;

if (timeInSecond <= 0)
{
Destroy(objectForDestroy);
}
}
}