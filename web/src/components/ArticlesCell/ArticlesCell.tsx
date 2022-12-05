import type { ArticlesQuery, FindPostsVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import Article from '../Article/Article'

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      body
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps<FindPostsVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ articles }: CellSuccessProps<ArticlesQuery>) => {
  return (
    <ul>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </ul>
  )
}
