document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  const text = document.getElementById('new-task-description')

  // const task = document.getElementById ('tasks')

  //enable user to type a task into the input field and click a submit button
  //listen for a `submit` event on the `<form>` element.

  form.addEventListener('submit', event => {
    event.preventDefault();
    const p = document.createElement ('p');
    p.innerText = text.value;

    //for a list with bulletings createElement <li> instead of <p>
    //adding a button element to enable the user to remove completed tasks

    const removeBtn = document.createElement ('button');
    removeBtn.innerText = 'remove';
    p.appendChild (removeBtn);

    //listen for a `click` event on the `<button>` element

    removeBtn.addEventListener ('click', event => {
      event.target.parentNode.remove();
    });

    //the task string provided appears in the DOM after the submit button has been activated

    appendP(p);
    event.target.reset();
  } )
  });

  const appendP = list => {
    document.getElementById('tasks').appendChild (list);
  }