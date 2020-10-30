document.getElementById('create-task-id').addEventListener('click', () => {
  const txt = getInputText()
  insertTaskIntoPage(txt)
  emptyInputText()
})

const getInputText = () => {
  return document.getElementById('task-text').value
}

const insertTaskIntoPage = (text) => {
  document
    .getElementById('tasks-section')
    .insertAdjacentHTML('beforeend', `
    <div class="card rounded-pill mt-2 text-left">
        <div class="card-body">
            <h5 class="card-title">${text}</h5>
            <button type="button" class="btn btn-success rounded-pill">
                <span class="material-icons">
                    done_outline
                </span>
            </button>
            <button type="button" class="btn btn-danger rounded-pill">
                <span class="material-icons">
                    delete_forever
                </span>
            </button>
        </div>
    </div>
    `)
}

const emptyInputText = () => {
  document.getElementById('task-text').value = ''
}
