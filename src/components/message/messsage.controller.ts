import { Message } from './message.types'
import { messageStore } from './message.store'

export async function addMessage(user, message: string): Promise<Message> {
  if (!user || !message) {
    throw new Error('Message needs user and message')
  }

  const fullMessage: Message = {
    user,
    message,
    date: new Date()
  }

  return await messageStore.add(fullMessage)
}

export async function getAllMessages(): Promise<Message[]> {
  return messageStore.list()
}
