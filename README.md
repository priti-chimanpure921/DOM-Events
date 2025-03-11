# DOM Events Handling

<h1>DOM EVENTS</h1>
<p>
Events are signal that something has occurred.
Events are triggered by user input or actions.
Event properties of any element starts with ‘on’ e.g ‘onclick’ , ‘ondrag’
</p>

<ul>

<li>
<b>Event handling by Inline way</b>
Makes HTML code bulky.
Rarely used.
<li>

<li>
Event handling by setting event property to some function.
Only single function can get executed. Multiple functions will not be able to execute.
	<b>Onclick :</b>
Triggers when element gets clicked.
We can set this property to only one value or function.
    <b>onmouseenter :</b>
Triggers when mouse enters an element.
</li>

<li>
Event handling by using Event Listeners:
<b>element.addEventListener</b> is a function which listens for an event.
We can set multiple event listener to an object/element.
</li>

<h3>‘this’ in event handling :</h3>
<p>
    When ‘this’ is used in callback of event handler of some object then it refers to that object.
</p>

<h3>‘event’ argument:</h3>
<p>
It is a default argument in callback of event listener.
Event argument itself is an object which contains many properties. 
The properties of event object gives information about that event.
</p>

<h3>Form events :</h3>
<p>
Submit event get triggered when the form is submitted.
Event.preventDefault() // this will prevent from getting redirected to action url.
Form object contains HTML collection of elements inside the form.
</p>

<h3>Extracting form data :</h3>
<p>
Input.innerText property doesn’t exist for input element as text is entered by user in it.
Input.value property will extract the data entered by user in input field.
</p>

<h3>Change event :<h3>
<p>
The change event occurs when the value of an element has been changed.
Works only for <input> , <textarea> and <select> elements.
Track the change between initial and final stage but not individual input change.
</p>

<h3>Input event :</h3>
<p>
This event fires when the value of input changes individually.
This works only for <input> , <textarea> and <select> elements.
Non character keys never trigger input event.
</p>




