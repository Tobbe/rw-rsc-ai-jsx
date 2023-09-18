import React from 'react'

export default function ResultContainer({
  title,
  children,
  description,
}: {
  title: string
  children: React.ReactNode
  description?: React.ReactNode
}) {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div>{children}</div>
    </div>
  )
}
