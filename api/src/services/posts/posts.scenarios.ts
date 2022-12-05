import type { Prisma, Post } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        title: 'String',
        body: 'String',
        updatedAt: '2022-12-02T21:11:38.389Z',
      },
    },
    two: {
      data: {
        title: 'String',
        body: 'String',
        updatedAt: '2022-12-02T21:11:38.389Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>
