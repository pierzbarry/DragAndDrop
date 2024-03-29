import React from 'react'
import ReactDOM from 'react-dom'
import Board from '@lourenci/react-kanban'

import './styles.css'

const board = {
  lanes: [
    {
      id: 1,
      title: 'Backlog',
      cards: [
        {
          id: 1,
          title: 'Card title 1',
          description: 'Card content'
        },
        {
          id: 2,
          title: 'Card title 2',
          description: 'Card content'
        },
        {
          id: 3,
          title: 'Card title 3',
          description: 'Card content'
        }
      ]
    },
    {
      id: 2,
      title: 'Doing',
      cards: [
        {
          id: 9,
          title: 'Card title 9',
          description: 'Card content'
        }
      ]
    },
    {
      id: 3,
      title: 'Q&A',
      cards: [
        {
          id: 10,
          title: 'Card title 10',
          description: 'Card content'
        },
        {
          id: 11,
          title: 'Card title 11',
          description: 'Card content'
        }
      ]
    },
    {
      id: 4,
      title: 'Production',
      cards: [
        {
          id: 12,
          title: 'Card title 12',
          description: 'Card content'
        },
        {
          id: 13,
          title: 'Card title 13',
          description: 'Card content'
        }
      ]
    }
  ]
}

function App() {
  return (
    <Board
      allowRemoveLane
      allowRenameLane
      allowRemoveCard
      onLaneRemove={console.log}
      onCardRemove={console.log}
      onLaneRename={console.log}
      initialBoard={board}
    />
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
