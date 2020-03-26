import { Message } from './message.types'

const messages: Message[] = []

async function addMessage(message: Message): Promise<Message> {
  messages.push(message)

  return message
}

async function getAllMessages(): Promise<Message[]> {
  return messages
}

export const messageStore = {
  add: addMessage,
  list: getAllMessages
}
