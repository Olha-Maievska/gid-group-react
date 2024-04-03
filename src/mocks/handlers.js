import { HttpResponse, http } from 'msw'
import { teamData } from '@team/components/TeamPeople/data'
import { projectsData } from '@projects/data'
import { reviewsData } from '@reviews/data'
import { blogData } from '@blog/data'
 
export const handlers = [
  http.get('/team', () => {
    return HttpResponse.json(teamData)
  }),
  http.get('/projects', () => {
    return HttpResponse.json(projectsData)
  }),
  http.get('/reviews', () => {
    return HttpResponse.json(reviewsData)
  }),
  http.get('/blog', () => {
    return HttpResponse.json(blogData)
  }),
  http.post('/sendCatalog', async ({ request }) => {
      const body = await request.json()
      return HttpResponse.json(body)
  }),
  http.post('/sendContact', async ({ request }) => {
      const body = await request.json()
      return HttpResponse.json(body)
  }),
  http.post('/sendCall', async ({ request }) => {
      const body = await request.json()
      return HttpResponse.json(body)
  }),
  http.post('/sendPrice', async ({ request }) => {
      const body = await request.json()
      return HttpResponse.json(body)
  }),
]