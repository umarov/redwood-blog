// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  articles: [
    {
      id: 42,
      title: 'yo',
      body: 'sup',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
})
