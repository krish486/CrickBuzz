import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router"
import router from './App'
import { QueryClientProvider, } from '@tanstack/react-query'
import queryClient from './lib/queryClient'

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)
