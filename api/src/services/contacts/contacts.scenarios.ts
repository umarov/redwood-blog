import type { Prisma, Contact } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ContactCreateArgs>({
  contact: {
    one: {
      data: {
        name: 'String',
        email: 'String',
        message: 'String',
        updatedAt: '2022-12-11T20:29:49.162Z',
      },
    },
    two: {
      data: {
        name: 'String',
        email: 'String',
        message: 'String',
        updatedAt: '2022-12-11T20:29:49.162Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Contact, 'contact'>
