import { io } from 'https://cdn.socket.io/4.7.4/socket.io.esm.min.js'

const socket = io()

const $ = (elemntByid) => document.getElementById(elemntByid)
const form = $('form')
const input = $('input')
const messages = $('messages')

socket.on('chat message', (msg) => {
    const item =`<li>${msg}</li>` 
    messages.insertAdjacentHTML('beforeend', item)
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (input.value) {
        socket.emit('chat message', input.value)
        input.value = ''
    }
})