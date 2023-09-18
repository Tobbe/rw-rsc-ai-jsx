/** @jsxImportSource ai-jsx/react */
import { ReactNode, Suspense } from 'react'

import {
  Chat,
  Conversation,
  Message,
  ChatState,
} from 'ai-jsx/experimental/next/chat'

import ResultContainer from 'src/components/ResultContainer'

import { onSend } from './onSend'

function User() {
  return (
    <li>
      👤: <Message />
    </li>
  )
}

function Assistant() {
  return (
    <li>
      🤖:{' '}
      <Suspense fallback="_">
        <Message />
      </Suspense>
    </li>
  )
}

function SubmitButton({ children }: { children: ReactNode }) {
  return (
    <ChatState
      pending={
        <button type="submit" disabled>
          {children}
        </button>
      }
    >
      <button type="submit">{children}</button>
    </ChatState>
  )
}

export default function App() {
  return (
    <ResultContainer
      title="Basic Chat"
      description="In this demo, you can chat with a quirky assistant."
    >
      <Chat onSend={onSend}>
        <ul>
          <Conversation>
            {{
              user: <User />,
              assistant: <Assistant />,
            }}
          </Conversation>
        </ul>
        <div>
          <input
            placeholder={'Say something...'}
            name="message"
            type="text"
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
          />
          <SubmitButton>Send</SubmitButton>
        </div>
      </Chat>
    </ResultContainer>
  )
}
