import { BrowserRouter } from 'react-router-dom'
import AppRouter from '@layout/AppRouter'
import { Suspense } from 'react';
import { LoaderBigger } from '@components/Loader'

function App() {
  return (
    <Suspense fallback={<LoaderBigger/>}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
