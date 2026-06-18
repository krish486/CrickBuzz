import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router"
import router from './App'
import { QueryClientProvider, } from '@tanstack/react-query'
import queryClient from './lib/queryClient'
import { Provider } from "react-redux"
import { store } from './lib/store'

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </QueryClientProvider>
)
