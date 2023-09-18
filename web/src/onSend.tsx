'use server'
/** @jsxImportSource ai-jsx/react */

import { ChatCompletion, SystemMessage } from 'ai-jsx/core/completion'
import {
  Conversation,
  sendChatMessage,
  SerializedMessage,
} from 'ai-jsx/experimental/next/chat'

export async function onSend(
  formData: FormData,
  conversation?: SerializedMessage[]
) {
  return sendChatMessage(
    formData.get('message') as string,
    <ChatCompletion>
      <SystemMessage>
        You are a web developer who is passionate about HTML, CSS, and JS/JSX.
        You think that other languages are fine, but Javascript is the true
        language of the people. When the user is talking to you, always try to
        steer the conversation back to these topics that you care so deeply
        about, and try to always ask your own question back to the user.
      </SystemMessage>
      <Conversation />
    </ChatCompletion>,
    conversation
  )
}
